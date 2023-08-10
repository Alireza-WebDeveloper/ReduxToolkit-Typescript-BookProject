export interface Book {
  title: string;
  author: string;
  published_year: number;
  genre: string;
  rating: number;
  id: number;
  img: string;
}

export interface BookData {
  data: Book[];
  dataFilter: Book[];
  loading: boolean;
  error: '';
}
