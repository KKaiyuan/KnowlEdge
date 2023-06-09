import React, {useState} from 'react';
import './AnnouncementList.css';
// Search filter citation: https://www.youtube.com/watch?v=MY6ZZIn93V8&ab_channel=LamaDev
// Citation for drop down: https://www.w3schools.com/howto/howto_css_dropdown.asp
// learnt how to add and remove elements dynamically from Code Academy
export default function AnnouncementList({allAnnouncements, handleDelete}) {
    const [query, setQuery] = useState("")
    return (
        <div>
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
                          
                                <div class="dropdown">
                                <button class="dropbtn">:</button>
                                <div class="dropdown-content">
                                    <button onClick = {() => handleDelete(announcementId)} className = {"deleteButton"}>delete</button>

                                </div>
                                </div>
                            </li>
                        ))}
                    </ul>
        </div>
       
    )
}