import React, { useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NavbarComponent from '../Components/Navbar';
import { styled } from 'styled-components';
import { getInstructorProfileAsync, editInstructorProfileAsync } from './thunks';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import EditInstructorInfo from './editInstructorInfo';


export default function InstructorProfile() {
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
    console.log("GHIHHI")
   dispatch(getInstructorProfileAsync());
  // console.log(process.env.MONGO_DB_URL);
  }, []);
  
  const instructor = useSelector((state) => state.instructorProfileReducer.instructor);
  const dispatch = useDispatch();

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const editInstructorDetails = (updatedDetails) => {
    const oldName = instructor.preferredName;
    const nameArray = oldName.split(' ');
    let updatedName = oldName;

    if (updatedDetails.preferredName.trim() !== '') {
      updatedName = `${nameArray[0]} ${nameArray[1]} (${updatedDetails.preferredName})`;
    }

    const updatedInstructor = {
      ...instructor,
      ...updatedDetails,
      preferredName: updatedName,
    };
    dispatch(editInstructorProfileAsync(updatedInstructor));
    setEditMode(false);
  };

  

  return (
    <StylingComp>
        <NavbarComponent></NavbarComponent>
    <div className="container">
      <div className="left-section">
        <br />
        <h1 className="nameField" style={{ fontSize: '35px' }}>
          <strong>{instructor.preferredName}</strong>
        </h1>
        <br />
        <img style={{height: "500px"}} src={instructor.image} alt="Instructor" className="instructorImage" />
      </div>
      <div className="middle-section">
        <h1 className="faculty">
          <strong>Faculty:</strong> {instructor.faculty}
        </h1>
        <br />
        <h1 className="field">
          <strong>Field:</strong> {instructor.field}
        </h1>
        <br />
        <h1 className="contact">
          <strong>Contact:</strong> {instructor.contact}
        </h1>
      </div>

      <div className="about-section">
        <h1 className="aboutMeHeading">
          <strong>About Me:</strong>
        </h1>
        <br />
        <p className="aboutMe">{instructor.aboutMe}</p>
      </div>
      <div className="right-section">
        {editMode ? (
          <EditInstructorInfo instructor={instructor} onSubmit={editInstructorDetails} />
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





