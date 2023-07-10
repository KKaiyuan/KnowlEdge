export const fetchStudentInfo = () => {
  return {
    type: 'FETCH_STUDENT_INFO',
  };
};

export const patchStudentCourses = (newCourses) => {
  return {
    type: 'PATCH_STUDENT_COURSES',
    payload: newCourses,
  };
};

export const fetchAllCourses = () => {
  return {
    type: 'FETCH_ALL_COURSES',
  };
};
