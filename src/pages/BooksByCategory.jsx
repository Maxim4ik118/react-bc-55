import React, { useEffect, useState } from 'react';
import { Link, Route, Routes, useParams } from 'react-router-dom';

import BookList from 'components/BookList/BookList';
import Loader from 'components/Loader/Loader';

import TopBooks from './TopBooks';

import { requestBooksByCategory } from 'services/api';

const BooksByCategory = () => {
  const [booksList, setBooksList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { categoryName } = useParams();

  useEffect(() => {
    if (!categoryName) return;

    const fetchBooksByCategory = async () => {
      try {
        setIsLoading(true);
        const bList = await requestBooksByCategory(categoryName);
        setBooksList(bList);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBooksByCategory();
  }, [categoryName]); // -> componentDidUpdate + componentDidMount

  return (
    <div>
      <h1>BooksByCategory</h1>
      {error && (
        <div>
          <p>Opps, some error occured... Error: {error}</p>
        </div>
      )}
      {isLoading && (
        <div>
          <Loader />
        </div>
      )}
      <BookList
        className="right"
        listTitle="Books List"
        // selectedCategory={selectedCategory}
        books={booksList}
      />

      <div>
        <Link to="top-books">Top Books</Link>
        <Routes>
          <Route path="top-books" element={<TopBooks />} />
        </Routes>
      </div>
    </div>
  );
};

export default BooksByCategory;
