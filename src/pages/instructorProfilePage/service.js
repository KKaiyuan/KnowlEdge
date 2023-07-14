const editInstructorProfile = async (name) => {
    console.log(name);
    const response = await fetch('http://localhost:3005/instructorProfile', {
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
  
  const getInstructorProfile = async () => {
      const response = await fetch('http://localhost:3005/instructorProfile', {
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
    editInstructorProfile,
    getInstructorProfile
  };
  