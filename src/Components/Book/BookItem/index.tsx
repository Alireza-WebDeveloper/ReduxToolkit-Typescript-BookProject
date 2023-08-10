import { Link } from 'react-router-dom';
import { Book } from '../../../StateManagement/Types/Book';
import * as Icons from 'react-icons/md';
interface BookItemProps {
  book: Book;
}

const BookItem: React.FC<BookItemProps> = ({ book }) => {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Link to={'/'}>
        <img
          className="p-8 rounded-t-lg h-60 w-full"
          src={book.img}
          alt="product image"
        />
      </Link>
      <div className="px-5 pb-5">
        <Link to={'/'}>
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {book.title} ({book.genre})
          </h5>
        </Link>
        <div className="flex items-center mt-2.5 mb-5">
          <Icons.MdStarRate />
          <Icons.MdStarRate />
          <Icons.MdStarRate />
          <Icons.MdStarRate />
          <Icons.MdStarRate />
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
            {book.rating}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            {book.published_year}
          </span>
          <Link
            to={'/'}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add to cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookItem;
