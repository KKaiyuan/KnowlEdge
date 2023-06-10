import logo from "./logo.svg";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";

import React, { useState } from 'react';
import './App.css';
import StudentDashboard from './pages/StudentDashboard/StudentDashboard';
import CoursePage from './pages/Student-Course-Page-Folder/CoursePage';
import Announcement from './pages/Announcement-Page-Folder/Announcement';
import StudentProfile from './pages/studentProfilePage/StudentProfile'
import StudentProfileAndNavbarComponent from './pages/studentProfilePage/StudentProfileAndNavbarComponent';
function App() {
  return (
    <div className="App">
      <StudentDashboard/>
    </div>
  );
}

export default App;
