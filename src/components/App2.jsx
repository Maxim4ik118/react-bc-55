import React, { useEffect, useState } from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';

import Loader from './Loader/Loader';
import BookList from './BookList/BookList';
import CategoryList from './CategoryList/CategoryList';

import Home from 'pages/Home';
import Categories from 'pages/Categories';
import TopBooks from 'pages/TopBooks';

import { requestBooksByCategory, requestCategoryList } from 'services/api';

import { StyledBookShelf } from './styled';
import BooksByCategory from 'pages/BooksByCategory';

/*
Маршрутеризація:

1. Всі зовнішні маршрути пишемо за допомогоб тегу <a href="https://google.com"></a>
2. Всі внутрішні маршрути по додатку пишемо за допомогою тегу <Link to="/"></Link> or <NavLink to="/about"></NavLink>

Робота з маршрутеризацією в РЕАКТ поділяється на дві частини:
1. Змінити адресний рядочок браузера за топомогою тегів Link, NavLink
2. Підготувати маршрути з відповідними компонентами <Route path="/categories" element={<Categories />} />

*/
export default function App2() {
  return (
    <div>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/categories">Categories</Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
         
          <Route
            path="/books/:categoryName/category/*"
            element={<BooksByCategory />}
          />

          <Route path="*" element={<h1>Error 404</h1>} />
        </Routes>
      </main>
      <footer>Footer</footer>
    </div>
  );
}
