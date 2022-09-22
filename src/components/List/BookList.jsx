import React from 'react';
import './BookList.scss';
import Book from '../book/Book';

export default function BookList() {
  const books = [
    {
      title: 'The Harry Potter Series',
      author: 'J K Rowlings',
    },
    {
      title: 'It Ends With Us',
      author: 'Colleen Hoover',
    },
    {
      title: 'Second Class Citizen',
      author: 'Emecheta Buchi',
    },
  ];

  return (
    <div className="list-container">

      <ul className="book-list">
        {books.map((book) => (
          <Book
            title={book.title}
            key={book.id}
            book={book}
            author={book.author}
          />
        ))}
      </ul>

    </div>
  );
}
