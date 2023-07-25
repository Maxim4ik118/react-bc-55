import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { categoriesReducer } from './categoriesReducer';
import { booksByCategoryReducer } from './booksByCategoryReducer.js';

const categoriesPersistConfig = {
  key: 'categories',
  storage,
  whitelist: ['loaderActivationCounter', 'books'],
};

export const store = configureStore({
  reducer: {
    categories: persistReducer(categoriesPersistConfig, categoriesReducer),
    booksByCategory: booksByCategoryReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
