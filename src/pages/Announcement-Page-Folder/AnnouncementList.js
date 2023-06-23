import React, {useState} from 'react';
import styled from 'styled-components';
// Search filter citation: https://www.youtube.com/watch?v=MY6ZZIn93V8&ab_channel=LamaDev
// Citation for drop down: https://www.w3schools.com/howto/howto_css_dropdown.asp
// learnt how to add and remove elements dynamically from Code Academy

// styling for dynamically elements inspired from codeacademy
// Styling also imported from Figma
// Drop down menu citation for CSS: https://www.w3schools.com/howto/howto_css_dropdown.asp

const StyledAnnouncementlist = styled.div`
.announcement-list {
    padding: 0;
    position: relative;
    margin-left: 10px;
  }
  
  .announcementElement {
    background-color: white;
    border: 1px solid white;
    border-radius: 5px 2px;
    margin: 8px 10px;
    width: 95%;
    position: relative;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  
  .paragraph {
    position: relative;
    margin: 10px;
  }

 .announcementTitle {
    margin: 10px;
 }

.deleteButton {
    width: 100%;
    border: none;
    height: 100%;
}

.deleteButton:hover {
    background-color: gray;
    color: white;
}
.dropbtn {
    background-color: white;
    color: black;
    padding-left: 30px;
    padding-right: 10px;
    font-size: 30px;
    border: none;
    color: rgb(61, 61, 61);
    font-weight: bold;
    text-align: right;
  }
  
  .dropdown {
    position: absolute;
    display: inline-block;
    top: 0%;
    right:0%;
  }
  
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    width: 100%;
    height: 100%;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
  }
  
.dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }

.dropdown-content a:hover {background-color: #ddd;}

.dropdown:hover .dropdown-content {display: block;}

.dropdown:hover .dropbtn {background-color: white;}

.tempUser {
    font-size: 12px;
    margin-left: 10px;
    color: rgb(83, 83, 83);
}


.searchAnnouncement {
  border-radius: 5px;
  height: 30px;
  margin-left: 20px;
  width: 350px;

  /* Text Field */
  box-sizing: border-box;

  /* Auto layout */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 12px 16px;
  gap: 4px;



  border: 1px solid #000000;
  border-radius: 8px;
}`;
export default function AnnouncementList({allAnnouncements, handleDelete}) {
    const [query, setQuery] = useState("")

    
    return (
        <StyledAnnouncementlist>
    <input 
        type = "search"
        placeholder = {"Search"}
        className = {"searchAnnouncement"}
        onChange={(e) => setQuery(e.target.value)}/>
            <ul className= {'announcement-list'}>
                        {allAnnouncements.filter((announcement) => announcement.announcementTitle.toLowerCase().includes(query) ||
                        announcement.announcement.toLowerCase().includes(query)).map(( { announcementTitle, announcement, announcementId}) => (
                            <li key={announcementId} className = {'announcementElement'}>
                                <h2 className = {"announcementTitle"}>{announcementTitle}</h2>
                                <p className= {"tempUser"}>Posted by: Unknown User</p>
                                <p className= {"paragraph"}>{announcement}</p>
                          
                                <div className="dropdown">
                                <button className="dropbtn">:</button>
                                <div className="dropdown-content">
                                    <button onClick = {() => handleDelete(announcementId)} className = {"deleteButton"}>delete</button>

                                </div>
                                </div>
                            </li>
                        ))}
                    </ul>
        </StyledAnnouncementlist>
       
    )
}