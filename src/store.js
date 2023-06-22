import { configureStore } from "@reduxjs/toolkit";
import { studentProfileRed } from "./pages/studentProfilePage/studentProfileSlice";
import { announcementPageReducer } from "./pages/Announcement-Page-Folder/redux/announcementPageSlice";
export const store = configureStore({
    reducer: {
        studentProfileReducer: studentProfileRed,
        announcementPageReducerStore: announcementPageReducer
    },
    devTools: true
})