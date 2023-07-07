// Reference Materials:
// Stephanie's Sample Code at https://github.com/svmah/cs455-express-demo/blob/add-server/client/src/redux/users/reducer.js

import { createSlice } from '@reduxjs/toolkit';
import { REQUEST_STATE } from '../../../utils';
import {
    addFlashcardAsync,
    getFlashcardsAsync,
    deleteFlashcardAsync,
    patchTermAsync,
    patchDefinitionAsync,
    patchDescriptionAsync,
    patchImageURLAsync
} from './StudySetsThunks';


// TODO: needs to put this on the server side and use GTE request
const INITIAL_STATE = {
    list: [],
    getFlashcards: REQUEST_STATE.IDLE,
    addFlashcard: REQUEST_STATE.IDLE,
    patchQuantity: REQUEST_STATE.IDLE,
    patchFlashcardName: REQUEST_STATE.IDLE,
    error: null
};

const flashcardsSlice = createSlice({
    name: 'flashcards',
    initialState: INITIAL_STATE,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getFlashcardsAsync.pending, (state) => {
                state.getFlashcards = REQUEST_STATE.PENDING;
                state.error = null;
            })
            .addCase(getFlashcardsAsync.fulfilled, (state, action) => {
                state.getFlashcards = REQUEST_STATE.FULFILLED;
                state.list = action.payload;
            })
            .addCase(getFlashcardsAsync.rejected, (state, action) => {
                state.getFlashcards = REQUEST_STATE.REJECTED;
                state.error = action.error;
            })

            .addCase(addFlashcardAsync.pending, (state) => {
                state.addFlashcard = REQUEST_STATE.PENDING;
                state.error = null;
            })
            .addCase(addFlashcardAsync.fulfilled, (state, action) => {
                state.addFlashcard = REQUEST_STATE.FULFILLED;
                state.list.push(action.payload);
            })
            .addCase(addFlashcardAsync.rejected, (state, action) => {
                state.addFlashcard = REQUEST_STATE.REJECTED;
                state.error = action.error;
            })

            .addCase(deleteFlashcardAsync.pending, (state) => {
                state.deleteFlashcard = REQUEST_STATE.PENDING;
                state.error = null;
            })
            .addCase(deleteFlashcardAsync.fulfilled, (state, action) => {
                // console.log("reducer delete called!");
                state.deleteFlashcard = REQUEST_STATE.FULFILLED;
                // console.log(state.deleteFlashcard);
                state.list = state.list.filter(flashcard => flashcard.id != action.payload/* .flashcardId */);
                // console.log("state : " + JSON.stringify(state));
                // console.log("action : " + JSON.stringify(action));
                // console.log("action.payload : " + JSON.stringify(action.payload));
                // console.log("action.payload.flashcardId : " + JSON.stringify(action.payload.flashcardId));
                // console.log("state.list : " + JSON.stringify(state.list));
                // // console.log("state.list.at(0).id : " + state.list.at(0).id);

                /* state.list.forEach((flashcard, index) => {
                    console.log("flashcard : " + JSON.stringify(flashcard));
                    console.log("index : " + index);
                    console.log("flashcard.id : " + flashcard.id);
                    console.log("action.payload.flashcardId : " + action.payload.flashcardId);
                    console.log("action.payload : " + JSON.stringify(action.payload));
                    console.log("state : " + JSON.stringify(state));
                    console.log();
                    if (flashcard.id === action.payload.flashcardId) {
                        state.list.splice(index, 1);
                    }
                }) */
            })
            .addCase(deleteFlashcardAsync.rejected, (state, action) => {
                state.deleteFlashcard = REQUEST_STATE.REJECTED;
                state.error = action.error;
            })

            .addCase(patchTermAsync.pending, (state) => {
                state.patchTerm = REQUEST_STATE.PENDING;
                state.error = null;
            })
            .addCase(patchTermAsync.fulfilled, (state, action) => {
                state.patchTerm = REQUEST_STATE.FULFILLED;
                // state.list.at(action.payload.id).term = action.payload.term;
                state.list.forEach((flashcard) => {
                    if (flashcard.id === action.payload.id) {
                        flashcard.term = action.payload.term;
                    }
                })
            })
            .addCase(patchTermAsync.rejected, (state, action) => {
                state.patchTerm = REQUEST_STATE.REJECTED;
                state.error = action.error;
            })
            
            .addCase(patchDefinitionAsync.pending, (state) => {
                state.patchDefinition = REQUEST_STATE.PENDING;
                state.error = null;
            })
            .addCase(patchDefinitionAsync.fulfilled, (state, action) => {
                state.patchDefinition = REQUEST_STATE.FULFILLED;
                // state.list.at(action.payload.id).definition = action.payload.definition;
                state.list.forEach((flashcard) => {
                    if (flashcard.id === action.payload.id) {
                        flashcard.definition = action.payload.definition;
                    }
                })
            })
            .addCase(patchDefinitionAsync.rejected, (state, action) => {
                state.patchDefinition = REQUEST_STATE.REJECTED;
                state.error = action.error;
            })
            
            .addCase(patchDescriptionAsync.pending, (state) => {
                state.patchDescription = REQUEST_STATE.PENDING;
                state.error = null;
            })
            .addCase(patchDescriptionAsync.fulfilled, (state, action) => {
                state.patchDescription = REQUEST_STATE.FULFILLED;
                // state.list.at(action.payload.id).description = action.payload.description;
                state.list.forEach((flashcard) => {
                    if (flashcard.id === action.payload.id) {
                        flashcard.description = action.payload.description;
                    }
                })
            })
            .addCase(patchDescriptionAsync.rejected, (state, action) => {
                state.patchDescription = REQUEST_STATE.REJECTED;
                state.error = action.error;
            })

            .addCase(patchImageURLAsync.pending, (state) => {
                state.patchImageURL = REQUEST_STATE.PENDING;
                state.error = null;
            })
            .addCase(patchImageURLAsync.fulfilled, (state, action) => {
                state.patchImageURL = REQUEST_STATE.FULFILLED;
                // state.list.at(action.payload.id).imageURL = action.payload.imageURL;
                state.list.forEach((flashcard) => {
                    if (flashcard.id === action.payload.id) {
                        flashcard.imageURL = action.payload.imageURL;
                    }
                })
            })
            .addCase(patchImageURLAsync.rejected, (state, action) => {
                state.patchImageURL = REQUEST_STATE.REJECTED;
                state.error = action.error;
            })
    }
});

export const flashcardsReducer = flashcardsSlice.reducer;
