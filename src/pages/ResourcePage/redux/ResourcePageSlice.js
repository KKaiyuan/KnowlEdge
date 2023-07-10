import { createSlice } from '@reduxjs/toolkit';
import {
  addCommentAsync,
  fetchCommentsAsync,
  patchUpvotesAsync,
} from './thunks.js';

const initialState = {
  id: '',
  comments: [],
  reply_to: {
    person_id: undefined,
    person_name: undefined,
    comment_id: undefined,
  },
};

const ResourcePageSlice = createSlice({
  name: 'resourcePage',
  initialState,
  reducers: {
    addReplyTo: (state, action) => {
      state.reply_to = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommentsAsync.fulfilled, (state, action) => {
        state.comments = action.payload.comments;
      })
      .addCase(addCommentAsync.fulfilled, (state, action) => {
        state.comments = action.payload.comments;
      })
      .addCase(patchUpvotesAsync.fulfilled, (state, action) => {
        state.comments = action.payload.comments;
      });
  },
});

export const { addReplyTo } = ResourcePageSlice.actions;
const resourcePageReducer = ResourcePageSlice.reducer;
export default resourcePageReducer;
