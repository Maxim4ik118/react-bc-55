import { Component } from 'react';
import BookList from './BookList/BookList';
import Button from './Button/Button';
import Container from './Container/Container';

import booksData from '../data/books.json';

// import css from './App.module.css';

export class App extends Component {
  state = {
    books: booksData.books,
    visibleDetails: false,
  };

  onRemoveBook = bookId => {
    // bookId = 2
    // [{id: 1}, {id: 2}, {id: 3}]
    // [{id: 1}, {id: 3}]

    this.setState({
      books: this.state.books.filter((book) => book.id !== bookId)
    });
  };

  onToggleDetails = () => {
    this.setState({
      visibleDetails: !this.state.visibleDetails,
    });
  };

  render() {
    return (
      <div>
        {/* <Button variant="none">Click to magiiiic</Button>
          <Button variant="no-border">Click to magiiiic</Button>
          <Button variant="primary">Click to magiiiic</Button>
           */}
        <Button variant="secondary" onClick={this.onToggleDetails}>
          Click to magiiiic
        </Button>
        {this.state.visibleDetails && <p>Some details</p>}
        <Container>
          <BookList
            onRemoveBook={this.onRemoveBook}
            books={this.state.books}
            listTitle="Book List"
          />
        </Container>
      </div>
    );
  }
}
