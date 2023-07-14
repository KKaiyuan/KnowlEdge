import {
  addEvent,
  getEvents,
  deleteEvent,
  editEvent,
} from './CalendarEventService';
const { createAsyncThunk } = require('@reduxjs/toolkit');

export const postEventAsync = createAsyncThunk(
  'events/postEventAsync',
  async ({ userId, event }) => {
    console.log(event);
    const data = await addEvent(userId, event);
    console.log(data);
    return data;
  }
);

export const getEventsAsync = createAsyncThunk(
  'events/getEventsAsync',
  async (userId) => {
    console.log('in getEventsAsync');
    const res = await getEvents(userId);
    return res;
  }
);

export const putEventAsync = createAsyncThunk(
  'events/putEventAsync',
  async ({ userId, event }) => {
    try {
      console.log('in put Event Async');
      console.log(event);
      const data = await editEvent(userId, event);
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteEventAsync = createAsyncThunk(
  'events/deleteEventAsync',
  async ({ userId, eventId }) => {
    const data = await deleteEvent(userId, eventId);
    console.log('in delete item thunk');
    return eventId;
  }
);
