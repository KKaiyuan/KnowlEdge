import { configureStore } from '@reduxjs/toolkit';
import { studentProfileRed } from './pages/studentProfilePage/studentProfileSlice';
import { announcementPageReducer } from './pages/Announcement-Page-Folder/redux/announcementPageSlice';
import ReducerAnnouncementPage from './reducers/ReducerAnnouncementPage';
import flashcards from './reducers/flashcards';
import indexCount from './reducers/indexCount';
import studentDashboardReducer from './pages/StudentDashboard/redux/StudentDashboardSlice';
import { eventReducer } from './pages/Calendar-Page-Folder/CalendarEventSlice';
import { userReducer } from './pages/UserInfo/UserSlice';

export const store = configureStore({
  reducer: {
    studentProfileReducer: studentProfileRed,
    announcementPageReducerStore: announcementPageReducer,
    studentDashboardReducer: studentDashboardReducer,
    ReducerAnnouncementPage: ReducerAnnouncementPage,
    ReducerAnnouncementPage: ReducerAnnouncementPage,
    event: eventReducer,
    flashcards: flashcards,
    indexCount: indexCount,
    user: userReducer,
  },
  devTools: true,
});
