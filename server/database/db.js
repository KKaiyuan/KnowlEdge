const mongoose = require('mongoose');

(async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://test:7ueN1afSy5AyI81v@cluster0.xvtwtwp.mongodb.net/KnowlEdge?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

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
