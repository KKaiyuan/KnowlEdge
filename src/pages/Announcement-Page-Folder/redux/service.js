// Code inpsired from Workshop 3's cs455-express-demo repo: https://github.com/svmah/cs455-express-demo/tree/add-server

const getAnnouncements = async () => {
    const response = await fetch('http://localhost:3005/announcements', {
        method: 'GET',
    });
    const data = await response.json();
    if (!response.ok) {
      const errorMsg = data?.message;
      throw new Error(errorMsg);
    }
  
    return data;
}

const addAnnouncement = async (card) => {
    const response = await fetch('http://localhost:3005/announcements', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
          },
        body: JSON.stringify(card),
    });

    const data = await response.json();
    if (!response.ok) {
      const errorMsg = data?.message;
      throw new Error(errorMsg);
    }

    return data;
}

const removeAnnouncement = async (id) => {
    await fetch('http://localhost:3005/announcements/' + id, {
        method: "DELETE",
    });

    return id;
}

export default {
    getAnnouncements,
    addAnnouncement,
    removeAnnouncement
}