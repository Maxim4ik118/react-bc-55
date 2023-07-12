import PropTypes from 'prop-types';

import Book from 'components/Book/Book';

import { StyledBookList, StyledTitle } from './BookList.styled';

function BookList({ books, onRemoveBook, onOpenModal, listTitle = '' }) {
  return (
    <>
      {listTitle && <StyledTitle>{listTitle}</StyledTitle>}
      <StyledBookList>
        {books.map(book => {
          return (
            <Book
              key={book.id}
              id={book.id}
              title={book.title}
              author={book.author}
              year={book.year}
              genre={book.genre}
              favourite={book.favourite}
              url={book.cover}
              onRemoveBook={onRemoveBook}
              onOpenModal={onOpenModal}
            />
          );
        })}
      </StyledBookList>
    </>
  );
}

BookList.propTypes = {
  listTitle: PropTypes.string,
  onRemoveBook: PropTypes.func.isRequired,
  onOpenModal: PropTypes.func.isRequired,
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
