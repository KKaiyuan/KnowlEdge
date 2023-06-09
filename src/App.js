// <<<<<<< HEAD
// import './App.css';
// import { Provider } from 'react-redux';
// import { store } from './pages/studentProfilePage/studentProfileStore'; 
// import StudentProfile from './pages/studentProfilePage/StudentProfile';


// function App() {
//   return (
//     <Provider store={store}>
//       <main>
//         <StudentProfile />
//       </main>
//     </Provider> 
// =======
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import StudentDashboard from './pages/StudentDashboard/StudentDashboard';

function App() {
  return (
    <div className="App">
      <StudentDashboard />
    </div>
// >>>>>>> main
  );
}

export default App;
