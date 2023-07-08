import { createSlice } from '@reduxjs/toolkit';
import { fetchCommentsAsync } from './thunks.js';

const initialState = {
  id: '',
  comments: [],
};

const ResourcePageSlice = createSlice({
  name: 'resourcePage',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCommentsAsync.fulfilled, (state, action) => {
      state.comments = action.payload.comments;
    });
  },
});

const resourcePageReducer = ResourcePageSlice.reducer;
export default resourcePageReducer;
