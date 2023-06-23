const editStudentProfile = async (name) => {
  console.log(name);
  const response = await fetch('http://localhost:3005/studentProfile', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(name),
  });

  const data = await response.json();
  if (!response.ok) {
    const errorMsg = data?.message;
    throw new Error(errorMsg);
  }

  return data;
};

const getStudentProfile = async () => {
    const response = await fetch('http://localhost:3005/studentProfile', {
      method: 'GET',
    });
  
    const data = await response.json();
    if (!response.ok) {
      const errorMsg = data?.message;
      throw new Error(errorMsg);
    }
  
    return data;
  };

export default {
  editStudentProfile,
  getStudentProfile
};
