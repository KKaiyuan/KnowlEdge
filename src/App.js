import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import StudentDashboard from './pages/StudentDashboard/StudentDashboard';
import CoursePage from './pages/Student-Course-Page-Folder/CoursePage';
import Announcement from './pages/Announcement-Page-Folder/Announcement';
function App() {
  return (
    <div className="App">
      <StudentDashboard></StudentDashboard>
    </div>
  );
}

export default App;
