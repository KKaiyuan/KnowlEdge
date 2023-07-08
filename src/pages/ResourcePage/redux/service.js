const fetchComments = async (resourceId) => {
  try {
    const response = await fetch(
      `http://localhost:3005/dashboard/comments/${resourceId}`
    );
    if (!response.ok) {
      throw new Error('Request failed with status ' + response.status);
    }
    return await response.json();
  } catch (error) {
    throw new Error('An error occurred: ' + error.message);
  }
};

export { fetchComments };
