import { configureStore } from '@reduxjs/toolkit';
import { studentProfileRed } from './pages/studentProfilePage/studentProfileSlice';
import { announcementPageReducer } from './pages/Announcement-Page-Folder/redux/announcementPageSlice';
import ReducerAnnouncementPage from './reducers/ReducerAnnouncementPage';
import indexCount from './reducers/indexCount';
import studentDashboardReducer from './pages/StudentDashboard/redux/StudentDashboardSlice';
import CalendarEventReducer from './reducers/CalendarEventReducer';
import { flashcardsReducer } from './pages/StudySets/redux/StudySetsSlice.js';

export const store = configureStore({
  reducer: {
    studentProfileReducer: studentProfileRed,
    announcementPageReducerStore: announcementPageReducer,
    studentDashboardReducer: studentDashboardReducer,
    ReducerAnnouncementPage: ReducerAnnouncementPage,
    ReducerAnnouncementPage: ReducerAnnouncementPage,
    calendarEventReducer: CalendarEventReducer,
    flashcards: flashcardsReducer,
    indexCount: indexCount,
  },
  devTools: true,
});
