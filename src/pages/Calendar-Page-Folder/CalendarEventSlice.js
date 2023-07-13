import { createSlice } from '@reduxjs/toolkit';
import {
  getEventsAsync,
  postEventAsync,
  putEventAsync,
  deleteEventAsync,
} from './CalendarEventThunks';

const initialState = {
  events: [],
};

const eventSlice = createSlice({
  name: 'event',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getEventsAsync.fulfilled, (state, action) => {
        state.events = action.payload;
      })
      .addCase(postEventAsync.fulfilled, (state, action) => {
        console.log(action.payload);
        state.events = action.payload;
      })
      .addCase(deleteEventAsync.fulfilled, (state, action) => {
        const deletedEventId = action.payload;
        console.log('in delete thunk');
        console.log(deletedEventId);
        console.log(state.events);
        state.events = state.events.filter(
          (event) => event._id !== deletedEventId
        );
        console.log(state.events);
      })
      .addCase(putEventAsync.fulfilled, (state, action) => {
        const editedEvent = action.payload;
        console.log(editedEvent);
        state.events = state.events.map((event) =>
          event._id === editedEvent._id ? editedEvent : event
        );
      });
  },
});

export const eventReducer = eventSlice.reducer;
