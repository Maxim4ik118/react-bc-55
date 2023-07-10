import React, { Component } from 'react';
import PropTypes from 'prop-types';

/*  1. Прив'язати значення атрибуту value у input до стейту.
    2. Створили обробник подій, яки отримує значення вводу 
    користувача і записує його в стейт(setState).
    3. Стейт змінився і інтерфейс перемальовується, щоб відобразити 
       актуальний стейт.
 */

export default class SearchBar extends Component {
  handleInputChange = event => {
    this.props.onFilter(event.target.value);
  };

  render() {
    return (
      <section>
        <h2>{this.props.title}</h2>
        <input
          onChange={this.handleInputChange}
          value={this.props.searchValue}
          type="text"
          name="search"
        />
      </section>
    );
  }
}

SearchBar.propTypes = {
  onFilter: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
};
