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
import './App.css';
import NavbarComponent from './pages/Components/Navbar';
import StudentProfile from './pages/studentProfilePage/StudentProfile';

function App() {
  return (
    <div className="App">
        <NavbarComponent />
        <StudentProfile />
    </div>
// >>>>>>> main
  );
}

export default App;
