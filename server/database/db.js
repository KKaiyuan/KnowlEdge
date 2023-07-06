const mongoose = require('mongoose');
const dotenv = require('dotenv').config({path: 'ABSOLUTE PATH TO .ENV FILE'});

(async () => {
  try {
    console.log(dotenv.parsed);
    const url = `mongodb+srv://${process.env.REACT_APP_MONGO_DB_URL}@knowledge.awzzm9g.mongodb.net/?retryWrites=true&w=majority`;
    console.log(url);
    //mongodb+srv://test:<password>@knowledge.awzzm9g.mongodb.net/?retryWrites=true&w=majority
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true, 
    });

    console.log('Connected to MongoDB');

    // const db = mongoose.connection.db;
   
    // const collections = await db.listCollections().toArray();

    // console.log('Collections:');
    // collections.forEach((collection) => {
    //   console.log(collection.name);
    // });
  } catch (error) { 
    console.error('Error connecting to MongoDB', error);
  }
})();
