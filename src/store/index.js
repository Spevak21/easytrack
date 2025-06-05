import { configureStore } from '@reduxjs/toolkit';
import uiReducer from './ui-slice';
import dataReducer from './data-slice';
import projectsReducer from './projects-slice';

const store = configureStore({
  reducer: {
    ui: uiReducer,
    data: dataReducer,
    projects: projectsReducer,
  },
});

export default store;
