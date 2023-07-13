import Login from './pages/Login';
import SignUp from './pages/Signup';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import StudentDashboard from './pages/StudentDashboard/StudentDashboard';
import CoursePage from './pages/Student-Course-Page-Folder/CoursePage';
import Announcement from './pages/Announcement-Page-Folder/Announcement';
import StudentProfileAndNavbarComponent from './pages/studentProfilePage/StudentProfileAndNavbarComponent';
import StudySets from './pages/StudySets/StudySets';
import FlashcardsPractice from './pages/StudySets/FlashcardsPractice';
import CalendarView from './pages/Calendar-Page-Folder/CalendarView';
import WebFont from 'webfontloader';
import { useEffect } from 'react';
import RequireAuth from './pages/Components/RequireAuth';
import EmailVerification from './pages/EmailVerification';
import ResoucePage from './pages/ResourcePage/ResourcePage';
import ResourcePage from './pages/ResourcePage/ResourcePage';

console.warn = () => {};

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Roboto:300,400,500,700', 'Nunito+Sans:300,400,700'],
      },
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <StudentDashboard />
            </RequireAuth>
          }
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/emailverification" element={<EmailVerification />} />
        <Route
          path="/courses/*"
          element={
            <RequireAuth>
              <CoursePage />
            </RequireAuth>
          }
        />
        <Route
          path="/announcements/*"
          element={
            <RequireAuth>
              <Announcement />
            </RequireAuth>
          }
        />
        <Route
          path="/profile"
          element={
            <RequireAuth>
              <StudentProfileAndNavbarComponent />
            </RequireAuth>
          }
        />
        <Route
          path="/studysets"
          element={
            <RequireAuth>
              <StudySets />
            </RequireAuth>
          }
        />
        <Route
          path="/studysets/flashcards"
          element={
            <RequireAuth>
              <FlashcardsPractice />
            </RequireAuth>
          }
        />
        <Route
          path="/calendar"
          element={
            <RequireAuth>
              <CalendarView />
            </RequireAuth>
          }
        />

        <Route path="/resource/*" element={<ResoucePage />} />
 
      </Routes>
    </Router>
  );
}

export default App;
