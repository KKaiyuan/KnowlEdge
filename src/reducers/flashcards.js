// Reference Material:
// Danya's Sample Code at https://github.com/danyakarras/react-redux-button-counter-2022/blob/main/src/reducers/buttonCount.js
// Stephanie's Slide at https://docs.google.com/presentation/d/1E3wPQHLgIr4a1p2ZiKexwzFBxX3ZqUr8/edit#slide=id.p22

const flashcards = (flashcards = SAMPLE_FLASHCARDS, action) => {
  const newFlashcards = structuredClone(flashcards);
  switch (action.type) {
    case 'ADD_FLASHCARD':
      newFlashcards.push(action.payload);
      return newFlashcards;
    case 'DELETE_FLASHCARD':
      // console.log(action.payload);
      const cards = newFlashcards.filter(
        (card) => Number(card.id) !== Number(action.payload)
      );
      // cards.map(card => console.log(card.id));
      return cards;
    case 'CHANGE_TERM':
      const cards1 = newFlashcards.filter(
        (card) => Number(card.id) === Number(action.id)
      );
      const newCard1 = cards1.at(0);
      console.log(newCard1.term);
      newCard1.term = action.payload;
      console.log(newCard1.term);
      const cards2 = newFlashcards.map((card) =>
        Number(card.id) === Number(action.id) ? newCard1 : card
      );
      cards2.map((card) => console.log(card.term));
      return cards2;
    case 'CHANGE_DEFINITION':
      const cards3 = newFlashcards.filter(
        (card) => Number(card.id) === Number(action.id)
      );
      const newCard2 = cards3.at(0);
      console.log(newCard2.definition);
      newCard2.definition = action.payload;
      console.log(newCard2.definition);
      const cards4 = newFlashcards.map((card) =>
        Number(card.id) === Number(action.id) ? newCard2 : card
      );
      cards4.map((card) => console.log(card.definition));
      return cards4;
    case 'CHANGE_DESCRIPTION':
      const cards5 = newFlashcards.filter(
        (card) => Number(card.id) === Number(action.id)
      );
      const newCard3 = cards5.at(0);
      console.log(newCard3.description);
      newCard3.description = action.payload;
      console.log(newCard3.description);
      const cards6 = newFlashcards.map((card) =>
        Number(card.id) === Number(action.id) ? newCard3 : card
      );
      cards6.map((card) => console.log(card.description));
      return cards6;
    case 'CHANGE_IMAGEURL':
      const cards7 = newFlashcards.filter(
        (card) => Number(card.id) === Number(action.id)
      );
      const newCard4 = cards7.at(0);
      console.log(newCard4.imageURL);
      newCard4.imageURL = action.payload;
      console.log(newCard4.imageURL);
      const cards8 = newFlashcards.map((card) =>
        Number(card.id) === Number(action.id) ? newCard4 : card
      );
      cards8.map((card) => console.log(card.imageURL));
      return cards8;

    default:
      return flashcards;
  }
};

const SAMPLE_FLASHCARDS = [
  {
    id: 1,
    term: 'vin',
    definition: 'wine',
    description:
      'Coffret Découverte 3 Bouteilles - Saint Emilion Grand Cru & Castillon Côtes de Bordeaux',
    imageURL: 'https://m.media-amazon.com/images/I/61x8QBBsNAS._AC_SL1500_.jpg',
  },
  {
    id: 2,
    term: 'fromage',
    definition: 'cheese',
    description:
      'DLC minimum garantie: 7 jours - Le Chaource est un fromage naturel fabriqué à partir de lait de vache entier selon des méthodes traditionnelles. CHAOURCE BOITE 250G Pour votre santé, mangez au moins cinq fruits et légumes par jour. FROMAGERIE LINCET 15 RUE DE LA QUENNEVELLE - 89 100 SALIGNY',
    imageURL: 'https://m.media-amazon.com/images/I/81c1PbM-LbL._AC_SL1500_.jpg',
  },
];

export default flashcards;
