import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchStudentInfo, patchStudentCourses } from './service';

export const fetchStudentInfoAsync = createAsyncThunk(
  'studentDashboard/fetchStudentInfo',
  async () => {
    return await fetchStudentInfo();
  }
);

export const patchStudentCoursesAsync = createAsyncThunk(
  'studentDashboard/patchStudentCourses',
  async (newCourses) => {
    return await patchStudentCourses(newCourses);
  }
);
