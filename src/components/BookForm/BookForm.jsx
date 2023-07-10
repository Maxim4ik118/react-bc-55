import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from 'components/Button/Button';

/*
1. Розмітити саму форму тегами.
2. Створити стейт з полями під кожен інпут.
3. Всім інпутам задати значення аттрибуту name 
   відповідно до поля в стейті з яким інпут буде зв'язаний.
4. Зв'язати (value)наших інпутів з відповідними полями в стейті.
5. Створити універсальний обробник для інпутів
*/

const INITIAL_STATE = {
  title: '',
  author: '',
  year: '',
  genre: '',
  cover:
    'data:image/jpeg;base64,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',
  favourite: false,
};

export default class BookForm extends Component {
  state = { ...INITIAL_STATE };

  onInputsChange = event => {
    const value = event.target.value;
    const fieldName = event.target.name;
    const checked = event.target.checked;
    const type = event.target.type;

    if (type === 'checkbox') {
      this.setState({ [fieldName]: checked });
    } else {
      this.setState({ [fieldName]: value });
    }

    // if (fieldName === 'title') {
    //   this.setState({ title: value });
    // }
    // if (fieldName === 'author') {
    //   this.setState({ author: value });
    // }
    // if (fieldName === 'year') {
    //   this.setState({ year: value });
    // }
    // if (fieldName === 'genre') {
    //   this.setState({ genre: value });
    // }
    // if (fieldName === 'favourite') {
    //   this.setState({ favourite: checked });
    // }
  };

  handleSumbit = event => {
    event.preventDefault();

    const bookData = {
      ...this.state,
      year: Number.parseInt(this.state.year),
    };

    this.props.onAddBook(bookData);

    // reset
    event.target.reset()
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    return (
      <form onSubmit={this.handleSumbit}>
        <label>
          <span>Title:</span>
          <input
            value={this.state.title}
            onChange={this.onInputsChange}
            type="text"
            name="title"
            required
          />
        </label>
        <label>
          <span>Author:</span>
          <input
            value={this.state.author}
            onChange={this.onInputsChange}
            type="text"
            name="author"
            required
          />
        </label>
        <label>
          <span>Year:</span>
          <input
            value={this.state.year}
            onChange={this.onInputsChange}
            type="number"
            name="year"
            required
          />
        </label>
        <label>
          <span>Genre:</span>
          <input
            value={this.state.genre}
            onChange={this.onInputsChange}
            type="text"
            name="genre"
            required
          />
        </label>
        <label>
          <span>Favourite:</span>
          <input
            checked={this.state.favourite}
            onChange={this.onInputsChange}
            type="checkbox"
            name="favourite"
          />
        </label>
        <Button type="submit">&oplus; Add Book</Button>
      </form>
    );
  }
}

BookForm.propTypes = {
  onAddBook: PropTypes.func.isRequired,
};
