import React, { Suspense, lazy } from 'react';
import { Link, Navigate, Route, Routes } from 'react-router-dom';

import Loader from './Loader/Loader';

// import Home from 'pages/Home';
// import Categories from 'pages/Categories';
// import BooksByCategory from 'pages/BooksByCategory';
// import SearchComments from 'pages/SearchComments';

const Home = lazy(() => import('pages/Home'));
const Categories = lazy(() => import('pages/Categories'));
const BooksByCategory = lazy(() => import('pages/BooksByCategory'));
const SearchComments = lazy(() => import('pages/SearchComments'));

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
          <Link to="/search-comments">Search Comments</Link>
        </nav>
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/search-comments" element={<SearchComments />} />

            <Route
              path="/books/:categoryName/category/*"
              element={<BooksByCategory />}
            />

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}
