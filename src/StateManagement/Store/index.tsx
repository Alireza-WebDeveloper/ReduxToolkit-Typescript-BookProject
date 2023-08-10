import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import BookSlice from '../Slice/Book/index';

const store = configureStore({
  reducer: {
    books: BookSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
//
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
