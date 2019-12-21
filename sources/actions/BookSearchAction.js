import { getFormedBody } from '../modules/HttpFormMaker';
import { parseBookDatas, parseBookImage } from '../modules/Crawler';

// action types
export const FETCH_BOOK_REQUEST = 'FETCH_BOOK_REQUEST';
export const FETCH_BOOK_SUCCESS = 'FETCH_BOOK_SUCCESS';
export const FETCH_BOOK_FAILURE = 'FETCH_BOOK_FAILURE';
export const FETCH_MORE_BOOK_REQUEST = 'FETCH_MORE_BOOK_REQUEST';
export const SET_KEYWORD = 'SET_KEYWORD';

// action creators
export const fetchingBooksRequest = (page) => ({
    type: FETCH_BOOK_REQUEST,
    page,
})
export const fetchingBooksSucccess = (data) => ({
    type: FETCH_BOOK_SUCCESS,
    payload: data,
})
export const fetchingBooksFailure = (error) => ({
    type: FETCH_BOOK_FAILURE,
    payload: error,
})
export const fetchingMoreBooksRequest = (page) => ({
    type: FETCH_MORE_BOOK_REQUEST,
    page,
})
export const setKeyword = (keyword) => ({
    type: SET_KEYWORD,
    keyword
})

export const fetchBooks = (keyword, page) => {
    return async dispatch => {
        (page === 1)
        ? dispatch(fetchingBooksRequest(page))
        : dispatch(fetchingMoreBooksRequest(page))
        
        try {
            const pageSize = 5;
            const body = getFormedBody({ sid:1, mf:'true', q:keyword, page:page, pageSize: pageSize });
            let response = await fetch('http://mlib.sejong.ac.kr/search/Search.Result.List.axa?', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: body,
            });
            let curID = (page - 1) * pageSize;
            let html = await response.text();
            let data = await parseBookDatas(html, curID);

            for(let i=0; i<data.length; i++) {
                let response = await fetch(data[i].detailUrl);
                let html = await response.text();
                data[i] = {...data[i], image: parseBookImage(html)}
            }
            dispatch(fetchingBooksSucccess(data));
        } catch(error) {
            dispatch(fetchingBooksFailure(error));
        }
    }
}
