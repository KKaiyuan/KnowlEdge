import { configureStore } from '@reduxjs/toolkit';
import { studentProfileRed } from './pages/studentProfilePage/studentProfileSlice';
import { announcementPageReducer } from './pages/Announcement-Page-Folder/redux/announcementPageSlice';
import ReducerAnnouncementPage from './reducers/ReducerAnnouncementPage';
import indexCount from './reducers/indexCount';
import studentDashboardReducer from './pages/StudentDashboard/redux/StudentDashboardSlice';
import CalendarEventReducer from './reducers/CalendarEventReducer';
import resourcePageReducer from './pages/ResourcePage/redux/ResourcePageSlice';
import { instructorProfileRed } from './pages/instructorProfilePage/instructorProfileSlice';
import { coursePageSliceReducer } from './pages/Student-Course-Page-Folder/redux/coursePageSlice';
import { eventReducer } from './pages/Calendar-Page-Folder/CalendarEventSlice';
import { userReducer } from './pages/UserInfo/UserSlice';
import { flashcardsReducer } from './pages/StudySets/redux/StudySetsSlice.js';

export const store = configureStore({
  reducer: {
    studentProfileReducer: studentProfileRed,
    instructorProfileReducer: instructorProfileRed,
    announcementPageReducerStore: announcementPageReducer,
    studentDashboardReducer: studentDashboardReducer,
    ReducerAnnouncementPage: ReducerAnnouncementPage,
    flashcards: flashcardsReducer,
    indexCount: indexCount,
    resourcePageReducer: resourcePageReducer,
    coursePageReducer: coursePageSliceReducer,
    event: eventReducer,
    user: userReducer,
  },
  devTools: true,
});
