import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { SearchSection } from './components/SearchSection';
import { BookGrid } from './components/BookGrid';
import type { Book, SearchFilters } from './types';

// Mock data for demonstration
const mockBooks: Book[] = [
  {
    id: '1',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    genre: 'Fiction',
    pages: 180,
    publishedDate: '1925-04-10',
    coverUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&q=80'
  },
  {
    id: '2',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    genre: 'Fiction',
    pages: 281,
    publishedDate: '1960-07-11',
    coverUrl: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500&q=80'
  },
  {
    id: '3',
    title: '1984',
    author: 'George Orwell',
    genre: 'Science Fiction',
    pages: 328,
    publishedDate: '1949-06-08',
    coverUrl: 'https://images.unsplash.com/photo-1495640388908-05fa85288e61?w=500&q=80'
  },
];

function App() {
  const [books, setBooks] = useState<Book[]>(mockBooks);
  const [filters, setFilters] = useState<SearchFilters>({});

  const handleSearch = (newFilters: SearchFilters) => {
    setFilters(newFilters);
    // In a real application, this would make an API call with the filters
    // For now, we'll just filter the mock data
    const filteredBooks = mockBooks.filter(book => {
      if (newFilters.query && !book.title.toLowerCase().includes(newFilters.query.toLowerCase())) {
        return false;
      }
      if (newFilters.genre && book.genre !== newFilters.genre) {
        return false;
      }
      if (newFilters.author && !book.author.toLowerCase().includes(newFilters.author.toLowerCase())) {
        return false;
      }
      return true;
    });
    setBooks(filteredBooks);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <SearchSection onSearch={handleSearch} />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <BookGrid books={books} />
      </main>
    </div>
  );
}

export default App;