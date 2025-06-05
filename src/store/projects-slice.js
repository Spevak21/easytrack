import { createSlice } from '@reduxjs/toolkit';
// import { TEST_PROJECTS } from '../util/testProjects';

const projectsSlice = createSlice({
  name: 'projects',
  initialState: [],
  reducers: {
    setProjects(state, action) {
      return action.payload;
    },

    addProject(state, action) {
      return [action.payload, ...state];
    },
    replaceProject(state, action) {
      return state.map((project) => {
        if (project.id === action.payload.id) {
          return action.payload;
        } else {
          return project;
        }
      });
    },
    removeProject(state, action) {
      return state.filter((project) => project.id !== action.payload);
    },

    addTask(state, action) {
      return state.map((project) => {
        if (project.id === action.payload.projectId) {
          return { ...project, tasks: [action.payload, ...project.tasks] };
        } else {
          return project;
        }
      });
    },
    replaceTask(state, action) {
      return state.map((project) => {
        if (project.id === action.payload.projectId) {
          return {
            ...project,
            tasks: project.tasks.map((task) =>
              task.id === action.payload.id ? action.payload : task
            ),
          };
        } else {
          return project;
        }
      });
    },
    removeTask(state, action) {
      return state.map((project) => {
        if (project.id === action.payload.projectId) {
          return {
            ...project,
            tasks: project.tasks.filter(
              (task) => task.id !== action.payload.id
            ),
          };
        } else {
          return project;
        }
      });
    },
  },
});

export const projectsActions = projectsSlice.actions;
export default projectsSlice.reducer;
