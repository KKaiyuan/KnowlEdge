import { configureStore } from "@reduxjs/toolkit";
import { studentProfileRed } from "./pages/studentProfilePage/studentProfileSlice";
import { announcementPageReducer } from "./pages/Announcement-Page-Folder/redux/announcementPageSlice";
import  ReducerAnnouncementPage from './reducers/ReducerAnnouncementPage';
import flashcards from './reducers/flashcards';
import indexCount from './reducers/indexCount';

export const store = configureStore({
    reducer: {
        studentProfileReducer: studentProfileRed,
        announcementPageReducerStore: announcementPageReducer,
        ReducerAnnouncementPage: ReducerAnnouncementPage,
        flashcards: flashcards,
        indexCount: indexCount
    },
    devTools: true
})