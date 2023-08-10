import { createAsyncThunk } from '@reduxjs/toolkit';
import { Book } from '../../Types/Book';
import BaseApi from '../../Base';
// Fetch Function
const asyncGetBooks = createAsyncThunk<Book[], void, { rejectValue: string }>(
  'asyncGet/Books',
  async (_, ThunkControl) => {
    try {
      const response = await BaseApi.get<Book[]>('/books');
      return response.data;
    } catch (error: any) {
      return ThunkControl.rejectWithValue(error.message);
    }
  }
);

export { asyncGetBooks };
