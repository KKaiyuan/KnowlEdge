import React from 'react';
import CommentSection from './CommentSection/CommentSection';
import { useSelector } from 'react-redux';
import NavbarComponent from '../Components/Navbar';
import { useParams } from 'react-router';
import styled from 'styled-components';

const styleResource = styled.div`
.courseTitle {
  /* Courses > CPSC 310 */

font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 32px;
line-height: 48px;

color: #373537;

margin: 20px;

}`;
const ResourcePage = () => {
  const {'*': dynamicSegmentValue } = useParams();    

  const allCourses = useSelector(state => state.resourcePageReducer.courses);
  console.log(allCourses);
  const course = allCourses.find((course) => dynamicSegmentValue === course.pageType + "-" + course.courseName);
  console.log("this", course);
  return (
    <styleResource>
      <NavbarComponent></NavbarComponent>
      <h1 className = "courseTitle">  {"Course > " + course.courseName.split("-")[0].toUpperCase() + " " + course.courseName.split("-")[1] + " > " + course.pageType}</h1>
      <p>
        {course.courseInformation}
      </p>
      <CommentSection />
    </styleResource>
  );
};

export default ResourcePage;
