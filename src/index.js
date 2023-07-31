import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';

import App2 from 'components/App';

import { persistor, store } from 'redux/store';

import './index.css';

/*
1. Під час першого рендеру додатку дані з локалСторедж потрапляють в стейт
2. При кожній зміні стейту, стейт автоматично синхронізується з локальним сховищем.

*/


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <App2 />
      </BrowserRouter>
    </PersistGate>
  </Provider>
  // </React.StrictMode>
);
