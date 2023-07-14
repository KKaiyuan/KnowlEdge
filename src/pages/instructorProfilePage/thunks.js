import { createAsyncThunk } from '@reduxjs/toolkit';
import { actionTypes } from './actionTypes';
import ItemService from './service';


// https://github.com/svmah/cs455-express-demo/pull/1 GENERAL FRONT TO BACKEND

export const editInstructorProfileAsync = createAsyncThunk(
  actionTypes.EDIT_PROFILE,
  async (editedInstructor) => {
    return await ItemService.editInstructorProfile(editedInstructor);
  }
);

export const getInstructorProfileAsync = createAsyncThunk(
    actionTypes.GET_PROFILE,
    async () => {
      return await ItemService.getInstructorProfile();
    }
  );

