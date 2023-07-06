import { createAsyncThunk } from '@reduxjs/toolkit';
import fetchStudentInfo from './service';

export const fetchStudentInfoAsync = createAsyncThunk(
  'studentDashboard/fetchStudentInfo',
  async () => {
    return await fetchStudentInfo();
  }
);
