// Reference Materials:
// Stephanie's Sample Code at https://github.com/svmah/cs455-express-demo/blob/add-server/server/routes/users.js

// StackOverflow Answer #2 at https://stackoverflow.com/questions/73611905/how-to-delete-an-flashcard-in-an-array-that-is-stored-in-the-backend-server
// StackOverflow Answer #1 at "https://stackoverflow.com/questions/20804163/check-if-a-key-exists-inside-a-json-object"


// var cors = require('cors');

var express = require('express');
var router = express.Router();

const {FlashcardDocuments} = require('../database/model');


const { v4: uuid } = require('uuid');


// var { MongoClient } = require("mongodb");
// const mongoose = require("mongoose");
// mongoose.set("strictQuery", false);

// const mongoURI = " *** FILL IN mongoURI *** "; // TODO: fill in mongoURI for database cluster for project KnowlEdge
// const client = new MongoClient(mongoURI);

// async function connect() {
//   // https://www.youtube.com/watch?v=bhiEJW5poHU&ab_channel=ArpanNeupane CONNECT NODE.JS TO MONGODB
//   try {
//     await mongoose.connect(mongoURI);
//     console.log("CONNECTED");
//   } catch (error) {
//     console.log(error);
//   }
// }
// connect();


const defaultFlashcards = [
  {
    id: "Default-1" /* uuid() */,
    term: 'vin',
    definition: 'wine',
    description:
      'Coffret Découverte 3 Bouteilles - Saint Emilion Grand Cru & Castillon Côtes de Bordeaux',
    imageURL: 'https://m.media-amazon.com/images/I/61x8QBBsNAS._AC_SL1500_.jpg',
  },
  {
    id: "Default-2" /* uuid() */,
    term: 'fromage',
    definition: 'cheese',
    description:
      'DLC minimum garantie: 7 jours - Le Chaource est un fromage naturel fabriqué à partir de lait de vache entier selon des méthodes traditionnelles. CHAOURCE BOITE 250G Pour votre santé, mangez au moins cinq fruits et légumes par jour. FROMAGERIE LINCET 15 RUE DE LA QUENNEVELLE - 89 100 SALIGNY',
    imageURL: 'https://m.media-amazon.com/images/I/81c1PbM-LbL._AC_SL1500_.jpg',
  },
];


// async function clearDB() {
//   try {
//     await client.connect();
//     const database = client.db(" *** FILL IN DATABASE CLUSTER NAME *** "); // TODO: fill in database cluster name for project KnowlEdge

//     let collection = database.collection("flashcards");
//     collection.drop();
//   } catch (error) {
//     console.log(error);
//     return;
//   }
// }

// clearDB(); // Uncomment this line to clear MongoDB collection (flashcards) every time the server restarts


async function initializeDB() {
  try {
    // await client.connect();
    // const database = client.db(" *** FILL IN DATABASE CLUSTER NAME *** "); // TODO: fill in database cluster name for project KnowlEdge

    // let collection = database.collection("flashcards");
    
    if ((await FlashcardDocuments.findOne({id: "Default-1"}) === null) && (await FlashcardDocuments.findOne({id: "Default-2"}) !== null)) {
      await FlashcardDocuments.deleteOne({id: "Default-2"});
    }

    if ((await FlashcardDocuments.findOne({id: "Default-1"}) !== null) && (await FlashcardDocuments.findOne({id: "Default-2"}) === null)) {
      await FlashcardDocuments.deleteOne({id: "Default-1"});
    }

    if ((await FlashcardDocuments.findOne({id: "Default-1"}) === null) && (await FlashcardDocuments.findOne({id: "Default-2"}) === null)) {
      await populateDBFlashcards();
    }
  } catch (error) {
    console.log(error);
    return;
  }
}


async function populateDBFlashcards() {
  try {
    // await client.connect();
    // const database = client.db(" *** FILL IN DATABASE CLUSTER NAME *** "); // TODO: fill in database cluster name for project KnowlEdge
    // const collection = database.collection("flashcards");
    await FlashcardDocuments.insertMany(defaultFlashcards);
  } catch (error) {
    console.log(error);
    return;
  }
}

initializeDB();


// let flashcards = [];

// async function initializeFlashcards() {
//   try {
//     // await client.connect();
//     // const database = client.db(" *** FILL IN DATABASE CLUSTER NAME *** "); // TODO: fill in database cluster name for project KnowlEdge
//     // const collection = database.collection("flashcards");

//     // flashcards = await collection.find({}).toArray();
//   } catch (error) {
//     console.log(error);
//     return;
//   }
// }

// initializeFlashcards();



// /* GET flashcards listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });


router.get('/', async function (req, res, next) {
  try {
    // await client.connect();
    // const database = client.db(" *** FILL IN DATABASE CLUSTER NAME *** "); // TODO: fill in database cluster name for project KnowlEdge
    // const collection = database.collection("flashcards");
    
    const flashcards2 = await FlashcardDocuments.find({}); // NOTE: do not put .toArray() after find

    return res.send(flashcards2);
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: 'flashcards not found' });
  }
});

/* router.get('/:flashcardId', function (req, res, next) {
  const foundFlashcard = flashcards.find(flashcard => flashcard.id === req.params.flashcardId);

  if (!foundFlashcard) return res.status(404).send({ message: 'Flashcard not found' });

  return res.send(foundFlashcard);
}); */


