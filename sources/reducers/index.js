import { combineReducers } from 'redux';
import bookSearchReducer from './BookSearchReducer';
import bookDetailReducer from './BookDetailReducer';

const rootReducer = combineReducers({
    bookSearchReducer,
    bookDetailReducer,
});

export default rootReducer;