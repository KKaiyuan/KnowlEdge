import { configureStore } from "@reduxjs/toolkit";
import { studentProfileRed } from "./pages/studentProfilePage/studentProfileSlice";

export const store = configureStore({
    reducer: {
        studentProfileReducer: studentProfileRed
    },
    devTools: true
})