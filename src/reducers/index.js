// Code inspired from Workshop 2's react-redux-button-counter-2022 repo: https://github.com/danyakarras/react-redux-button-counter-2022
import { combineReducers } from 'redux';
import  ReducerAnnouncementPage from './ReducerAnnouncementPage';
import studentProfileReducer from './studentProfileReducer';

const rootReducer = combineReducers({
    ReducerAnnouncementPage,
    studentProfileReducer

    
});

export default rootReducer;