import { Component } from 'react';
import { nanoid } from 'nanoid';
import BookList from './BookList/BookList';
import Button from './Button/Button';
import Container from './Container/Container';

import booksData from '../data/books.json';
import SearchBar from './SearchBar/SearchBar';
import BookForm from './BookForm/BookForm';

// import css from './App.module.css';

export class App extends Component {
  state = {
    books: booksData.books,
    searchValue: '',
  };

  onRemoveBook = bookId => {
    this.setState({
      books: this.state.books.filter(book => book.id !== bookId),
    });
  };

  onAddBook = bookData => {
    const book = { id: nanoid(), ...bookData };

    this.setState({ books: [book, ...this.state.books] });
    // this.setState(prevState => ({ books: [book, ...prevState.books] }));
  };

  onFilter = filterTerm => {
    this.setState({ searchValue: filterTerm });
  };

  render() {
    const filteredBooks = this.state.books.filter(book =>
      book.title
        .toLowerCase()
        .includes(this.state.searchValue.toLowerCase().trim())
    );

    return (
      <div>
        <Container>
          <BookForm onAddBook={this.onAddBook} />
        </Container>
        <Container>
          <SearchBar
            searchValue={this.state.searchValue}
            onFilter={this.onFilter}
            title="Search Book"
          />
        </Container>
        <Container>
          <BookList
            onRemoveBook={this.onRemoveBook}
            books={filteredBooks}
            listTitle="Book List"
          />
        </Container>
      </div>
    );
  }
}
