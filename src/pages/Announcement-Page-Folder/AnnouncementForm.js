import React from 'react';
import styled from 'styled-components';

const StyledAnnouncementForm = styled.div`
.titleInput{
  border-radius: 5px;
  height: 30px;
  margin-left: 20px;
  width: 350px;

  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 12px 16px;
  gap: 4px;



  border: 1px solid #000000;
  border-radius: 8px;
}

.anonouncementTitle {
  border-radius: 5px;
  height: 150px;
  width: 500px;
  margin-left: 20px;
     box-sizing: border-box;
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: flex-start;
     padding: 12px 16px;
     gap: 4px;
 
 
 
     border: 1px solid #000000;
     border-radius: 8px;
}

.searchAnnouncement {
  border-radius: 5px;
  height: 28px;
  width: 350px;
  margin: 6px 4px;
}

.submitButton {
  margin-left: 20px;
  padding: 10px;
  border: 0.1px rgb(192, 192, 192) solid;
  border-radius: 5px;
  
  border-radius: 5px;
}

.submitButton:hover {
 background-color: gray;
 color:white;
}

.formTitle {
  margin-left: 20px;
  margin-top: 20px;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 48px;

  color: #221824;


}

.cancelButton {
  margin-left: 10px;
  padding: 10px;
  border-radius: 5px;
  color: red;
  text-decoration: underline;

  border-radius: 5px;
}


`;
// Citation for making elements appear and disappear on click: https://www.youtube.com/watch?v=uXk62ZgPH-4&ab_channel=Accessworld
// learnt how to add and remove elements dynamically from Code Academy
export default function AnnouncementForm({newAnnouncement, handleChange, handleSubmit, show, toggle}) {
    

    return (
    <StyledAnnouncementForm>
        <h1 className= "formTitle">Announcements</h1>

        {show && 
            (<form onSubmit={handleSubmit}>
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
        )}
           
     </StyledAnnouncementForm>
     );
};