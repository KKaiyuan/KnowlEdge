import './CoursePage.css';
import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MediumCard from '../Components/MediumCard';
import NavbarComponent from '../Components/Navbar';

import {
    faClipboard,
    faFileLines
  } from '@fortawesome/free-solid-svg-icons';

export default function CoursePage() {
    const [show, setShow] = useState(false);
    const [showTwo, setShowTwo] = useState(false);

    return (
        <>
    <NavbarComponent />

    <h1 className = "courseTitle"> {"Courses > CPSC 310"}</h1>
    <div className="topComponents">
        
        <div className="studySets">
        <h3 className = "topComponentName">Study Sets</h3>
        <MediumCard type="study-set" title="CPSC 310 - SLDC" />
        <MediumCard type="study-set" title="CPSC 221 - Arrays" />
        <p className = "seeMoreLink">See more...</p>
        </div>

        <div className="notes">
        <h3 className = "topComponentName">Notes</h3>
        <MediumCard type="notes" title="CPSC 310 - SLDC" />
        <MediumCard type="notes" title="CPSC 221 - Arrays" />
        <p className = "seeMoreLink">See more...</p>
        
        </div>

        <div className="announcement">
        <h3 className = "topComponentName">Announcements</h3>
        <MediumCard type="announcement" title="CPSC 310 - Test" />
        <MediumCard type="announcement" title="CPSC 221 - Questions Ready" />
        <p className = "seeMoreLink">See more...</p>
        </div>
      </div>

      <h2 className = "learningModules">Learning Modules</h2>

    <>
        <button onClick = {() => setShow(!show)} className = {"courseModules"}>
        <FontAwesomeIcon icon={faClipboard} className = "moduleIcon"></FontAwesomeIcon>
        <p className = "courseIntroduction">Course Introduction</p>

        </button>
            {show && 
            <>
            <div className = "subModules">
                <FontAwesomeIcon icon={faFileLines} className = "subModuleIcon"></FontAwesomeIcon>
                    <p className = {"subModuleName"}>Introduction</p>
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