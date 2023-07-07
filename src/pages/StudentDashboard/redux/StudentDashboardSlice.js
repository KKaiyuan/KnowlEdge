import { createSlice } from '@reduxjs/toolkit';
import { fetchStudentInfoAsync, patchStudentCoursesAsync } from './thunks.js';

const initialState = {
  showEnrollModal: false,
  searchContent: '',
  studentInfo: '',
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
  extraReducers: (builder) => {
    builder
      .addCase(fetchStudentInfoAsync.fulfilled, (state, action) => {
        state.studentInfo = action.payload;
      })
      .addCase(patchStudentCoursesAsync.fulfilled, (state, action) => {
        state.studentInfo = {
          ...state.studentInfo,
          courses: [...action.meta.arg],
        };
      });
  },
});

export const { setEnrollModal, setSearchContent } =
  studentDashboardSlice.actions;
const studentDashboardReducer = studentDashboardSlice.reducer;
export default studentDashboardReducer;
