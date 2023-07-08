import { createSlice } from '@reduxjs/toolkit';
import { fetchCommentsAsync } from './thunks.js';

const initialState = {
  id: '',
  comments: [],
  reply_to: '',
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
    builder.addCase(fetchCommentsAsync.fulfilled, (state, action) => {
      state.comments = action.payload.comments;
    });
  },
});

export const { addReplyTo } = ResourcePageSlice.actions;
const resourcePageReducer = ResourcePageSlice.reducer;
export default resourcePageReducer;
