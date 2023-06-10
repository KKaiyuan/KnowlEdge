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
