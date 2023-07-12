import { configureStore } from '@reduxjs/toolkit';
import { studentProfileRed } from './pages/studentProfilePage/studentProfileSlice';
import { announcementPageReducer } from './pages/Announcement-Page-Folder/redux/announcementPageSlice';
import ReducerAnnouncementPage from './reducers/ReducerAnnouncementPage';
import flashcards from './reducers/flashcards';
import indexCount from './reducers/indexCount';
import studentDashboardReducer from './pages/StudentDashboard/redux/StudentDashboardSlice';
import CalendarEventReducer from './reducers/CalendarEventReducer';
import resourcePageReducer from './pages/ResourcePage/redux/ResourcePageSlice';
import { coursePageSliceReducer } from './pages/Student-Course-Page-Folder/redux/coursePageSlice';
export const store = configureStore({
  reducer: {
    studentProfileReducer: studentProfileRed,
    announcementPageReducerStore: announcementPageReducer,
    studentDashboardReducer: studentDashboardReducer,
    ReducerAnnouncementPage: ReducerAnnouncementPage,
    calendarEventReducer: CalendarEventReducer,
    flashcards: flashcards,
    indexCount: indexCount,
    resourcePageReducer: resourcePageReducer,
    coursePageReducer: coursePageSliceReducer
  },
  devTools: true,
});
