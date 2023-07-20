import React, { useEffect, useState } from 'react';

import CategoryList from 'components/CategoryList/CategoryList';
import Loader from 'components/Loader/Loader';

import { requestCategoryList } from 'services/api';

import { StyledBookShelf } from 'components/styled';


const Categories = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setIsLoading(true);
        const catList = await requestCategoryList();
        setCategoryList(catList);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategories();
  }, []); // -> componentDidMount

  return (
    <div>
      <h1>Categories</h1>
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
            categoryList={categoryList}
          />
        </StyledBookShelf>
      )}
    </div>
  );
};

export default Categories;
