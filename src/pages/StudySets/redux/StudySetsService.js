// Reference Materials:
// Stephanie's Sample Code at https://github.com/svmah/cs455-express-demo/blob/add-server/client/src/redux/users/service.js

const addFlashcard = async (flashcard) => { // POST request
    // console.log("addFlashcard called in service.js");
    // console.log(flashcard);
    const response = await fetch('http://localhost:3005/studysets/flashcards', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(flashcard)
    });

    // console.log(response);

    const data = await response.json();

    // console.log(data);

    if (!response.ok) {
        const errorMsg = data?.message;
        // console.log("ERROR: " + errorMsg);
        throw new Error(errorMsg)
    }

    // console.log(data);

    return data;
};

const deleteFlashcard = async (flashcardId /* flashcard */) => { // DELETE request
    // console.log("flashcardId @ service.js : " + flashcardId); // TODO: check why this line is not printed in the console (?) for some reason
    const flashcardIdJson = {flashcardId};
    // console.log("flashcardIdJson in service.js : " + JSON.stringify(flashcardIdJson));
    const response = await fetch('http://localhost:3005/studysets/flashcards/id', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(flashcardIdJson) /* JSON.stringify(flashcard) */
    })

    // console.log(response);

    // const data = await response.json(); // Uncaught runtime errors: ERROR JSON.parse: unexpected end of data at line 1 column 1 of the JSON data
    
    // console.log("data in service.js : " + data);

    if (!response.ok) {
        const data = await response.json(); // added
        const errorMsg = data?.message;
        throw new Error(errorMsg)
    }

    return response/* data */; // TODO: check if it is correct to return response
}

const getFlashcards = async () => { // GET request
    const response = await fetch('http://localhost:3005/studysets/flashcards', {
        method: 'GET'
    });
    return response.json();
};

const patchGeneral = async (bodyJSON) => { // PATCH request
    const response = await fetch('http://localhost:3005/studysets/flashcards/id', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyJSON)
    });

    const data = await response.json();
    if (!response.ok) {
        const errorMsg = data?.message;
        throw new Error(errorMsg)
    }

    return data;
}

export default {
    addFlashcard,
    getFlashcards,
    patchGeneral,
    deleteFlashcard,
};