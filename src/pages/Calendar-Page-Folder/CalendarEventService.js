import { stringify } from 'postcss';

export const getEvents = async (uid) => {
  try {
    console.log(uid);
    console.log('in getEvents in Service');
    const response = await fetch(`http://localhost:3005/events/${uid}`);
    if (!response.ok) {
      throw new Error('Failed to retrieve user info');
    }
    return response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};

export const addEvent = async (userId, event) => {
  console.log(event);
  try {
    const response = await fetch(`http://localhost:3005/events/${userId}`, {
      method: 'POST',
      body: JSON.stringify(event),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error('Failed to create event');
    }
    return response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};

export const editEvent = async (userId, event) => {
  console.log('In edit event');
  console.log(event);
  try {
    const response = await fetch(
      `http://localhost:3005/events/${userId}/${event._id}`,
      {
        method: 'PUT',
        body: JSON.stringify(event),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    return response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};

export const deleteEvent = async (userId, eventId) => {
  try {
    const response = await fetch(
      `http://localhost:3005/events/${userId}/${eventId}`,
      {
        method: 'DELETE',
      }
    );
  } catch (error) {
    throw new Error(error.message);
  }
};
