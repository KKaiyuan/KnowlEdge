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
import CalendarPage from './pages/Calendar-Page-Folder/Calendar';
import SideMenu from './pages/Calendar-Page-Folder/SideMenu';
import CalendarView from './pages/Calendar-Page-Folder/CalendarView';
import WebFont from 'webfontloader';
import { useEffect } from 'react';
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
        <Route exact path="/" element={<StudentDashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/courses/*" element={<CoursePage />} />
        <Route path="/announcements" element={<Announcement />} />
        <Route path="/profile" element={<StudentProfileAndNavbarComponent />} />
        <Route path="/studysets" element={<StudySets />} />
        <Route path="/calendar" element={<CalendarView />} />
      </Routes>
    </Router>
  );
}

export default App;
