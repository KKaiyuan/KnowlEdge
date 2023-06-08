import './CoursePage.css';
// import {useSelector, useDispatch} from 'react-redux';
// import { addModule } from "./actions/Action";
// import NewModuleForm from "./NewModuleForm";
// import ModulesList from "./ModulesList";
import React, {useState} from "react";
import ModulesImage from './pictures/ModulesImage.PNG';
import SubModuleImage from './pictures/SubModuleImage.PNG';
export default function CoursePage() {
    // const [newModule, setNewModule] = useState({});
    // const allModules = useSelector(state => state.ReducerCoursePage);
    const [show, setShow] = useState(false);
    const [showTwo, setShowTwo] = useState(false);
    // const dispatch = useDispatch();

    // const handleChange = ({ target }) => {
    //   const { name, value } = target;
    //   setNewModule((prevModules) => ({ ...prevModules, moduleId: Date.now(),[name]: value}));
    // };
  
    // const handleSubmit = (event) => {
    //   event.preventDefault();

    //   dispatch(addModule(newModule));
    //   setNewModule({});
    // };
  
    
    // const handleDelete = (moduleId) => {
    //   dispatch(removeModule(moduleId));
    // };

    return (
        <>
    <h1> {"Courses > CPSC 310"}</h1>
    <div className="topComponents">
        
        <div className="studySets">
        <h3>Study Sets</h3>
        <div className = "innerComponent">
        <p className = "innerText">Study Set 1</p>

            </div>
            <br/>
            <div className = "innerComponent">
            <p className = "innerText">Study Set 2</p>

            </div>
        <p className = "seeMoreLink">See more...</p>
        </div>

        <div className="notes">
        <h3>Notes</h3>
        <div className = "innerComponent">
        <p className = "innerText">Notes 1</p>
            </div>
            <br/>
            <div className = "innerComponent">
            <p className = "innerText">Notes 1</p>
            </div>
        <p className = "seeMoreLink">See more...</p>
        
        </div>

        <div className="announcement">
        <h3>Announcements</h3>
        <div className = "innerComponent">
        <p className = "innerText">Announcement 1</p>
            </div>
            <br/>
            <div className = "innerComponent">
                <p className = "innerText">Announcement 2</p>
            </div>
        <p className = "seeMoreLink">See more...</p>
        </div>
      </div>

      <h2 className = "learningModules">Learning Modules</h2>
      {/* <button>Add New Module</button> */}

      {/* 
      <NewModuleForm
        newModule = {newModule}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        />

        <ModulesList
        allModules = {allModules}
        // handleDelete = {handleDelete}
        /> */}

        <div>
        <button onClick = {() => setShow(!show)} className = {"courseModules"}>
        <img src={ModulesImage} alt= "none" className = {"moduleImages"}/>
            <p className = {"moduleName"}>Course Introduction</p>
        </button>
            {show && 
            <>
            <div className = "subModules">
                <div className = "subModuleElement">
                    <img src={SubModuleImage} alt= "none" className = {"subModuleImages"}/><p className = {"subModuleName"}>Welcome!</p>
                </div>
            </div>
            
            <div className = "subModules">
                <div className = "subModuleElement">
                    <img src={SubModuleImage} alt= "none" className = {"subModuleImages"}/><p className = {"subModuleName"}>Syllabus</p>
                </div>

            </div>
            </>
            }
            </div>
       
        <div>
        <button onClick = {() => setShowTwo(!showTwo)} className = {"courseModules"}>
            <img src={ModulesImage} alt= "none" className = {"moduleImages"}/>
            <p className = {"moduleName"}>Module 1 - Testing</p>
            </button>
            {showTwo && 
             <>
             <div className = "subModules">
                 <div className = "subModuleElement">
                     <img src={SubModuleImage} alt= "none" className = {"subModuleImages"}/><p className = {"subModuleName"}>Module 1 - Topic 1</p>
                 </div>
             </div>
             
             <div className = "subModules">
                 <div className = "subModuleElement">
                     <img src={SubModuleImage} alt= "none" className = {"subModuleImages"}/><p className = {"subModuleName"}>Module 1 - Topic 2</p>
                 </div>
 
             </div>
             </>
            }
            </div>
    </>
    )
}