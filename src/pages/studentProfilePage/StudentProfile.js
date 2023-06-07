import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EditStudentInfo from './EditStudentInfo';


export default function StudentProfile() {
  const [editMode, setEditMode] = useState(false); 

  const student = useSelector((state) => state);
  const dispatch = useDispatch();

  const toggleEditMode = () => {
    setEditMode(!editMode); // Toggle edit mode
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
      <h1>{student.preferredName}</h1>
      <h1>Faculty: {student.faculty}</h1>
      <h1>Major: {student.major}</h1>
      <h1>Contact: {student.contact}</h1>
      <img style={{ width: 350 }} src={student.image} alt="Student" />
      <h1>About Me:</h1>
      <p>{student.aboutMe}</p>
      {editMode ? (
        <EditStudentInfo student={student} onSubmit={editStudentDetails} />
      )  : (
        <button style={{ fontSize: 20 }} onClick={toggleEditMode}>
          <img
            style={{ width: 50 }}
            src="https://clipart-library.com/images/BTaKeBkgc.png"
            alt="Edit Icon"
          />
          Edit
        </button>
      )}
    </div>
  );
}