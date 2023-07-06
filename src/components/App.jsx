import BookList from './BookList/BookList';
import booksData from '../books.json';
import Button from './Button/Button';
import Container from './Container/Container';

// import css from './App.module.css';

const books = booksData.books;

export const App = () => {
  return (
    <div>
      <Container>
        <Button>
          <b>Delete</b> &times;
        </Button>
        <Button>
          <b>Delete</b> &times;
        </Button>
      </Container>

      <Container>
        <BookList books={books} listTitle="Book List" />
      </Container>
    </div>
  );
};
