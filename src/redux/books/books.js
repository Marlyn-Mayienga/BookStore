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
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
}
// Action creators
const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});
const removeBook = (id) => ({
  type: REMOVE_BOOK,
  payload: id,
});
export { addBook, removeBook };
