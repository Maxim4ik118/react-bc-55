import PropTypes from 'prop-types';

import Book from 'components/Book/Book';

import { StyledBookList, StyledTitle } from './BookList.styled';
import { useContext } from 'react';
import { BookContext } from 'context/BookContext';

function BookList({
  onOpenModal,
  listTitle = '',
  className = '',
  selectedCategory,
}) {
  const { searchValue, books } = useContext(BookContext);

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchValue.toLowerCase().trim())
  );
  return (
    <div className={className}>
      {listTitle && <StyledTitle>{listTitle}</StyledTitle>}
      {selectedCategory && (
        <StyledTitle>Current category: {selectedCategory}</StyledTitle>
      )}
      <StyledBookList>
        {filteredBooks?.length > 0 &&
          filteredBooks.map(book => {
            return (
              <Book
                key={book.id}
                id={book.id}
                author={book.author}
                url={book.book_image}
                title={book.title}
                description={book.description}
                favourite={book.favourite}
                onOpenModal={onOpenModal}
              />
            );
          })}
      </StyledBookList>
    </div>
  );
}

BookList.propTypes = {
  listTitle: PropTypes.string,
  onOpenModal: PropTypes.func,
  className: PropTypes.string,
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      description: PropTypes.string,
      favourite: PropTypes.bool,
      book_image: PropTypes.string,
    })
  ),
};

export default BookList;
