// Reference Material:
// Danya's Sample Code at https://github.com/danyakarras/react-redux-button-counter-2022/blob/main/src/actions/index.js

export const addFlashcard = flashcard => {
  return {
    type: 'ADD_FLASHCARD',
    payload: flashcard
  }
}

export const deleteFlashcard = flashcardID => {
  return {
    type: 'DELETE_FLASHCARD',
    payload: flashcardID
  }
}

export const increment = amount => {
  return {
    type: 'INCREMENT_INDEX',
    payload: amount
  };
};

export const changeTerm = (flashcardID, newTerm) => {
  // console.log(newTerm);
  return {
    type: 'CHANGE_TERM',
    payload: newTerm,
    id: flashcardID
  }
}

export const changeDefinition = (flashcardID, newDefinition) => {
  // console.log(newDefinition);
  return {
    type: 'CHANGE_TERM',
    payload: newDefinition,
    id: flashcardID
  }
}

export const changeDescription = (flashcardID, newDescription) => {
  // console.log(newDescription);
  return {
    type: 'CHANGE_TERM',
    payload: newDescription,
    id: flashcardID
  }
}

export const changeImageURL = (flashcardID, newImageURL) => {
  // console.log(newImageURL);
  return {
    type: 'CHANGE_IMAGEURL',
    payload: newImageURL,
    id: flashcardID
  }
}
