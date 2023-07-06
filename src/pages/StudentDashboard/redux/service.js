const fetchStudentInfo = async () => {
  try {
    const response = await fetch('http://localhost:3005/studentProfile/');
    if (!response.ok) {
      throw new Error('Request failed with status ' + response.status);
    }
    return await response.json();
  } catch (error) {
    throw new Error('An error occurred: ' + error.message);
  }
};

export default fetchStudentInfo;
