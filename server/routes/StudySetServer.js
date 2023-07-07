// Reference Materials:
// Stephanie's Sample Code at https://github.com/svmah/cs455-express-demo/blob/add-server/server/routes/users.js

// StackOverflow Answer #2 at https://stackoverflow.com/questions/73611905/how-to-delete-an-flashcard-in-an-array-that-is-stored-in-the-backend-server
// StackOverflow Answer #1 at "https://stackoverflow.com/questions/20804163/check-if-a-key-exists-inside-a-json-object"


var cors = require('cors');

var express = require('express');
var router = express.Router();

const { v4: uuid } = require('uuid');


const flashcards = [
    {
      id: uuid(),
      term: 'vin',
      definition: 'wine',
      description:
        'Coffret Découverte 3 Bouteilles - Saint Emilion Grand Cru & Castillon Côtes de Bordeaux',
      imageURL: 'https://m.media-amazon.com/images/I/61x8QBBsNAS._AC_SL1500_.jpg',
    },
    {
      id: uuid(),
      term: 'fromage',
      definition: 'cheese',
      description:
        'DLC minimum garantie: 7 jours - Le Chaource est un fromage naturel fabriqué à partir de lait de vache entier selon des méthodes traditionnelles. CHAOURCE BOITE 250G Pour votre santé, mangez au moins cinq fruits et légumes par jour. FROMAGERIE LINCET 15 RUE DE LA QUENNEVELLE - 89 100 SALIGNY',
      imageURL: 'https://m.media-amazon.com/images/I/81c1PbM-LbL._AC_SL1500_.jpg',
    },
  ];



// /* GET flashcards listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });


router.get('/', function (req, res, next) {
  // console.log("router.get(...) is called in flashcard.js");
  // console.log(flashcards);
  return res.send(flashcards);
});

/* router.get('/:flashcardId', function (req, res, next) {
  const foundFlashcard = flashcards.find(flashcard => flashcard.id === req.params.flashcardId);

  if (!foundFlashcard) return res.status(404).send({ message: 'Flashcard not found' });

  return res.send(foundFlashcard);
}); */


router.delete('/:flashcardId', function (req, res, next) {
  if (!req.body.flashcardId) {
    return res.status(400).send({ message: 'Request must have an flashcardId!' })
  }

  // Wrong way of deleting an flashcard:
  // const newFlashcards = flashcards.filter(flashcard => flashcard.id != req.body.flashcardId);
  // if (!newFlashcards) return res.status(404).send({ message: 'filter failed' });

  // Correct way of deleting an flashcard:
  // Referred to StackOverflow Answer #2 at https://stackoverflow.com/questions/73611905/how-to-delete-an-flashcard-in-an-array-that-is-stored-in-the-backend-server
  flashcards.forEach((flashcard, index) => {
    if (flashcard.id === req.body.flashcardId) {
      flashcards.splice(index, 1);
    }
  })

  // return res.send(req.body/* req.body.flashcardId */); // TODO: check this!!! - Wrong; Must return empty body

  return res.send(); // res.send() should work, i.e. do not put {} in res.send()
})


router.post('/', function (req, res, next) {
  // console.log("post function called in items.js");

  // console.log(req.body);

  if (!req.body.term) { // TODO: check whether this is necessary / optimal to do
    return res.status(400).send({ message: 'Flashcard must have a term!' })
  }
  const flashcard = { id: uuid(), ...req.body };
  flashcards.push(flashcard);
  return res.send(flashcard);
});


router.patch('/:flashcardId', function (req, res, next) {
  if (!req.body.flashcardId) {
    return res.status(400).send({ message: 'Request must have an flashcardId!' })
  }
  
  let newFlashcard = {};

  // Referred to Tutorial at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
  flashcards.forEach((flashcard, index) => {
    if (flashcard.id === req.body.flashcardId) {
      newFlashcard = structuredClone(flashcard); // Needs to structureClone the flashcard

      if (req.body.hasOwnProperty("term")) { // Referred to StackOverflow Answer #1 at "https://stackoverflow.com/questions/20804163/check-if-a-key-exists-inside-a-json-object"
        newFlashcard.term = req.body.term;
      }
      if (req.body.hasOwnProperty("definition")) { // Referred to StackOverflow Answer #1 at "https://stackoverflow.com/questions/20804163/check-if-a-key-exists-inside-a-json-object"
        newFlashcard.definition = req.body.definition;
      }
      if (req.body.hasOwnProperty("description")) { // Referred to StackOverflow Answer #1 at "https://stackoverflow.com/questions/20804163/check-if-a-key-exists-inside-a-json-object"
        newFlashcard.description = req.body.description;
      }
      if (req.body.hasOwnProperty("imageURL")) { // Referred to StackOverflow Answer #1 at "https://stackoverflow.com/questions/20804163/check-if-a-key-exists-inside-a-json-object"
        newFlashcard.imageURL = req.body.imageURL;
      }
      flashcards.splice(index, 1, newFlashcard);
    }
  })
  
  return res.send(newFlashcard); // TODO: check this!!!
})

module.exports = router;