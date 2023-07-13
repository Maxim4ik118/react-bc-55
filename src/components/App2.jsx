import React, { Component } from 'react';
import { requestBooksByCategory, requestCategoryList } from 'services/api';
import Loader from './Loader/Loader';
import BookList from './BookList/BookList';
import { StyledBookShelf } from './styled';
import CategoryList from './CategoryList/CategoryList';

export default class App2 extends Component {
  state = {
    categoryList: [],
    booksList: null,
    isLoading: false,
    error: null,
    selectedCategory: null,
  };

  componentDidMount() {
    this.fetchCategories();
  }

  componentDidUpdate(_, prevState) {
    if (prevState.selectedCategory !== this.state.selectedCategory) {
      this.fetchBooksByCategory(this.state.selectedCategory);
    }
  }

  onSelectCategory = category => {
    this.setState({ selectedCategory: category });
  };

  fetchCategories = async () => {
    try {
      this.setState({ isLoading: true });
      const categoryList = await requestCategoryList();
      this.setState({ categoryList });
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  fetchBooksByCategory = async category => {
    try {
      this.setState({ isLoading: true });
      const booksList = await requestBooksByCategory(category);
      this.setState({ booksList });
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  // Array.isArray(this.state.categoryList)
  render() {
    const showLoader = this.state.isLoading;
    const showError = this.state.error;
    return (
      <div>
        {showError && (
          <div>
            <p>Opps, some error occured... Error: {this.state.error}</p>
          </div>
        )}
        {showLoader ? (
          <div>
            <Loader />
          </div>
        ) : (
          <StyledBookShelf>
            <CategoryList
              className="left"
              onSelectCategory={this.onSelectCategory}
              categoryList={this.state.categoryList}
            />
            <BookList
              className="right"
              listTitle="Books List"
              selectedCategory={this.state.selectedCategory}
              books={this.state.booksList}
            />
          </StyledBookShelf>
        )}
      </div>
    );
  }
}
