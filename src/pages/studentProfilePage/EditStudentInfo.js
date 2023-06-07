import React, { useState } from 'react';

export default function EditForm({ student, onSubmit }) {
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
    <form onSubmit={handleSubmit}>
      <label>
        Preferred Name:
        <input
          type="text"
          name="preferredName"
          value={editedStudent.preferredName}
          onChange={handleChange}
        />
      </label>
      <label>
        Faculty:
        <input
          type="text"
          name="faculty"
          value={editedStudent.faculty}
          onChange={handleChange}
        />
      </label>
      <label>
        Major:
        <input
          type="text"
          name="major"
          value={editedStudent.major}
          onChange={handleChange}
        />
      </label>
      <label>
        Contact:
        <input
          type="text"
          name="contact"
          value={editedStudent.contact}
          onChange={handleChange}
        />
      </label>
      <label>
        About Me:
        <input
          type="text"
          name="aboutMe"
          value={editedStudent.aboutMe}
          onChange={handleChange}
        />
      </label>
      {/* Repeat the above label and input fields for other student attributes */}
      <button type="submit">Submit</button>
    </form>
  );
}