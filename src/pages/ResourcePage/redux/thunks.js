import { createAsyncThunk } from '@reduxjs/toolkit';
import { addComment, fetchComments, patchUpvotes, getCourseContent } from './service';

export const fetchCommentsAsync = createAsyncThunk(
  'resourcePage/fetchComments',
  async (resourceID) => {
    return await fetchComments(resourceID);
  }
);

export const addCommentAsync = createAsyncThunk(
  'resourcePage/addComment',
  async (comment) => {
    return await addComment(comment);
  }
);

export const patchUpvotesAsync = createAsyncThunk(
  'resourcePage/patchUpvotes',
  async (data) => {
    return await patchUpvotes(data);
  }
);


export const getCourseContentAsync = createAsyncThunk(
  'resourcePage/getContent',
  async (courseIdentifer) => {
    return await getCourseContent(courseIdentifer);
  }
)
