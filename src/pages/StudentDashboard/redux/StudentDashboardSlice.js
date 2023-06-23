import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showEnrollModal: false,
};

const studentDashboardSlice = createSlice({
  name: 'studentDashboard',
  initialState,
  reducers: {
    setEnrollModal: (state, action) => {
      state.showEnrollModal = action.payload;
    },
  },
});

export const { setEnrollModal } = studentDashboardSlice.actions;
const studentDashboardReducer = studentDashboardSlice.reducer;
export default studentDashboardReducer;
