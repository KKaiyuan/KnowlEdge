import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';

export default function EditStudentInfo({ student, onSubmit }) {
  const [editedStudent, setEditedStudent] = useState(student);

  useEffect(() => {
    setEditedStudent((prevStudent) => ({ ...prevStudent, preferredName: '' }));
  }, []);

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
      <p style = {{fontSize: '20px'}}><strong>Preferred Name:</strong></p>
      <input
        type="text"
        id="preferredName"
        name="preferredName"
        value={editedStudent.preferredName}
        onChange={handleChange}
        style={{ fontSize: 20 }}
        className="preferredName"
      />

      <p style = {{fontSize: '20px'}}><strong>Contact:</strong></p>
      <input
        type="text"
        id="contact"
        name="contact"
        value={editedStudent.contact}
        onChange={handleChange}
        style={{ fontSize: 20 }}
      />

      <p style = {{fontSize: '20px'}}><strong>About Me:</strong></p>
      <textarea
        id="aboutMe"
        name="aboutMe"
        value={editedStudent.aboutMe}
        rows="5"
        cols="40"
        onChange={handleChange}
        style={{ fontSize: 20 }}
      />
      <Button variant="contained" type="submit" style={{ width: 150, height: 50, fontSize: 30 }}>
        Submit
      </Button>
    </form>
  );
}