import React from 'react';
import PropTypes from 'prop-types';

import Book from 'components/Book/Book';

function BookList({ books, listTitle = '' }) {
  return (
    <>
      {listTitle && <h2>{listTitle}</h2>}
      <ul className="book-list">
        {books.map(book => {
          return (
            <Book
              key={book.id}
              title={book.title}
              author={book.author}
               year={book.year}
              genre={book.genre}
              favourite={book.favourite}
              url={book.cover}
            />
          );
        })}
      </ul>
    </>
  );
}

BookList.propTypes = {
  listTitle: PropTypes.string,
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      year: PropTypes.number.isRequired,
      genre: PropTypes.string.isRequired,
      favourite: PropTypes.bool,
      cover: PropTypes.string,
    })
  ).isRequired,
};

export default BookList;
