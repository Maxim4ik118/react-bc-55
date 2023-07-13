import Button from 'components/Button/Button';
import React from 'react';

const CategoryList = ({ categoryList, onSelectCategory, className = '' }) => {
  const showCategoryList =
    Array.isArray(categoryList) && categoryList.length > 0;

  return (
    <div className={className}>
      <h2>Category List</h2>
      <ul>
        {showCategoryList &&
          categoryList.map(category => (
            <li key={category.list_name}>
              <Button
                onClick={() => onSelectCategory(category.list_name)}
                variant="secondary"
              >
                {category.list_name}
              </Button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default CategoryList;