router.delete('/:flashcardId', async function (req, res, next) {
  if (!req.body.flashcardId) {
    return res.status(400).send({ message: 'Request must have an flashcardId!' })
  }

  try {
    // await client.connect();
    // const database = client.db(" *** FILL IN DATABASE CLUSTER NAME *** "); // TODO: fill in database cluster name for project KnowlEdge
    // const collection = database.collection("flashcards");
    await FlashcardDocuments.deleteOne({id: req.body.flashcardId});
  } catch (error) {
    console.log(error);
    return res.status(404).send("flashcards NOT FOUND / flashcard with flashcardID could not be deleted from MongoDB collection");
  }

  // Wrong way of deleting an flashcard:
  // const newFlashcards = flashcards.filter(flashcard => flashcard.id != req.body.flashcardId);
  // if (!newFlashcards) return res.status(404).send({ message: 'filter failed' });

  // Correct way of deleting an flashcard:
  // Referred to StackOverflow Answer #2 at https://stackoverflow.com/questions/73611905/how-to-delete-an-flashcard-in-an-array-that-is-stored-in-the-backend-server
  // flashcards.forEach((flashcard, index) => {
  //   if (flashcard.id === req.body.flashcardId) {
  //     flashcards.splice(index, 1);
  //   }
  // })

  // return res.send(req.body/* req.body.flashcardId */); // TODO: check this!!! - Wrong; Must return empty body

  return res.send(); // res.send() should work, i.e. do not put {} in res.send()
})


router.post('/', async function (req, res, next) {
    if (!req.body.term) { // TODO: check whether this is necessary / optimal to do
    return res.status(400).send({ message: 'Flashcard must have a term!' })
  }
  const flashcard = { id: uuid(), ...req.body };

  try {
    // await client.connect();
    // const database = client.db(" *** FILL IN DATABASE CLUSTER NAME *** "); // TODO: fill in database cluster name for project KnowlEdge
    // const collection = database.collection("flashcards");

    // await FlashcardDocuments.insertOne(flashcard);
    
    const flashcardToServer = new FlashcardDocuments(flashcard);
    flashcardToServer.save();

  } catch (error) {
    console.log(error);
    return res.status(404).send("flashcards NOT FOUND / flashcard could not be added to MongoDB collection");
  }

  // flashcards.push(flashcard);
  return res.send(flashcard);
});


router.patch('/:flashcardId', async function (req, res, next) {
  if (!req.body.flashcardId) {
    return res.status(400).send({ message: 'Request must have an flashcardId!' })
  }
  
  let flashcardUpdated = {};

  if (req.body.hasOwnProperty("term")) { // Referred to StackOverflow Answer #1 at "https://stackoverflow.com/questions/20804163/check-if-a-key-exists-inside-a-json-object"
    try {
      // await client.connect();
      // const database = client.db(" *** FILL IN DATABASE CLUSTER NAME *** "); // TODO: fill in database cluster name for project KnowlEdge
      // const collection = database.collection("flashcards");
      flashcardUpdated = await FlashcardDocuments.updateOne({ id: req.body.flashcardId }, { $set: { "term": req.body.term } });
    } catch (error) {
      console.log(error);
      return res.status(404).send("flashcards NOT FOUND / term could not bee patched in MongoDB collection");
    }
  }

  if (req.body.hasOwnProperty("definition")) { // Referred to StackOverflow Answer #1 at "https://stackoverflow.com/questions/20804163/check-if-a-key-exists-inside-a-json-object"
    try {
      // await client.connect();
      // const database = client.db(" *** FILL IN DATABASE CLUSTER NAME *** "); // TODO: fill in database cluster name for project KnowlEdge
      // const collection = database.collection("flashcards");
      flashcardUpdated = await FlashcardDocuments.updateOne({ id: req.body.flashcardId }, { $set: { "definition": req.body.definition } });
    } catch (error) {
      console.log(error);
      return res.status(404).send("flashcards NOT FOUND / definition could not be patched in MongoDB collection");
    }
  }

  if (req.body.hasOwnProperty("description")) { // Referred to StackOverflow Answer #1 at "https://stackoverflow.com/questions/20804163/check-if-a-key-exists-inside-a-json-object"
    try {
      // await client.connect();
      // const database = client.db(" *** FILL IN DATABASE CLUSTER NAME *** "); // TODO: fill in database cluster name for project KnowlEdge
      // const collection = database.collection("flashcards");
      flashcardUpdated = await FlashcardDocuments.updateOne({ id: req.body.flashcardId }, { $set: { "description": req.body.description } });
    } catch (error) {
      console.log(error);
      return res.status(404).send("flashcards NOT FOUND / description could not bee patched in MongoDB collection");
    }
  }

  if (req.body.hasOwnProperty("imageURL")) { // Referred to StackOverflow Answer #1 at "https://stackoverflow.com/questions/20804163/check-if-a-key-exists-inside-a-json-object"
    try {
      // await client.connect();
      // const database = client.db(" *** FILL IN DATABASE CLUSTER NAME *** "); // TODO: fill in database cluster name for project KnowlEdge
      // const collection = database.collection("flashcards");
      flashcardUpdated = await FlashcardDocuments.updateOne({ id: req.body.flashcardId }, { $set: { "imageURL": req.body.imageURL } });
    } catch (error) {
      console.log(error);
      return res.status(404).send("flashcards NOT FOUND / imageURL could not be patched in MongoDB collection");
    }
  }
  
  return res.send(flashcardUpdated); // TODO: check this!!!
})

module.exports = router;