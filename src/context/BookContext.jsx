import { nanoid } from 'nanoid';
import { createContext, useEffect, useState } from 'react';

export const BookContext = createContext();

export const BookContextProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState('');
  const [books, setBooks] = useState(() => {
    const stringifiedBooks = localStorage.getItem('books');
    const parsedBooks = JSON.parse(stringifiedBooks) ?? [];

    return parsedBooks;
  });

  useEffect(() => {
    const stringifiedBooks = JSON.stringify(books);
    localStorage.setItem('books', stringifiedBooks);
  }, [books]);
  
  const onRemoveBook = bookId => {
    setBooks(prevState => prevState.books.filter(book => book.id !== bookId));
  };

  const onAddBook = bookData => {
    const book = { id: nanoid(), ...bookData };

    setBooks(prevState => [book, ...prevState]);
  };

  const onFilter = filterTerm => {
    setSearchValue(filterTerm);
  };

  return (
    <BookContext.Provider
      value={{
        searchValue,
        books,
        setSearchValue,
        onRemoveBook,
        onAddBook,
        onFilter
      }}
    >
      {children}
    </BookContext.Provider>
  );
};
