import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App2 from 'components/App2';

import { BookContextProvider } from 'context/BookContext';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BookContextProvider>
    <BrowserRouter>
      <App2 />
    </BrowserRouter>
  </BookContextProvider>
  // </React.StrictMode>
);
