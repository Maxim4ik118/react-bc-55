import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryList: null,
  isLoading: false,
  error: null,
  loaderActivationCounter: 0,
  books: [{ id: 1 }, { id: 2 }, { id: 3 }],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
      state.loaderActivationCounter = state.loaderActivationCounter + 1;
    },
    setCategoryList: (state, action) => {
      state.categoryList = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearCategories: (state, action) => {
      state.categoryList = [];
    },
    deleteBook: (state, action) => {
      state.books = state.books.filter(book => book.id !== action.payload);

      // const bookIndex = state.books.findIndex(
      //   book => book.id === action.payload
      // );
      // state.books.slice(bookIndex, 1);
    },
    addBook: (state, action) => {
      // state.books.push(action.payload);
      state.books = [...state.books, action.payload];
    },
  },
});

export const { setIsLoading, setCategoryList, setError, clearCategories } =
  categoriesSlice.actions;
export const categoriesReducer = categoriesSlice.reducer;

// export const categoriesReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'categories/setIsLoading': {
//       return {
//         ...state,
//         isLoading: action.payload, // true | false
//         loaderActivationCounter: state.loaderActivationCounter + 1,
//       };
//     }
//     case 'categories/setCategoryList':
//       return {
//         ...state,
//         categoryList: action.payload,
//       };
//     case 'categories/setError':
//       return {
//         ...state,
//         error: action.payload,
//       };
//     case 'categories/clearCategories':
//       return {
//         ...state,
//         categoryList: [],
//       };
//     case 'categories/deleteBook':
//       return {
//         ...state,
//         books: [],
//       };
//     default:
//       return state;
//   }
// };

// export const setIsLoading = payload => ({
//   type: 'categories/setIsLoading',
//   payload,
// });

// export const setCategoryList = payload => {
//   // - action creator
//   return {
//     type: 'categories/setCategoryList',
//     payload,
//   };
// };

// export const setError = payload => {
//   // - action creator
//   return {
//     type: 'categories/setError',
//     payload,
//   };
// };

// export const clearCategories = () => {
//   // - action creator
//   return {
//     type: 'categories/clearCategories',
//   };
// };
