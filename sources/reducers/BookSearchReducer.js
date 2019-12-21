import {
    FETCH_BOOK_REQUEST,
    FETCH_BOOK_SUCCESS,
    FETCH_BOOK_FAILURE,
    FETCH_MORE_BOOK_REQUEST,
    SET_KEYWORD,
} from '../actions/BookSearchAction';

const initialState = {
    books: [],
    isFetching: false,
    isFetchingMore: false,
    errorMessage: '',
    keyword: '',
    page: 1,
}

const bookSearchReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_BOOK_REQUEST:
            return { 
                ...state, 
                isFetching: true, 
                books: [], 
                page: action.page + 1 
            };
        case FETCH_MORE_BOOK_REQUEST:
            return { 
                ...state, 
                isFetchingMore: true, 
                page: action.page + 1 
            };
        case FETCH_BOOK_SUCCESS:
            return { 
                ...state, 
                isFetching: false, 
                isFetchingMore: false, 
                books: [...state.books, ...action.payload] 
            };
        case FETCH_BOOK_FAILURE:
            return { 
                ...state, 
                isFetching: false, 
                isFetchingMore: false, 
                errorMessage: action.payload 
            };
        case SET_KEYWORD:
            return { 
                ...state, 
                keyword: action.keyword 
            }
        default:
            return state;
    }
}

export default bookSearchReducer;