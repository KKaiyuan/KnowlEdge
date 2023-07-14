// Code inspired from Workshop 2's react-redux-button-counter-2022 repo: https://github.com/danyakarras/react-redux-button-counter-2022
// Code inpsired from Workshop 3's cs455-express-demo repo: https://github.com/svmah/cs455-express-demo/tree/add-server
import { createSlice } from '@reduxjs/toolkit';
import { REQUEST_STATE } from '../../../utils.js';
import { getAnnouncementsAsync} from './thunks.js';

const initialState = {
    announcements: [],
    getAnnouncements: REQUEST_STATE.IDLE,
    removeAnnouncement: REQUEST_STATE.IDLE,
    addAnnouncement: REQUEST_STATE.IDLE,
};


const coursePageSlice = createSlice( {
    name: 'coursePage',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAnnouncementsAsync.fulfilled, (state, action) => {
            state.getAnnouncements = REQUEST_STATE.FULFILLED;
            console.log("ACTION" + action.payload);
            state.announcements = action.payload;
        })
    }
});


export const coursePageSliceReducer = coursePageSlice.reducer;