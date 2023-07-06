// Reference Materials:
// Stephanie's Sample Code at https://github.com/svmah/cs455-express-demo/blob/add-server/client/src/redux/users/actionTypes.js

export const actionTypes = {
    GET_FLASHCARDS: 'flashcards/getFlashcards', // GET request
    ADD_FLASHCARD: 'flashcards/addFlashcard', // POST request
    ADD_ADDITIONALINFO: 'flashcards/id/addAdditionalInfo', // PUT request
    PATCH_QUANTITY: 'flashcards/id/patchQuantity', // PATCH request
    PATCH_TERM: 'flashcards/id/patchTerm', // PATCH request
    PATCH_DEFINITION: 'flashcards/id/patchDefinition', // PATCH request
    PATCH_DESCRIPTION: 'flashcards/id/patchDescription', // PATCH request
    PATCH_IMAGEURL: 'flashcards/id/patchImageURL', // PATCH request
    DELETE_FLASHCARD: 'flashcards/id/deleteFlashcard' // DELETE request
};