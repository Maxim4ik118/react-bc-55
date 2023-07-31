import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { requestBooksByCategory } from 'services/api';

export const requestBooksByCategoryThunk = createAsyncThunk(
  'booksByCategory/requestBooksByCategory',
  async (categoryName, thunkAPI) => {
    try {
      // const bookList = await requestBooksByCategory(categoryName);
      // return bookList;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  booksList: [],
  isLoading: false,
  error: null,
};

const booksByCategorySlice = createSlice({
  name: 'booksByCategory',
  initialState,
  extraReducers: builder =>
    builder
    // -------- BooksByCategory --------
    .addCase(requestBooksByCategoryThunk.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(requestBooksByCategoryThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.booksList = action.payload;
    })
    .addCase(requestBooksByCategoryThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })
    ,
});

export const selectBookList = state => state.booksByCategory.booksList;
export const selectBooksIsLoading = state => state.booksByCategory.isLoading;
export const selectBooksError = state => state.booksByCategory.error;

export const booksByCategoryReducer = booksByCategorySlice.reducer;
