import BookList from './BookList/BookList';
import booksData from '../books.json';

const books = booksData.books;

export const App = () => {
  return (
    <div>
      <BookList books={books} listTitle="Book List" />
    </div>
  );
};
