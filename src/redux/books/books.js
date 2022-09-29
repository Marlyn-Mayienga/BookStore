const API_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';

const GET_BOOKS = 'bookstore/books/GET_BOOKS';
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const initialState = [
  {
    title: 'Harry Potter Series',
    author: 'J K Rowlings',
    id: 1,
  },
  {
    title: 'It All Ends With Us',
    author: 'Colleen Hoover',
    id: 2,
  },
  {
    title: 'Second Class Citizen',
    author: 'Emecheta Buchi ',
    id: 3,
  },
];

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
