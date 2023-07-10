import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchStudentInfo,
  patchStudentCourses,
  fetchAllCourses,
} from './service';

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

export const fetchAllCoursesAsync = createAsyncThunk(
  'studentDashboard/fetchAllCourses',
  async () => {
    return await fetchAllCourses();
  }
);
