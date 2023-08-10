import { useAppDispatch } from '../../../StateManagement/Store';
import { syncFilterByrating } from '../../../StateManagement/Slice/Book';

const FitlerSort = () => {
  const dispatch = useAppDispatch();
  const handleSortRequest = (value: string) => {
    dispatch(syncFilterByrating(value));
  };
  return (
    <section>
      <label
        htmlFor="countries"
        className="block mb-2  text-3xl font-bold capitalize text-gray-900 dark:text-white"
      >
        Choose the layout of the book
      </label>
      <select
        onChange={(e) => handleSortRequest(e.target.value)}
        id="countries"
        className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 text-xl dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value="descending">descending</option>
        <option value="ascending">ascending</option>
      </select>
    </section>
  );
};

export default FitlerSort;
