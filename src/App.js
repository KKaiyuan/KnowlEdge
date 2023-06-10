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

// https://www.geeksforgeeks.org/what-is-react-router-dom/
import { BrowserRouter as Router, Route, Link, Routes }
    from "react-router-dom";
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
      <Router>
      <div className="list">
                    <ul>
                        <li><Link to="/Announcement">Announcement</Link></li>
                        <li><Link to="/StudentProfileAndNavBarComponent">Student Profile</Link></li>
                        <li><Link to="/StudentDashboard">StudentDashboard</Link></li>
                        <li><Link to="/CoursePage">CoursePage</Link></li>

                    </ul>
                </div>
                <Routes>
                    <Route exact path="/Announcement" element={<Announcement />} />
                    <Route exact path="/StudentProfileAndNavBarComponent" element={<StudentProfileAndNavbarComponent />} />
                    <Route exact path="/StudentDashboard" element={<StudentDashboard />} />
                    <Route exact path="/CoursePage" element={<CoursePage />} />

                </Routes>
                
            </Router>
    </div>
  );
}




export default App;
