import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import NavbarComponent from './pages/Components/Navbar';
import StudentCard from './pages/Components/StudnetCard';
import InformationCard from './pages/Components/InformationCard';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <StudentCard />
      <InformationCard />
    </div>
  );
}

export default App;
