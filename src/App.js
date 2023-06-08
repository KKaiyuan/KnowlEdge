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
      <SmallCard type="study-set" title="CPSC 310 - SLDC" />
      <StudentCard />
      <InformationCard />
      <CourseCard title="CPSC 310" />
    </div>
  );
}

export default App;
