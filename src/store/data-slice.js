import { createSlice } from '@reduxjs/toolkit';
import { deepClone } from '../util/helpers';

const initialState = {
  tempData: null,
  notifications: [],
  trackers: [],
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setTempData(state, action) {
      state.tempData = deepClone(action.payload);
    },

    addNotification(state, action) {
      state.notifications.push(action.payload);
    },
    removeNotification(state, action) {
      state.notifications = state.notifications.filter((notification) => notification.id !== action.payload);
    },

    addTracker(state, action) {
      state.trackers.push(action.payload);
    },
    removeTracker(state, action) {
      state.trackers = state.trackers.filter((tracker) => tracker.taskId !== action.payload);
    },
    replaceTracker(state, action) {
      state.trackers = state.trackers.map((tracker) => {
        if (tracker.taskId === action.payload.taskId) {
          return action.payload;
        } else {
          return tracker;
        }
      });
    },
  },
});

export const dataActions = dataSlice.actions;
export default dataSlice.reducer;
