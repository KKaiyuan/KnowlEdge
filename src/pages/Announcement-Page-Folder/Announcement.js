import React, {useState} from "react";
import {useSelector, useDispatch} from 'react-redux';
import { addAnnouncement, removeAnnouncement } from "./actions/Action";
import AnnouncementForm from "./AnnouncementForm";
import AnnouncementList from "./AnnouncementList";
import './Announcement.css';
import NavbarComponent from '../Components/Navbar';

// learnt how to add and remove elements dynamically from Code Academy
// Citation for making elements appear and disappear on click: https://www.youtube.com/watch?v=uXk62ZgPH-4&ab_channel=Accessworld
// Citation for learning how to use and setup redux from https://github.com/danyakarras/react-redux-button-counter-2022
export default function Announcement() {
    const [newAnnouncement, setNewAnnouncement] = useState({});
    const allAnnouncements = useSelector(state => state.ReducerAnnouncementPage);

    const [show, setShow] = useState(false);
    const [showAnnouncement, setShowAnnouncement] = useState(true);

    const dispatch = useDispatch();

    const handleChange = ({ target }) => {
      const { name, value } = target;
      setNewAnnouncement((prevAnnouncement) => ({ ...prevAnnouncement, announcementId: Date.now(),[name]: value}));
    };
  
    const handleSubmit = (event) => {
      console.log(newAnnouncement);
      event.preventDefault();
      if (!newAnnouncement.announcementTitle) return;
      if (!newAnnouncement.announcement) return;
      setShowAnnouncement(!showAnnouncement);
      setShow(!show);
      dispatch(addAnnouncement(newAnnouncement));
      setNewAnnouncement({});
    };
  
    
    const handleDelete = (announcementId) => {
      dispatch(removeAnnouncement(announcementId));
    };

    const toggle = () => {
      setShow(!show);
      setShowAnnouncement(!showAnnouncement);
    }
    return (
        <div>
          <NavbarComponent></NavbarComponent>
        <AnnouncementForm
        newAnnouncement = {newAnnouncement}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        show = {show}
        />
        {showAnnouncement && <button type ='button' onClick = {() => toggle()} className={"makeNewAnnouncement"}>Make New Announcement</button>}
        <br/>
  
        <AnnouncementList
        allAnnouncements = {allAnnouncements}
        handleDelete = {handleDelete}
        />
        </ div>
    );
}