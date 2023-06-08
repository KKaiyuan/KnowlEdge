import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import NavbarComponent from './pages/Components/Navbar';
import StudentCard from './pages/Components/StudnetCard';
import InformationCard from './pages/Components/InformationCard';
import CourseCard from './pages/Components/CourseCard';
import SmallCard from './pages/Components/SmallCard';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <SmallCard />
      <StudentCard />
      <InformationCard />
      <CourseCard />
    </div>
  );
}

export default App;
