import React, { useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EditStudentInfo from './EditStudentInfo';
// import './studentProfile.css';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { updateDetails } from '../../actions/index.js';
import NavbarComponent from '../Components/Navbar';
import { editStudentProfileAsync } from './thunks';
import { getStudentProfileAsync } from './thunks';
import { styled } from 'styled-components';


export default function StudentProfile() {
  const [editMode, setEditMode] = useState(false);
 
  const StylingComp = styled.div`.container {
    display: flex;
    flex-wrap: wrap;
    padding: 0px;
    margin-left: 5%;
  }
  
  .container div {
    /* align-items: center;
    border: 1px #ccc solid; */
    padding: 10px;
    /* margin: 10px; */
  }

  .buttonFrame {
    display: inline-block;
    border: 2px solid #000;
    padding: 2px 8px;
    border-radius: 5px;
    transition: background-color 0.3s;
  }
  
  .buttonFrame:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  .left-section {
    flex: 2;
    order: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: -5%;
  }
  
  .middle-section {
    flex: 1;
    order: 2;
    font-size: 25px;
    margin-top: 10%;
  }
  
  .right-section {
    flex: 1;
    order: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 9%;
    margin-right: 0%;
  }
  
  .studentImage {
    width: 350px;
  }
  
  .about-section {
    text-align: center;
    margin-top: 20px;
    order: 4;
    flex: 100%;
    margin-left: 0%;
  }
  
  .aboutMeHeading {
    font-size: 25px;
  }
  
  
  .aboutMe {
    font-size: 20px;
  }

  br {
    display: block;
    margin-top: 0; 
 }`;


  useEffect(() => {
    dispatch(getStudentProfileAsync());
    console.log(process.env.MONGO_DB_URL);
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
    <StylingComp>
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
    </StylingComp>
  );
}
