import { Book } from '../../StateManagement/Types/Book';
import BookList from './BookList';
import BookTitle from './BookTitle';

interface BookProps {
  books: Book[];
}

const Book: React.FC<BookProps> = ({ books }) => {
  return (
    <div className="flex flex-col space-y-4">
      <BookTitle title="A list of available books" />
      <BookList books={books} />
    </div>
  );
};

export default Book;
