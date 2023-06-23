import React from 'react';
import { Navbar, Dropdown, Avatar } from 'flowbite-react';
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
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setEnrollModal } from '../StudentDashboard/redux/StudentDashboardSlice';

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
              <Dropdown.Item>
                <Dropdown inline label="Right" placement="right-start">
                  <Dropdown.Item>Dashboard</Dropdown.Item>
                  <Dropdown.Item>Dashboard</Dropdown.Item>
                  <Dropdown.Item>Dashboard</Dropdown.Item>
                </Dropdown>
              </Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
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
              <Dropdown.Item>
                <Dropdown inline label="Right" placement="right-start">
                  <Dropdown.Item>Dashboard</Dropdown.Item>
                  <Dropdown.Item>Dashboard</Dropdown.Item>
                  <Dropdown.Item>Dashboard</Dropdown.Item>
                </Dropdown>
              </Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Earnings</Dropdown.Item>
            </Dropdown>
          </CustomNavbarLink>

          <CustomNavbarLink className="font-sans font-bold">
            <Dropdown
              inline
              label={
                <span>
                  <FontAwesomeIcon icon={faBook} className="mr-2" />
                  Study Sets
                </span>
              }
            >
              <Dropdown.Item>
                <Dropdown inline label="Right" placement="right-start">
                  <Dropdown.Item>Dashboard</Dropdown.Item>
                  <Dropdown.Item>Dashboard</Dropdown.Item>
                  <Dropdown.Item>Dashboard</Dropdown.Item>
                </Dropdown>
              </Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Earnings</Dropdown.Item>
            </Dropdown>
          </CustomNavbarLink>

          <CustomNavbarLink className="font-sans font-bold">
            <Dropdown
              inline
              label={
                <span>
                  <FontAwesomeIcon
                    icon={faSquarePollVertical}
                    className="mr-2"
                  />
                  Notes
                </span>
              }
            >
              <Dropdown.Item>
                <Dropdown inline label="Right" placement="right-start">
                  <Dropdown.Item>Dashboard</Dropdown.Item>
                  <Dropdown.Item>Dashboard</Dropdown.Item>
                  <Dropdown.Item>Dashboard</Dropdown.Item>
                </Dropdown>
              </Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Earnings</Dropdown.Item>
            </Dropdown>
          </CustomNavbarLink>

          <CustomNavbarLink className="font-sans font-bold">
            <Dropdown
              inline
              label={
                <span>
                  <FontAwesomeIcon icon={faCommentDots} className="mr-2" />
                  Messages
                </span>
              }
            >
              <Dropdown.Item>
                <Dropdown inline label="Right" placement="right-start">
                  <Dropdown.Item>Dashboard</Dropdown.Item>
                  <Dropdown.Item>Dashboard</Dropdown.Item>
                  <Dropdown.Item>Dashboard</Dropdown.Item>
                </Dropdown>
              </Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Earnings</Dropdown.Item>
            </Dropdown>
          </CustomNavbarLink>
        </Navbar.Collapse>
      </CustomNavbar>
    </>
  );
};

export default NavbarComponent;
