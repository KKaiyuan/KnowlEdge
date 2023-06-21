import React from 'react';
import './AnnouncementForm.css'

// Citation for making elements appear and disappear on click: https://www.youtube.com/watch?v=uXk62ZgPH-4&ab_channel=Accessworld
// learnt how to add and remove elements dynamically from Code Academy
export default function AnnouncementForm({newAnnouncement, handleChange, handleSubmit, show, toggle}) {
    

    return (
    <>
        <h1 className= "formTitle">Announcements</h1>

        {show && 
            <form onSubmit={handleSubmit}>
            <input
            name=  "announcementTitle"
            className= {"titleInput"}
            value = {newAnnouncement.title}
            placeholder = "Title"
            onChange = {handleChange}
            />
            <br></br>
            <input
            name = "announcement"
            className= {"anonouncementTitle"}
            value = {newAnnouncement.paragraph}
            placeholder = "announcement"
            onChange = {handleChange}
            />
            <br></br>
            <button type = "submit" className="submitButton">Submit</button>
            <button className = "cancelButton"  onClick = {() => toggle()}>Cancel</button>
          </form > 
        }
           
     </>
     );
};