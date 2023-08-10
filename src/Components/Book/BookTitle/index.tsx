import React from 'react';

interface BookTitleProps {
  title: string;
}

const BookTitle: React.FC<BookTitleProps> = ({ title }) => {
  return <h1 className="text-3xl font-bold capitalize">{title}</h1>;
};

export default BookTitle;
