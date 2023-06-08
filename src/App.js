import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import NavbarComponent from './pages/Components/Navbar';
import StudentCard from './pages/Components/StudnetCard';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <StudentCard />
    </div>
  );
}

export default App;
