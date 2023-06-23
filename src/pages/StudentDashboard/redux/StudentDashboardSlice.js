import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showEnrollModal: false,
  searchContent: '',
};

const studentDashboardSlice = createSlice({
  name: 'studentDashboard',
  initialState,
  reducers: {
    setEnrollModal: (state, action) => {
      state.showEnrollModal = action.payload;
    },
    setSearchContent: (state, action) => {
      state.searchContent = action.payload;
    },
  },
});

export const { setEnrollModal, setSearchContent } =
  studentDashboardSlice.actions;
const studentDashboardReducer = studentDashboardSlice.reducer;
export default studentDashboardReducer;
