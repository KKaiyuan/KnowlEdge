import React from 'react';
import { Navbar, Dropdown } from 'flowbite-react';
import logo from '../../assets/logo.png';
import name from '../../assets/name.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faClipboardList,
  faCalendarDays,
  faBook,
  faSquarePollVertical,
  faCommentDots,
} from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import CourseEnrollement from './CourseEnrollement';
import { useSelector, useDispatch } from 'react-redux';
import { setEnrollModal } from '../StudentDashboard/redux/StudentDashboardSlice';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';

const CustomNavbarLink = styled(Navbar.Link)`
  &:hover {
    color: #0074d9; /* Replace 'red' with your desired color */
  }
`;

const CustomNavbar = styled(Navbar)`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.06);
`;

const NavbarComponent = () => {
  const { showEnrollModal } = useSelector(
    (state) => state.studentDashboardReducer
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = getAuth();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem('userToken');
      navigate('/signup'); // Redirect to the login page after signing out
    } catch (error) {
      console.log('Error signing out:', error);
    }
  };

  return (
    <>
      {showEnrollModal ? <CourseEnrollement /> : ''}

      <CustomNavbar fluid rounded>
        <Navbar.Brand href="/">
          <img alt="Logo" className="mr-3 h-6 sm:h-9" src={logo} />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            <img alt="KnowlEdge" className="mr-3 h-6 sm:h-9" src={name} />
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          {/* what's this for? */}
          <Navbar.Toggle />
        </div>
        <div className="flex md:order-2">
          {/* what's this for? */}
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <CustomNavbarLink href="/" className="font-sans font-bold">
            <span>
              <FontAwesomeIcon icon={faHouse} className="mr-2" />
              Dashboard
            </span>
          </CustomNavbarLink>
          <CustomNavbarLink className="font-sans font-bold">
            <Dropdown
              inline
              label={
                <span>
                  <FontAwesomeIcon icon={faClipboardList} className="mr-2" />
                  Courses
                </span>
              }
            >
              <Dropdown.Item onClick={() => dispatch(setEnrollModal('true'))}>
                Enroll
              </Dropdown.Item>
            </Dropdown>
          </CustomNavbarLink>

          <CustomNavbarLink className="font-sans font-bold">
            <Dropdown
              inline
              label={
                <span>
                  <FontAwesomeIcon icon={faCalendarDays} className="mr-2" />
                  Calendar
                </span>
              }
            >
              <Dropdown.Item>Inbox</Dropdown.Item>
              <Dropdown.Item onClick={() => navigate('/calendar')}>
                Event Calendar
              </Dropdown.Item>
            </Dropdown>
          </CustomNavbarLink>

          <CustomNavbarLink href="/studysets" className="font-sans font-bold">
            <span>
              <FontAwesomeIcon icon={faBook} className="mr-2" />
              Study Sets
            </span>
          </CustomNavbarLink>

          <CustomNavbarLink href="" className="font-sans font-bold">
            <span>
              <FontAwesomeIcon icon={faSquarePollVertical} className="mr-2" />
              Notes
            </span>
          </CustomNavbarLink>

          <CustomNavbarLink href="" className="font-sans font-bold">
            <span>
              <FontAwesomeIcon icon={faCommentDots} className="mr-2" />
              Messages
            </span>
          </CustomNavbarLink>
        </Navbar.Collapse>
        <Button onClick={handleSignOut}>Log Out</Button>
      </CustomNavbar>
    </>
  );
};

export default NavbarComponent;
