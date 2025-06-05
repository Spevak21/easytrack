import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showWelcome: null,
  minimizedHeader: null,
  timeline: null,
  page: null,
  formType: null,
  confirmationType: null,
  actionOrigin: null,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setShowWelcome(state, action) {
      state.showWelcome = action.payload;
    },
    setMinimized(state, action) {
      state.minimizedHeader = action.payload;
    },
    changePage(state, action) {
      state.page = action.payload;
    },
    setTimeline(state, action) {
      state.timeline = action.payload;
    },
    setFormType(state, action) {
      state.formType = action.payload;
    },
    setConfirmationType(state, action) {
      state.confirmationType = action.payload;
    },
    setActionOrigin(state, action) {
      state.actionOrigin = action.payload;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
