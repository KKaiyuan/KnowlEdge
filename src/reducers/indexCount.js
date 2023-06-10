// Danya's Sample Code at https://github.com/danyakarras/react-redux-button-counter-2022/blob/main/src/reducers/buttonCount.js

// flashcard index starts at 1
const indexCount = (index = 2 /* Initially, there are two flashcards by default (i.e. SAMPLE_FLASHCARDS) */, action) => {
	switch(action.type) {
        case 'INCREMENT_INDEX':
            return index + action.payload;
		default:
			return index;
	}
};

export default indexCount;