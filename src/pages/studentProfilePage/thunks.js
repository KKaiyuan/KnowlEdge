import { createAsyncThunk } from '@reduxjs/toolkit';
import { actionTypes } from './actionTypes';
import ItemService from './service';

// https://github.com/svmah/cs455-express-demo/pull/1 GENERAL FRONT TO BACKEND

export const editStudentProfileAsync = createAsyncThunk(
  actionTypes.EDIT_PROFILE,
  async (editedStudent) => {
    return await ItemService.editStudentProfile(editedStudent);
  }
);

export const getStudentProfileAsync = createAsyncThunk(
  actionTypes.GET_PROFILE,
  async () => {
    return await ItemService.getStudentProfile();
  }
);

export const getStudentProfileForUserAsync = createAsyncThunk(
  actionTypes.GET_USER_PROFILE,
  async (uid) => {
    return await ItemService.getStudentProfileForUser(uid);
  }
);

export const editStudentProfileForUserAsync = createAsyncThunk(
  actionTypes.EDIT_USER_PROFILE,
  async ({ uid, student }) => {
    console.log('in edit student thunk');
    console.log(student);
    return await ItemService.editStudentProfileForUser(uid, student);
  }
);
