import {
  deepClone,
  formatDate,
  formatTimer,
  generateID,
  getCurrentTimestamp,
  getLocalStorageItem,
  setLocalStorageItem,
} from '../util/helpers';
import { dataActions } from './data-slice';
import { projectsActions } from './projects-slice';
import { uiActions } from './ui-slice';

export const initData = () => {
  return (dispatch) => {
    const data = getLocalStorageItem('trackerData');

    if (data === null) {
      setLocalStorageData('trackerData', []);
    } else {
      dispatch(projectsActions.setProjects(data));

      const closeDeadlineProjects = data.filter(
        (project) =>
          project.status === 'active' &&
          (project.deadline - getCurrentTimestamp() < 259200000 || project.deadline < getCurrentTimestamp())
      );

      const closeDeadlinesTasks = data.reduce((acc, project) => {
        if (project.status === 'active') {
          project.tasks.forEach((task) => {
            if (task.deadline !== undefined && task.status === 'active') {
              acc.push(task);
            }
          });
        }
        return acc;
      }, []);

      const allCloseDeadlines = [
        ...closeDeadlineProjects,
        ...closeDeadlinesTasks,
      ];
      allCloseDeadlines.sort((a, b) => a.deadline - b.deadline);

      allCloseDeadlines.forEach((item, i) => {
        const itemType = Object.hasOwn(item, 'projectId') ? 'task' : 'project';

        setTimeout(() => {
          if (item.deadline < getCurrentTimestamp()) {
            dispatch(
              dataActions.addNotification({
                id: generateID(),
                title: `${itemType === 'task' ? 'Task' : 'Project'} deadline exceeded!`,
                message: `Deadline for the "${item.name}" ${itemType} exceeded.\n${formatDate(item.deadline, 'dd.mm.yyyy.(hh:mm:ss)')}`,
                duration: 10000,
                state: 'failed',
              })
            );
          } else if (item.deadline - getCurrentTimestamp() < 259200000) {
            dispatch(
              dataActions.addNotification({
                id: generateID(),
                title: `${itemType === 'task' ? 'Task' : 'Project'} deadline is coming up!`,
                message: `Deadline for the "${item.name}" ${itemType} is closing in.\n${formatTimer(item.deadline - getCurrentTimestamp())}`,
                duration: 10000,
                state: 'warning',
              })
            );
          }
        }, i * 200);
      });
    }
  };
};

export const setLocalStorageData = (data) => {
  return () => {
    setLocalStorageItem('trackerData', data);
  };
};

export const importData = () => {
  return (dispatch) => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'application/json';

    input.onchange = async () => {
      const file = input.files[0];
      if (!file) return;

      try {
        const text = await file.text();
        const parsed = JSON.parse(text);
        localStorage.setItem('trackerData', JSON.stringify(parsed));

        dispatch(projectsActions.setProjects(parsed));
        dispatch(uiActions.changePage('projects'));
        dispatch(
          dataActions.addNotification({
            id: generateID(),
            title: 'Tracking data imported',
            message: 'EasyTrack data imported successfully',
          })
        );
      } catch (err) {
        alert('Invalid JSON file');
        console.error(err);
      }
    };

    input.click();
  };
};

