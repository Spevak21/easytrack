import { uiActions } from './ui-slice';
import { dataActions } from './data-slice';
import { deepClone, generateID, getCurrentTimestamp } from '../util/helpers';

export const resetModal = () => {
  return (dispatch) => {
    dispatch(uiActions.setFormType(null));
    dispatch(uiActions.setConfirmationType(null));
    dispatch(dataActions.setTempData(null));
  };
};

export const startTracking = (data) => {
  return (dispatch) => {
    const newTracker = {
      projectId: data.projectId,
      taskId: data.id,
      time: data.time,
      trackedTime: 0,
      status: 'active',
      startedAt: getCurrentTimestamp(),
      refTime: getCurrentTimestamp(),
    };
    dispatch(dataActions.addTracker(newTracker));

    dispatch(
      dataActions.addNotification({
        id: generateID(),
        title: 'Tracking started!',
        message: `The "${data.name}" task is being tracked.`,
      })
    );
  };
};

export const pauseTracking = (tracker, trackedTime) => {
  return (dispatch) => {
    const clone = deepClone(tracker);
    clone.status = 'paused';
    clone.trackedTime = trackedTime;

    dispatch(dataActions.replaceTracker(clone));
  };
};

export const resumeTracking = (tracker) => {
  return (dispatch) => {
    const clone = deepClone(tracker);
    clone.status = 'active';
    clone.refTime = getCurrentTimestamp();

    dispatch(dataActions.replaceTracker(clone));
  };
};
