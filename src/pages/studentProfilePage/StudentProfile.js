import React, { useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EditStudentInfo from './EditStudentInfo';
import './studentProfile.css';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { updateDetails } from '../../actions/index.js';
import NavbarComponent from '../Components/Navbar';
import { editStudentProfileAsync } from './thunks';
import { getStudentProfileAsync } from './thunks';

export default function StudentProfile() {
  const [editMode, setEditMode] = useState(false);
 
  useEffect(() => {
    dispatch(getStudentProfileAsync());
  }, []);

  const student = useSelector((state) => state.studentProfileReducer.student);
  const dispatch = useDispatch();

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const editStudentDetails = (updatedDetails) => {
    const oldName = student.preferredName;
    const nameArray = oldName.split(' ');
    let updatedName = oldName;

    if (updatedDetails.preferredName.trim() !== '') {
      updatedName = `${nameArray[0]} ${nameArray[1]} (${updatedDetails.preferredName})`;
    }

    const updatedStudent = {
      ...student,
      ...updatedDetails,
      preferredName: updatedName,
    };
    dispatch(editStudentProfileAsync(updatedStudent));
    setEditMode(false);
  };

  

  return (
    <div className="container">
      <div className="left-section">
        <br />
        <h1 className="nameField" style={{ fontSize: '35px' }}>
          <strong>{student.preferredName}</strong>
        </h1>
        <br />
        <img src={student.image} alt="Student" className="studentImage" />
      </div>
      <div className="middle-section">
        <h1 className="faculty">
          <strong>Faculty:</strong> {student.faculty}
        </h1>
        <br />
        <h1 className="major">
          <strong>Major:</strong> {student.major}
        </h1>
        <br />
        <h1 className="contact">
          <strong>Contact:</strong> {student.contact}
        </h1>
      </div>

      <div className="about-section">
        <h1 className="aboutMeHeading">
          <strong>About Me:</strong>
        </h1>
        <br />
        <p className="aboutMe">{student.aboutMe}</p>
      </div>
      <div className="right-section">
        {editMode ? (
          <EditStudentInfo student={student} onSubmit={editStudentDetails} />
        ) : (
          <button
            onClick={toggleEditMode}
            className="editBtn"
            style={{ fontSize: '35px' }}
          >
            <span className="buttonFrame">
              <ModeEditIcon style={{ fontSize: '35px' }} />
              &nbsp;Edit
            </span>
          </button>
        )}
      </div>
    </div>
  );
}
