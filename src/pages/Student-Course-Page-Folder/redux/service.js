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


export default {
    getAnnouncements
}