export const exportData = () => {
  return (dispatch) => {
    const raw = localStorage.getItem('trackerData');
    if (!raw) {
      alert('No trackerData found in localStorage');
      return;
    }

    let data;
    try {
      data = JSON.parse(raw);
    } catch {
      alert('trackerData is not valid JSON');
      return;
    }

    const json = JSON.stringify(data, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'EasyTrackData.json';
    a.click();

    URL.revokeObjectURL(url);

    dispatch(
      dataActions.addNotification({
        id: generateID(),
        title: 'Tracking data exported',
        message: 'Use this JSON file to import data in any other browser.',
      })
    );
  };
};

// Project thunks
export const addProjectThunk = (project) => {
  return (dispatch) => {
    project.id = generateID();
    project.dateCreated = getCurrentTimestamp();
    project.status = 'active';
    project.tasks = [];

    dispatch(projectsActions.addProject(project));

    dispatch(
      dataActions.addNotification({
        id: generateID(),
        title: 'Project created!',
        message: `"${project.name}" (project) is created.`,
      })
    );
  };
};

export const editProjectThunk = (project) => {
  return (dispatch) => {
    const clone = deepClone(project);
    clone.dateModified = getCurrentTimestamp();

    dispatch(projectsActions.replaceProject(clone));

    dispatch(
      dataActions.addNotification({
        id: generateID(),
        title: 'Project updated!',
        message: `"${clone.name}" (project) is updated.`,
      })
    );
  };
};

export const finishProjectThunk = (project) => {
  return (dispatch) => {
    const clone = deepClone(project);
    clone.status = 'finished';
    clone.dateFinished = getCurrentTimestamp();
    clone.tasks.forEach((task) => {
      if (task.status === 'active') {
        task.status = 'finished';
        task.dateFinished = getCurrentTimestamp();
      }
    });

    dispatch(projectsActions.replaceProject(clone));

    dispatch(
      dataActions.addNotification({
        id: generateID(),
        title: 'Project finished!',
        message: `"${clone.name}" (project) is completed.`,
        state: 'success',
      })
    );
  };
};

export const discardProjectThunk = (project) => {
  return (dispatch) => {
    const clone = deepClone(project);
    clone.status = 'discarded';
    clone.dateDiscarded = getCurrentTimestamp();
    clone.tasks.forEach((task) => {
      if (task.status === 'active') {
        task.status = 'discarded';
        task.dateDiscarded = getCurrentTimestamp();
      }
    });

    dispatch(projectsActions.replaceProject(clone));

    dispatch(
      dataActions.addNotification({
        id: generateID(),
        title: 'Project discarded!',
        message: `"${clone.name}" (project) is discarded. \n You can still find this project in the Archives.`,
      })
    );
  };
};

export const removeProjectThunk = (project) => {
  return (dispatch) => {
    dispatch(projectsActions.removeProject(project.id));

    dispatch(
      dataActions.addNotification({
        id: generateID(),
        title: 'Project deleted!',
        message: `"${project.name}" (project) is permanently deleted.`,
      })
    );
  };
};

export const restoreProjectThunk = (project) => {
  return (dispatch) => {
    const clone = deepClone(project);
    clone.status = 'active';
    delete clone.dateDiscarded;

    dispatch(projectsActions.replaceProject(clone));

    dispatch(
      dataActions.addNotification({
        id: generateID(),
        title: 'Project restored!',
        message: `"${clone.name}" (project) is restored. \n You can find this project in the active projects.`,
      })
    );
  };
};

// Task thunks
export const addTaskThunk = (task) => {
  return (dispatch, getState) => {
    const clone = deepClone(task);
    clone.id = generateID();
    clone.dateCreated = getCurrentTimestamp();
    clone.time = 0;
    clone.status = 'active';
    clone.trackLogs = [];

    dispatch(projectsActions.addTask(clone));

    const state = getState();
    const project = state.projects.find(
      (project) => project.id === task.projectId
    );

    dispatch(
      dataActions.addNotification({
        id: generateID(),
        title: 'New task created!',
        message: `"${clone.name}" (task) in "${project.name}" (project) is created.`,
      })
    );
  };
};

export const editTaskThunk = (task) => {
  return (dispatch, getState) => {
    const clone = deepClone(task);
    clone.dateModified = getCurrentTimestamp();

    dispatch(projectsActions.replaceTask(clone));
    dispatch(dataActions.setTempData(clone));

    const state = getState();
    const project = state.projects.find(
      (project) => project.id === task.projectId
    );

    dispatch(
      dataActions.addNotification({
        id: generateID(),
        title: 'Task updated!',
        message: `"${clone.name}" (task) in "${project.name}" (project) is updated.`,
      })
    );
  };
};

export const finishTaskThunk = (task) => {
  return (dispatch, getState) => {
    const clone = deepClone(task);
    clone.status = 'finished';
    clone.dateFinished = getCurrentTimestamp();

    dispatch(projectsActions.replaceTask(clone));

    const state = getState();
    const project = state.projects.find(
      (project) => project.id === task.projectId
    );

    dispatch(
      dataActions.addNotification({
        id: generateID(),
        title: 'Task finished!',
        message: `"${clone.name}" (task) from "${project.name}" (project) is completed.`,
        state: 'success',
      })
    );
  };
};

export const discardTaskThunk = (task) => {
  return (dispatch, getState) => {
    const clone = deepClone(task);
    clone.status = 'discarded';
    clone.dateDiscarded = getCurrentTimestamp();

    dispatch(projectsActions.replaceTask(clone));

    const state = getState();
    const project = state.projects.find(
      (project) => project.id === task.projectId
    );

    dispatch(
      dataActions.addNotification({
        id: generateID(),
        title: 'Task discarded!',
        message: `"${clone.name}" (task) in "${project.name}" (project) is discarded.`,
      })
    );
  };
};

export const removeTaskThunk = (task) => {
  return (dispatch, getState) => {
    dispatch(projectsActions.removeTask(task));

    const state = getState();
    const project = state.projects.find(
      (project) => project.id === task.projectId
    );

    dispatch(
      dataActions.addNotification({
        id: generateID(),
        title: 'Task deleted!',
        message: `"${task.name}" (task) in "${project.name}" (project) is permanently deleted.`,
      })
    );
  };
};

export const restoreTaskThunk = (task) => {
  return (dispatch, getState) => {
    const clone = deepClone(task);
    clone.status = 'active';
    delete clone.dateDiscarded;

    dispatch(projectsActions.replaceTask(clone));

    const state = getState();
    const project = state.projects.find(
      (project) => project.id === task.projectId
    );

    dispatch(
      dataActions.addNotification({
        id: generateID(),
        title: 'Task restored!',
        message: `"${clone.name}" (task) from "${project.name}" (project) is restored.`,
      })
    );
  };
};

// Tracker thunks
export const addTrackLog = (data) => {
  return (dispatch, getState) => {
    const state = getState();

    const project = state.projects.find(
      (project) => project.id === data.projectId
    );
    const task = project.tasks.find((task) => task.id === data.taskId);

    const taskClone = deepClone(task);
    taskClone.time = taskClone.time + data.trackedTime;
    taskClone.trackLogs.push({
      start: data.startedAt,
      end: data.endedAt,
      time: data.trackedTime,
    });

    dispatch(projectsActions.replaceTask(taskClone));

    dispatch(
      dataActions.addNotification({
        id: generateID(),
        title: 'Task tracking finished!',
        message: `Time (${formatTimer(data.trackedTime)}) added to "${
          task.name
        }" (task) from "${project.name}" (project)`,
      })
    );
  };
};
