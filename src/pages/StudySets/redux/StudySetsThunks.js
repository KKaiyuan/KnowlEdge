// Reference Materials:
// Stephanie's Sample Code at https://github.com/svmah/cs455-express-demo/blob/add-server/client/src/redux/users/thunks.js

import { createAsyncThunk } from '@reduxjs/toolkit';
import { actionTypes } from './actionTypes';
import FlashcardService from './StudySetsService';

export const getFlashcardsAsync = createAsyncThunk(
  actionTypes.GET_FLASHCARDS,
  async () => {
    return await FlashcardService.getFlashcards();
  }
);

export const addFlashcardAsync = createAsyncThunk(
  actionTypes.ADD_FLASHCARD,
  async (flashcard) => {
    // console.log(flashcard);
    return await FlashcardService.addFlashcard(flashcard); // Other way: sending flashcard with {flashcard} nested
  }
);

export const deleteFlashcardAsync = createAsyncThunk(
  actionTypes.DELETE_FLASHCARD,
  async (flashcardId, thunkApi) => {
    // console.log("flashcardId @ deleteFlashcardAsync - thunks.js : " + flashcardId); // TODO: check why this line is not printed in the console (?) for some reason
    // return await FlashcardService.deleteFlashcard(flashcardId);
    // console.log("flashcardId : " + flashcardId);
    return thunkApi.fulfillWithValue(flashcardId, await FlashcardService.deleteFlashcard(flashcardId));
    // if not adding  "await"  but adding  "const data = await response.json();"  to  "sevice.js"  : Uncaught runtime errors: ERROR JSON.parse: unexpected end of data at line 1 column 1 of the JSON data
    // adding  "await"  or not seems to have to same effect when  "const data = await response.json();"  is added to  "service.js" - TODO: check whether  "await"  is really needed
    

    // console.log("flashcardId in thunks.js : " + flashcardId);

    // let data;
    // try {
    //   data = await FlashcardService.deleteFlashcard(flashcardId);
    //   console.log("data : " + JSON.stringify(data))
    //   console.log("thunkApi.fulfillWithValue(flashcardId) : " + JSON.stringify(thunkApi.fulfillWithValue(flashcardId)));
    //   return thunkApi.fulfillWithValue(flashcardId);
    // } catch (e) {
    //   return thunkApi.rejectWithValue(data);
    // }
  }
)

export const patchTermAsync = createAsyncThunk(
  actionTypes.PATCH_TERM,
  async (dispatchThunkObject) => {
    return await FlashcardService.patchGeneral(dispatchThunkObject);
  }
)

export const patchDefinitionAsync = createAsyncThunk(
  actionTypes.PATCH_DEFINITION,
  async (dispatchThunkObject) => {
    return await FlashcardService.patchGeneral(dispatchThunkObject);
  }
)

export const patchDescriptionAsync = createAsyncThunk(
  actionTypes.PATCH_DESCRIPTION,
  async (dispatchThunkObject) => {
    return await FlashcardService.patchGeneral(dispatchThunkObject);
  }
)

export const patchImageURLAsync = createAsyncThunk(
  actionTypes.PATCH_IMAGEURL,
  async (dispatchThunkObject) => {
    return await FlashcardService.patchGeneral(dispatchThunkObject);
  }
)