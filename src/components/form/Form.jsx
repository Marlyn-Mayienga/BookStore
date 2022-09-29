import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../../redux/books/books';
import './Form.scss';

export default function Form() {
  const [bookTitle, setBookTitle] = useState('');
  const [bookAuthor, setBookAuthor] = useState('');
  const titleInput = useRef();
  const authorInput = useRef();

  const books = useSelector((state) => state.books);

  const handleTitle = (e) => {
    setBookTitle(e.target.value);
  };
  const handleAuthor = (e) => {
    setBookAuthor(e.target.value);
  };

  const dispatch = useDispatch();

  return (
    <div className="form-container">
      <h2>ADD A NEW BOOK</h2>
      <form
        onSubmit={(e) => {
          dispatch(addBook(
            {
              item_id: `item-${books.length + 1}`,
              title: bookTitle,
              author: bookAuthor,
              id: uuidv4(),
              category: 'Fiction',
            },
          ));
          titleInput.value = '';
          authorInput.value = '';
          e.preventDefault();
        }}
      >

        <input
          ref={titleInput}
          type="text"
          className="title-input"
          placeholder="Book title"
          value={bookTitle}
          onChange={(e) => handleTitle(e)}
          required
        />

        <input
          ref={authorInput}
          type="text"
          className="author-input"
          placeholder="Book author"
          value={bookAuthor}
          onChange={(e) => handleAuthor(e)}
        />
        <button className="add-book" type="submit">ADD BOOK</button>
      </form>
    </div>
  );
}
