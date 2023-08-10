import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Book, BookData } from '../../Types/Book';
import { asyncGetBooks } from './Actions';

// Slice
const initialState: BookData = {
  data: [],
  dataFilter: [],
  loading: false,
  error: '',
};

// Slice
const BookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    syncFilterByrating: (state, action: any) => {
      const payload: 'descending' | 'ascending' = action.payload;
      // descending
      if (payload === 'descending') {
        const sortedBooks = state.data.sort(
          (bookA, bookB) => bookB.rating - bookA.rating
        );
        state.dataFilter = sortedBooks;
      } else if (payload === 'ascending') {
        // descending
        const sortedBooks = state.data.sort(
          (bookA, bookB) => bookA.rating - bookB.rating
        );
        state.dataFilter = sortedBooks;
      }
    },
  },
  extraReducers: (builder) => {
    // Pending
    builder.addCase(asyncGetBooks.pending, (state) => {
      state.loading = true;
      state.data = [];
      state.error = '';
    });
    // Fulfilled
    builder.addCase(
      asyncGetBooks.fulfilled,
      (state, action: PayloadAction<Book[]>) => {
        state.loading = false;
        state.data = action.payload;
        state.dataFilter = action.payload;
        state.error = '';
      }
    );
    // Rejected
    builder.addCase(asyncGetBooks.rejected, (state, action: any) => {
      state.loading = false;
      state.data = [];
      state.error = action.payload;
    });
  },
});

// Export Sync Action
export const { syncFilterByrating } = BookSlice.actions;

// Export Async Action
export { asyncGetBooks };

// Export Reducer
export default BookSlice.reducer;
