// dynamicSegmentValue learnt from ChatGPT

import './CoursePage.css';
import React, {useState, useEffect} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MediumCard from '../Components/MediumCard';
import NavbarComponent from '../Components/Navbar';
import { useNavigate } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {
    faClipboard,
    faFileLines
  } from '@fortawesome/free-solid-svg-icons';
import {useParams} from 'react-router-dom';
import { getAnnouncementsAsync} from "./redux/thunks";
export default function CoursePage() {
    const [show, setShow] = useState(false);
    const [showTwo, setShowTwo] = useState(false);

    const navigate = useNavigate();

    const dispatch = useDispatch();
    const {'*': dynamicSegmentValue } = useParams();    
    console.log("course page", dynamicSegmentValue);
    useEffect(() => {
        dispatch(getAnnouncementsAsync(dynamicSegmentValue));
      }, [dispatch]);

    const allAnnouncements = useSelector(state => state.coursePageReducer.announcements);


    const handleCourseCardClick = (courseTitle) => {
        navigate(`/resource/${courseTitle}`);
      };

    const handleSyllabusClick = (courseTitle) => {
        navigate(`/resource/${courseTitle}`)
    }

    return (
        <>
    <NavbarComponent />

    <h1 className = "courseTitle"> {"Courses > " + dynamicSegmentValue.split("-")[0].toUpperCase() + " " + dynamicSegmentValue.split("-")[1]}</h1>
    <div className="topComponents">
        
        <div className="studySets">
        <h3 className = "topComponentName">Study Sets</h3>
        <MediumCard type="study-set" title="CPSC 310 - SLDC" />
        <MediumCard type="study-set" title="CPSC 221 - Arrays" />
        <button className = "seeMoreLink" onClick={() => navigate('/studysets')}>See more...</button>
        </div>

        <div className="notes">
        <h3 className = "topComponentName">Notes</h3>
        <MediumCard type="notes" title="CPSC 310 - SLDC" />
        <MediumCard type="notes" title="CPSC 221 - Arrays" />
        <p className = "seeMoreLink" >See more...</p>
        
        </div>

        <div className="announcement">

        <h3 className = "topComponentName" >Announcements</h3>
        
        {allAnnouncements.length >= 1? (<MediumCard type="announcement" title= {allAnnouncements[0].announcementTitle} />) : (<MediumCard type="none" title= "" />) }
        {allAnnouncements.length >= 2? (<MediumCard type="announcement" title= {allAnnouncements[1].announcementTitle} />) : (<MediumCard type="none" title= "" />)  }
        <button className = "seeMoreLink" onClick={() => navigate('/announcements/' + dynamicSegmentValue)}>See more...</button>
        </div>
      </div>

      <h2 className = "learningModules">Learning Modules</h2>

    <>
        <button onClick = {() => setShow(!show)} className = {"courseModules"}>
        <FontAwesomeIcon icon={faClipboard} className = "moduleIcon"></FontAwesomeIcon>
        <p className = "courseIntroduction" >Course Introduction</p>

        </button>
            {show && 
            <>
            <div className = "subModules">
                <FontAwesomeIcon icon={faFileLines} className = "subModuleIcon"></FontAwesomeIcon>
                    <button className = {"subModuleName"} onClick={() => handleCourseCardClick("Introduction-" + dynamicSegmentValue)}>Introduction</button>
            </div>
            
            <div className = "subModules">
                <FontAwesomeIcon icon={faFileLines} className = "subModuleIcon"></FontAwesomeIcon>
                    <button className = {"subModuleName"} onClick={() => handleSyllabusClick("Syllabus-" + dynamicSegmentValue)}>Syllabus</button>
            </div>
            </>
            }
        </>

        <>
        <button onClick = {() => setShowTwo(!showTwo)} className = {"courseModules"}>
        <FontAwesomeIcon icon={faClipboard} className = "moduleIcon"></FontAwesomeIcon>
        <p className = "courseIntroduction">Module 1 - Topic 1</p>

        </button>
            {showTwo && 
            <>
            <div className = "subModules">
                <FontAwesomeIcon icon={faFileLines} className = "subModuleIcon"></FontAwesomeIcon>
                    <p className = {"subModuleName"}>Instructions To Topic 1</p>
            </div>
            
            <div className = "subModules">
                <FontAwesomeIcon icon={faFileLines} className = "subModuleIcon"></FontAwesomeIcon>
                    <p className = {"subModuleName"}>Topic 1 Questions</p>
            </div>
            </>
            }
        </>
    </>
    )
}