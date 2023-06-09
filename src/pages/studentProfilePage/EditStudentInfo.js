import React, { useState } from 'react';
import './editStudentInfo.css';

export default function EditStudentInfo({ student, onSubmit }) {
  const [editedStudent, setEditedStudent] = useState(student);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedStudent((prevStudent) => ({
      ...prevStudent,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(editedStudent);
  };

  return (
    <form className="formContainer" onSubmit={handleSubmit}>
      Preferred Name:
      <input
        type="text"
        id="preferredName"
        name="preferredName"
        value={editedStudent.preferredName}
        onChange={handleChange}
        style = {{fontSize: 20}}
        class = "preferredName"
      />

      Faculty:
      <input
        type="text"
        id="faculty"
        name="faculty"
        value={editedStudent.faculty}
        onChange={handleChange}
        style = {{fontSize: 20}}
      />

      Major:
      <input
        type="text"
        id="major"
        name="major"
        value={editedStudent.major}
        onChange={handleChange}
        style = {{fontSize: 20}}
        
      />

      Contact:
      <input
        type="text"
        id="contact"
        name="contact"
        value={editedStudent.contact}
        onChange={handleChange}
        style = {{fontSize: 20}}
      />

     
      About Me:
      <textarea id="aboutMe" name="aboutMe" value={editedStudent.aboutMe} onChange={handleChange}style={{ fontSize: 20 }}/>

      <button type="submit" style = {{width: 150, height: 50, fontSize: 30 }}>Submit</button>
    </form>
  );
}