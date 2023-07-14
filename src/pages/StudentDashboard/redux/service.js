const fetchStudentInfo = async (uid) => {
  try {
    const response = await fetch(`http://localhost:3005/studentProfile/${uid}`);

    if (!response.ok) {
      throw new Error('Request failed with status ' + response.status);
    }
    return await response.json();
  } catch (error) {
    throw new Error('An error occurred: ' + error.message);
  }
};

const patchStudentCourses = async (uid, newCourses) => {
  try {
    const response = await fetch(
      `http://localhost:3005/studentProfile/courses/${uid}`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ courses: newCourses }),
      }
    );

    if (!response.ok) {
      throw new Error('Request failed with status ' + response.status);
    }
    return await response.json();
  } catch (error) {
    throw new Error('An error occurred: ' + error.message);
  }
};

const fetchAllCourses = async () => {
  try {
    const response = await fetch('http://localhost:3005/dashboard/courses/');
    if (!response.ok) {
      throw new Error('Request failed with status ' + response.status);
    }
    return await response.json();
  } catch (error) {
    throw new Error('An error occurred: ' + error.message);
  }
};

export { fetchStudentInfo, patchStudentCourses, fetchAllCourses };
