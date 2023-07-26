import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { requestCategoryList } from 'services/api';

export const requestCategoriesThunk = createAsyncThunk(
  'categories/requestCategories',
  async (_, thunkAPI) => {
    try {
      const catList = await requestCategoryList();
      return catList;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

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
  extraReducers: builder =>
    builder
      .addCase(requestCategoriesThunk.pending, (state, action) => {
        state.isLoading = true;
        state.loaderActivationCounter = state.loaderActivationCounter + 1;
        state.error = null;
      })
      .addCase(requestCategoriesThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.categoryList = action.payload;
      })
      .addCase(requestCategoriesThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const { clearCategories } = categoriesSlice.actions;

export const selectCategories = state => state.categories.categoryList;
export const selectCategoriesLoading = state => state.categories.isLoading;
export const selectCategoriesError = state => state.categories.error;

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
