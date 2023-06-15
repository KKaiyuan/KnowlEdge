
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

function App() {
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
      </Routes>
    </Router>
  );
}




export default App;
