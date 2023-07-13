import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from 'react-redux';
// import { addAnnouncement, removeAnnouncement } from "./actions/Action";
import AnnouncementForm from "./AnnouncementForm";
import AnnouncementList from "./AnnouncementList";
// import './Announcement.css';
import NavbarComponent from '../Components/Navbar';
import { getAnnouncementsAsync, addAnnouncementAsync, removeAnnouncementAsync } from "./redux/thunks";
import styled from 'styled-components';
import {useParams} from 'react-router-dom';
import { fetchStudentInfoAsync } from '../StudentDashboard/redux/thunks';
import { getAuth } from 'firebase/auth';
import { app } from '../../firebase';

// learnt how to add and remove elements dynamically from Code Academy
// Citation for making elements appear and disappear on click: https://www.youtube.com/watch?v=uXk62ZgPH-4&ab_channel=Accessworld
// Citation for learning how to use and setup redux from https://github.com/danyakarras/react-redux-button-counter-2022
// Code inpsired from Workshop 3's cs455-express-demo repo: https://github.com/svmah/cs455-express-demo/tree/add-server
const AnonuncementStyle = styled.div`.makeNewAnnouncement {
  border: none;
  color: blue;
  background-color: white;
  text-decoration: underline;

  margin-left: 20px;
}`;
export default function Announcement() {
    const [newAnnouncement, setNewAnnouncement] = useState({});
    const allAnnouncements = useSelector(state => state.announcementPageReducerStore.announcements);

    const [show, setShow] = useState(false);
    const [showAnnouncement, setShowAnnouncement] = useState(true);

    const dispatch = useDispatch();

    const {'*': dynamicSegmentValue } = useParams();    
    useEffect(() => {
      dispatch(getAnnouncementsAsync(dynamicSegmentValue));
      if (dynamicSegmentValue === "all") {
        setShowAnnouncement(false);
      } else {
        setShowAnnouncement(true);
      }
    }, [dispatch]);

 
    const handleSubmit = (event) => {
      console.log(newAnnouncement);
      event.preventDefault();
      if (!newAnnouncement.announcementTitle) return;
      if (!newAnnouncement.announcement) return;
      setShowAnnouncement(!showAnnouncement);
      setShow(!show);

      console.log(newAnnouncement);
      dispatch(addAnnouncementAsync(newAnnouncement));
      setNewAnnouncement({});
    };
  
    
    const handleDelete = (announcementId) => {
      dispatch(removeAnnouncementAsync(announcementId));
    };

    const toggle = () => {
      setShow(!show);
      setShowAnnouncement(!showAnnouncement);
    }


    const auth = getAuth(app);
    const [user, setUser] = useState('');
  
    useEffect(() => {
      dispatch(fetchStudentInfoAsync());
    }, [dispatch]);

    useEffect(() => {
      const fetchUserData = async () => {
        const currentUser = auth.currentUser;
        setUser(currentUser);
      };
      fetchUserData();
    }, []);

    const handleChange = ({ target }) => {
      const { name, value } = target;
      setNewAnnouncement((prevAnnouncement) => ({ ...prevAnnouncement, announcementId: Date.now(), announcementCourse: dynamicSegmentValue,  username: user.displayName, [name]: value}));
    };

    return (
        <AnonuncementStyle>
          <NavbarComponent></NavbarComponent>
        <AnnouncementForm
        newAnnouncement = {newAnnouncement}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        
        show = {show}
        toggle = {toggle}
        />
        {showAnnouncement && (<button type ='button' onClick = {() => toggle()} className={"makeNewAnnouncement"}>Make New Announcement</button>)}
        <br/>
  
        <AnnouncementList
        allAnnouncements = {allAnnouncements}
        handleDelete = {handleDelete}

        />
        </ AnonuncementStyle>
    );
}