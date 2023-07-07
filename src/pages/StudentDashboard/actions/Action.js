export const fetchStudentInfo = () => {
  return {
    type: 'FETCH_STUDENT_Info',
  };
};

export const patchStudentCourses = (newCourses) => {
  return {
    type: 'FETCH_STUDENT_Info',
    payload: newCourses,
  };
};
