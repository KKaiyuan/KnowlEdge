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

const addComment = async (comment) => {
  try {
    const response = await fetch('http://localhost:3005/dashboard/comments/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(comment),
    });

    if (!response.ok) {
      throw new Error('Request failed with status ' + response.status);
    }

    return await response.json();
  } catch (error) {
    throw new Error('An error occurred: ' + error.message);
  }
};

const patchUpvotes = async ({ resourceId, commentId, upvotes }) => {
  try {
    const response = await fetch(
      `http://localhost:3005/dashboard/comments/${commentId}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          resourceId,
          upvotes,
        }),
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

export { fetchComments, addComment, patchUpvotes };
