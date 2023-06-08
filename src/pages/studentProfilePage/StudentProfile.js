import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EditStudentInfo from './EditStudentInfo';
import './studentProfile.css';



export default function StudentProfile() {
  const [editMode, setEditMode] = useState(false); 

  const student = useSelector((state) => state);
  const dispatch = useDispatch();

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const editStudentDetails = (updatedDetails) => {
    dispatch({
        type: 'editDetails',
        payload: updatedDetails,
    });
    setEditMode(false);
  }

  return (
    <div>
      <h1 className = "nameField">{student.preferredName}</h1>
      <h1 className = "faculty">Faculty: {student.faculty}</h1>
      <h1 className = "major">Major: {student.major}</h1>
      <h1 className = "contact" >Contact: {student.contact}</h1>
      <img style={{ width: 350 }} src={student.image} alt="Student" className = "studentImage" />
      <h1 className = "aboutMeHeading">About Me:</h1>
      <p style = {{fontSize: 25}} className = "aboutMe">{student.aboutMe} </p>
      {editMode ? (
        <EditStudentInfo student={student} onSubmit={editStudentDetails} />
      )  : (
        <button style={{ fontSize: 50, "height": 100, "width": 350, "top": "350px"}} onClick={toggleEditMode} className = "editBtn">
          <img
            src="https://clipart-library.com/images/BTaKeBkgc.png"
            alt="Edit Icon"
            className = "pencil"
            style = {{"height": 90, "width": 80}}
          />
          <p className = "edit">Edit</p>
        </button>
      )}
    </div>
  );
}