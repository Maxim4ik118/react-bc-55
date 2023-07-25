import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CategoryList from 'components/CategoryList/CategoryList';
import Loader from 'components/Loader/Loader';

import { requestCategoryList } from 'services/api';

import {
  clearCategories,
  setCategoryList,
  setError,
  setIsLoading,
} from 'redux/categoriesReducer';

import { StyledBookShelf } from 'components/styled';

/*
Робота з редаксом: 
1. Встановити бібліотеку redux та redux-toolkit
2. Сконфігурувати "store" 
3. Зв'язати наш "store" з React додатком, через <Provider store={store}>
4. Створити редьюсер з початковим стейтом і 
   підключити цей редьюсер до "store" за допомогою "combineReducers"
5. Описати для кожної дії в редьюсері свій обробник/кейс/протокол
6. Підписатися на стейт безпосередньо в середині компоненти, за допомогою
   "useSelector"
7. Отримати логістичну функцію "dispatch" за допомогою хука "useDispatch()"
8. Задіспатчити екшин(Надіслати інструкцію до редьюсеру) dispatch({ type: 'categories/setCategoryList', payload: catList })


NOTE: Action - це об'єкт, в якого має бути обов'язкове поле type, 
      ще може бути payload - він не обов'язковий.

      Редьюсер - це чиста функція, яка приймає в себе "state" та "action"
      і повертає змінений стан.

      dispatch - це логістична функція, яка приймає в себе "action"
      і доставляє його до редьюсеру.
*/

const Categories = () => {
  const categoryList = useSelector(state => state.categories.categoryList);
  const isLoading = useSelector(state => state.categories.isLoading);
  const error = useSelector(state => state.categories.error);
  const dispatch = useDispatch();

  const handleClearCategories = (bookId, newBookData) => {
    dispatch(clearCategories());
 //   dispatch(deleteBook(bookId));
 //   dispatch(addBook(newBookData));
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        dispatch(setIsLoading(true));

        const catList = await requestCategoryList();
        dispatch(setCategoryList(catList));
      } catch (error) {
        dispatch(setError(error.message));
      } finally {
        dispatch(setIsLoading(false));
      }
    };

    fetchCategories();
  }, [dispatch]); // -> componentDidMount

  return (
    <div>
      <h1>Categories</h1>
      <button onClick={handleClearCategories}>Clear categories</button>
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
      {categoryList?.length > 0 && (
        <StyledBookShelf>
          <CategoryList className="left" categoryList={categoryList} />
        </StyledBookShelf>
      )}
    </div>
  );
};

export default Categories;
