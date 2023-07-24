import { combineReducers, createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';

import { categoriesReducer } from './categoriesReducer';
import { booksByCategoryReducer } from './booksByCategoryReducer.js';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  booksByCategory: booksByCategoryReducer,
});

const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);
