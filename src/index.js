import React from 'react';
import ReactDOM from 'react-dom/client';
// import App2 from 'components/App2';
import { App } from 'components/App';
import { BookContextProvider } from 'context/BookContext';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BookContextProvider>
    <App />
  </BookContextProvider>
  // </React.StrictMode>
);
