import React, { Component, useEffect, useState } from 'react';

import Loader from './Loader/Loader';
import BookList from './BookList/BookList';
import CategoryList from './CategoryList/CategoryList';

import { requestBooksByCategory, requestCategoryList } from 'services/api';

import { StyledBookShelf } from './styled';

export default function App2() {
  // state = {
  //   categoryList: [],
  //   booksList: null,
  //   isLoading: false,
  //   error: null,
  //   selectedCategory: null,
  // };
  const [categoryList, setCategoryList] = useState([]);
  const [booksList, setBooksList] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  // componentDidMount() {
  //   this.fetchCategories();
  // }
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        // this.setState({ isLoading: true });
        setIsLoading(true);
        const catList = await requestCategoryList();
        // this.setState({ categoryList: categoryList });
        setCategoryList(catList);
      } catch (error) {
        // this.setState({ error: error.message });
        setError(error.message);
      } finally {
        // this.setState({ isLoading: false });
        setIsLoading(false);
      }
    };

    fetchCategories();
  }, []); // -> componentDidMount

  // componentDidUpdate(_, prevState) {
  //   if (prevState.selectedCategory !== this.state.selectedCategory) {
  //     this.fetchBooksByCategory(this.state.selectedCategory);
  //   }
  // }

  useEffect(() => {
    if (!selectedCategory) return;

    const fetchBooksByCategory = async category => {
      try {
        setIsLoading(true);
        const bList = await requestBooksByCategory(category);
        setBooksList(bList);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBooksByCategory(selectedCategory);
  }, [selectedCategory]); // -> componentDidUpdate

  const onSelectCategory = category => {
    // this.setState({ selectedCategory: category });
    setSelectedCategory(category);
  };

  return (
    <div>
      {error && (
        <div>
          <p>Opps, some error occured... Error: {error}</p>
        </div>
      )}
      {isLoading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <StyledBookShelf>
          <CategoryList
            className="left"
            onSelectCategory={onSelectCategory}
            categoryList={categoryList}
          />
          <BookList
            className="right"
            listTitle="Books List"
            selectedCategory={selectedCategory}
            books={booksList}
          />
        </StyledBookShelf>
      )}
    </div>
  );
}
