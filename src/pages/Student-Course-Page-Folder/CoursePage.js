// ChatGPT helped nvm
import './CoursePage.css';
import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MediumCard from '../Components/MediumCard';
import NavbarComponent from '../Components/Navbar';
import { useNavigate } from 'react-router-dom';
import {useSelector} from 'react-redux';
import {
    faClipboard,
    faFileLines
  } from '@fortawesome/free-solid-svg-icons';
import {useParams} from 'react-router-dom';

export default function CoursePage() {
    const [show, setShow] = useState(false);
    const [showTwo, setShowTwo] = useState(false);

    const navigate = useNavigate();


    const allAnnouncements = useSelector(state => state.ReducerAnnouncementPage);

    const {'*': dynamicSegmentValue } = useParams();    
    console.log(dynamicSegmentValue);

    const handleCourseCardClick = (courseTitle) => {
        navigate(`/resource/${courseTitle}`);
      };

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
        
        <MediumCard type="announcement" title= {allAnnouncements[0].announcementTitle} />
        <MediumCard type="announcement" title={allAnnouncements[1].announcementTitle} />
        <button className = "seeMoreLink" onClick={() => navigate('/announcements')}>See more...</button>
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
                    <p className = {"subModuleName"} onclickfn={handleCourseCardClick("Introduction-" + dynamicSegmentValue)}>Introduction</p>
            </div>
            
            <div className = "subModules">
                <FontAwesomeIcon icon={faFileLines} className = "subModuleIcon"></FontAwesomeIcon>
                    <p className = {"subModuleName"}>Syllabus</p>
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