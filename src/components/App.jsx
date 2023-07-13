import { Component } from 'react';
import { nanoid } from 'nanoid';

import BookList from './BookList/BookList';
import Button from './Button/Button';
import Container from './Container/Container';
import SearchBar from './SearchBar/SearchBar';
import BookForm from './BookForm/BookForm';
import Modal from './Modal/Modal';

import booksData from '../data/books.json';

// import css from './App.module.css';

/*
У класових компонентів є методи життєвого циклу
(зарезервовані фукнції, які запускаються на певному етапі
  життя компонента).

  1. componentDidMount ->  Метод життєвого циклу запускається один 
    раз після першого рендеру компоненти
    
    1. Витягнути дані з localStorage та встановити їх в стейт.
    2. Надіслати HTTP запити, одразу після того, як компонент з'явився.
    3. Для того, щоб вішати глобальні слухачі подій window.addEventListener
    4. Для того, щоб встановлювати таймери, або інтервали

  2. componentWillUnmount ->  Метод життєвого циклу запускається один 
    раз перед тим, як компонент буде повністю видалений з розмітки
    
    1. Відхиляти HTTP запити.
    2. Для того, щоб прибирати глобальні слухачі подій window.removeEventListener
    3. Очищувати таймери та інтервали clearInterval, clearTimeout

  3. componentDidUpdate ->  Метод життєвого циклу запускається кожен раз
    після оновлення компоненти(зміна пропсів, або стейту)
    
    1. Надсилаються HTTP запити.
    2. Оновлюються дані localStorage
    3. Відслідкувати яке конкретно поле в стейті змінилося

*/

export class App extends Component {
  state = {
    books: [],
    currentPage: 1,
    searchValue: '',
    modal: { isOpen: false, modalData: null },
  };

  componentDidMount() {
    const stringifiedBooks = localStorage.getItem('books');
    const parsedBooks = JSON.parse(stringifiedBooks) ?? [];

    this.setState({ books: parsedBooks });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchValue !== this.state.searchValue) {
      console.log('Пошукове значення змінилося');
    }
    if (prevState.books.length !== this.state.books.length) {
      const stringifiedBooks = JSON.stringify(this.state.books);
      localStorage.setItem('books', stringifiedBooks);
    }
  }

  onOpenModal = data =>
    this.setState({ modal: { isOpen: true, modalData: data } });

  onCloseModal = () =>
    this.setState({ modal: { isOpen: false, modalData: null } });

  onRemoveBook = bookId => {
    this.setState(prevState => ({
      books: prevState.books.filter(book => book.id !== bookId),
    }));

    // this.setState({ currentPage: 1 + 1 });
    // this.setState({ currentPage:  1 + 1 });
    // this.setState({ currentPage: 1 + 1 });
    // currentPage -> 2

    // this.setState((prevState) => ({ currentPage: 1 + 1 }));
    // this.setState((prevState) => ({ currentPage: 2 + 1 }));
    // this.setState((prevState) => ({ currentPage: 3 + 1 }));
    // currentPage -> 4
  };

  onAddBook = bookData => {
    const book = { id: nanoid(), ...bookData };

    this.setState(prevState => ({ books: [book, ...prevState.books] }));
    // this.setState({ books: [book, ...this.state.books] });
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
            onOpenModal={this.onOpenModal}
            books={filteredBooks}
            listTitle="Book List"
          />
        </Container>

        {this.state.modal.isOpen && (
          <Modal
            onCloseModal={this.onCloseModal}
            modalData={this.state.modal.modalData}
          />
        )}
      </div>
    );
  }
}
