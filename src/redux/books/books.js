const API_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';

const GET_BOOKS = 'bookstore/books/GET_BOOKS';
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const initialState = [];

// Reducer

export default function booksReducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.payload);
    case GET_BOOKS:
      return action.payload;
    default:
      return state;
  }
}
// Action creators
function getBooks() {
  return async (dispatch) => {
    const response = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/rkZUelgZDiisQq3YPSnE/books');
    const data = await response.json();
    const books = [];
    Object.keys(data).forEach((e) => {
      books.push({ ...data[e][0], item_id: e });
    });
    dispatch({
      type: GET_BOOKS,
      payload: books,
    });
  };
}

const addBook = (book) => async (dispatch) => {
  await fetch(`${API_URL}/apps/rkZUelgZDiisQq3YPSnE/books/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  });

  dispatch({
    type: ADD_BOOK,
    payload: book,
  });
};

// export const getAPI = () => (dispatch) => fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/rkZUelgZDiisQq3YPSnE/books')
//   .then((response) => response.json())
//   .then((book) => {
//     const addBook = Object.keys(book).map((key) => ({
//       item_id: key,
//       title: book[key][0].title,
//       category: book[key][0].category,
//     }));
//     addBook.forEach((book) => {
//       dispatch({ type: ADD_BOOK, playload: item });
//     });
//   });

const removeBook = (id) => async (dispatch) => {
  await fetch(`${API_URL}/apps/rkZUelgZDiisQq3YPSnE/books/${id}`, {
    method: 'DELETE',
  });
  dispatch({
    type: REMOVE_BOOK,
    payload: id,
  });
};
export { addBook, removeBook, getBooks };
