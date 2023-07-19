import Button from 'components/Button/Button';
import React from 'react';
import { Link } from 'react-router-dom';

const CategoryList = ({ categoryList, className = '' }) => {
  const showCategoryList =
    Array.isArray(categoryList) && categoryList.length > 0;

  return (
    <div className={className}>
      <h2>Category List</h2>
      <ul>
        {showCategoryList &&
          categoryList.map(category => {
            return (
              <li key={category.list_name}>
                <Link to={`/books/${category.list_name}/category`}>
                  {category.list_name}
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default CategoryList;
