import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchComments } from './service';

export const fetchCommentsAsync = createAsyncThunk(
  'resourcePage/fetchComments',
  async (resourceID) => {
    return await fetchComments(resourceID);
  }
);
