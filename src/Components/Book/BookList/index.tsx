import { Book } from '../../../StateManagement/Types/Book';
import BookItem from '../BookItem';

interface BookListProps {
  books: Book[];
}

const BookList: React.FC<BookListProps> = ({ books }) => {
  const createBookItems = () => {
    return books.map((book) => {
      return <BookItem book={book} key={book.id} />;
    });
  };
  return (
    <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-3">
      {createBookItems()}
    </div>
  );
};

export default BookList;
