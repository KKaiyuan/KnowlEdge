import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchStudentInfo,
  patchStudentCourses,
  fetchAllCourses,
} from './service';

export const fetchStudentInfoAsync = createAsyncThunk(
  'studentDashboard/fetchStudentInfo',
  async (uid) => {
    return await fetchStudentInfo(uid);
  }
);

export const patchStudentCoursesAsync = createAsyncThunk(
  'studentDashboard/patchStudentCourses',
  async ({ uid, updatedCourses }) => {
    return await patchStudentCourses(uid, updatedCourses);
  }
);

export const fetchAllCoursesAsync = createAsyncThunk(
  'studentDashboard/fetchAllCourses',
  async () => {
    return await fetchAllCourses();
  }
);
