import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../StateManagement/Store';
import { asyncGetBooks } from '../../StateManagement/Slice/Book';
import Book from '../../Components/Book';
import FitlerSort from '../../Components/Form/FilterSort';
const HomePage = () => {
  const { data, dataFilter, loading, error } = useAppSelector(
    (store) => store.books
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(asyncGetBooks());
  }, []);
  if (loading) return 'loading..';
  if (error) return <>{error}</>;

  return (
    <div className="flex flex-col space-y-5 mx-auto container p-3">
      <FitlerSort />
      <Book books={data} />
    </div>
  );
};

export default HomePage;
