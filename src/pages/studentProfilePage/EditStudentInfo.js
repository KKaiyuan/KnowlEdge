import React, { useState } from 'react';
import Button from '@mui/material/Button';

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
      <p>Preferred Name:</p>
      <input
        type="text"
        id="preferredName"
        name="preferredName"
        value={editedStudent.preferredName}
        onChange={handleChange}
        style = {{fontSize: 20}}
        class = "preferredName"
      />

<p>Faculty:</p>
      <input
        type="text"
        id="faculty"
        name="faculty"
        value={editedStudent.faculty}
        onChange={handleChange}
        style = {{fontSize: 20}}
      />

<p>Major:</p>
      <input
        type="text"
        id="major"
        name="major"
        value={editedStudent.major}
        onChange={handleChange}
        style = {{fontSize: 20}}
        
      />
  <p>Contact:</p>
      <input
        type="text"
        id="contact"
        name="contact"
        value={editedStudent.contact}
        onChange={handleChange}
        style = {{fontSize: 20}}
      />

     
<p>About Me:</p>
      <textarea id="aboutMe"  name="aboutMe" value={editedStudent.aboutMe} rows="5" cols="40" onChange={handleChange}style={{ fontSize: 20 }}/>
      <Button variant="contained" type='submit' style = {{width: 150, height: 50, fontSize: 30 }}>Submit</Button>
      {/* <button type="submit" style = {{width: 150, height: 50, fontSize: 30 }}>Submit</button> */}
    </form>
  );
}