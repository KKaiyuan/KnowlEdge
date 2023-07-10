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
  courses: [
    {
      courseName: "cpsc-310",
      pageType: "Introduction",
      courseInformation: "Sense child do state to defer mr of forty. Become latter but nor abroad wisdom waited. Was delivered gentleman acuteness but daughters. In as of whole as match asked. Pleasure exertion put add entrance distance drawings. In equally matters showing greatly it as. Want name any wise are able park when. Saw vicinity judgment remember finished men throwing."
    }
  ]
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
