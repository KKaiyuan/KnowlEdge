// Reference Material:
// Danya's Sample Code at https://github.com/danyakarras/react-redux-button-counter-2022/blob/main/src/reducers/index.js

import { combineReducers } from 'redux';
import flashcards from './flashcards';
import indexCount from './indexCount';

const rootReducer = combineReducers({
    flashcards,
    indexCount,
});

export default rootReducer;