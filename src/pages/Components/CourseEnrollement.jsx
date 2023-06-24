/* This code is adapted from:
1. https://www.flowbite-react.com/docs/components/modal
2. https://flowbite.com/docs/forms/input-field/
*/

import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setEnrollModal } from '../StudentDashboard/redux/StudentDashboardSlice';
import { ListGroup } from 'flowbite-react';
import styled from 'styled-components';

const StyleListGroupItem = styled(ListGroup.Item)`
  button:hover {
    color: #0074d9;
  }
  button:focus {
    background-color: #0074d9;
    outline: none;
    color: white;
    --tw-ring-opacity: 0;
  }
  button:focus-visible {
    outline: none;
  }
`;

const CourseDivStyled = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;

  h3 {
    margin-right: 10px;
  }

  button {
    background-color: white;
    color: black;
    border: 1px solid #0074d9;
    border-radius: 5px;
    padding: 0 3px;
  }

  button:hover {
    background-color: #0074d9;
    color: white;
  }
`;

const CourseEnrollement = () => {
  const [searchContent, setSearchContent] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState([]);

  const handleInputChange = (event) => {
    setSearchContent(event.target.value);
    findCourse();
  };

  const findCourse = () => {
    const data = {
      courses: [
        'CPSC 121 - Models of Computation',
        'CPSC 210 - Software Construction',
        'CPSC 213 - Introduction to Computer Systems',
        'CPSC 221 - Basic Algorithms and Data Structures',
        'CPSC 310 - Introduction to Software Engineering',
        'CPSC 313 - Computer Hardware and Operating Systems',
        'CPSC 320 - Intermediate Algorithm Design and Analysis',
        'CPSC 455 - Applied Industry Practices',
      ],
    };

    const matchingCourses = data.courses.filter((course) => {
      return (
        course.toLowerCase().includes(searchContent.toLowerCase()) &&
        !selectedCourses.includes(course)
      );
    });

    setSearchResult(matchingCourses);
  };

  const openModal = useSelector(
    (state) => state.studentDashboardReducer.showEnrollModal
  );
  const dispatch = useDispatch();

  const setOpenModal = (payload) => {
    dispatch(setEnrollModal(payload));
  };

  const handleSelectItem = (event) => {
    const courseToAdd = event.target.textContent;
    setSelectedCourses((prevCourses) => {
      if (!prevCourses.includes(courseToAdd)) {
        const newCourses = [...prevCourses, courseToAdd];
        return newCourses;
      }
      return prevCourses;
    });
    setSearchResult([]);
  };

  const handleUnselectCourse = (event) => {
    console.log(event.target.parent);
  };

  return (
    <>
      <Modal
        dismissible
        show={openModal === 'true'}
        onClose={() => setOpenModal(undefined)}
      >
        <Modal.Header>Enroll in a course</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <form className="flex flex-col">
              <div>
                <label htmlFor="simple-search" className="sr-only">
                  Search
                </label>
                <div className="relative w-full">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="simple-search"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search"
                    required
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div>
                {searchResult.length > 0 && (
                  <ListGroup id="custom-list-item">
                    {searchResult.map((result, index) => {
                      return (
                        <StyleListGroupItem
                          key={index} // Add a unique key prop here
                          onClick={(e) => handleSelectItem(e)}
                        >
                          {result}
                        </StyleListGroupItem>
                      );
                    })}
                  </ListGroup>
                )}
              </div>

              <div>
                {selectedCourses.map((course, index) => {
                  return (
                    <CourseDivStyled key={index}>
                      {' '}
                      {/* Add a unique key prop here */}
                      <h3>{course}</h3>
                      <button onClick={(e) => handleUnselectCourse(e)}>
                        x
                      </button>
                    </CourseDivStyled>
                  );
                })}
              </div>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer className="flex justify-end">
          <Button color="gray" onClick={() => setOpenModal(undefined)}>
            Enroll
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CourseEnrollement;
