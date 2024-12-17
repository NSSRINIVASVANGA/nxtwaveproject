import React, { useState } from 'react';
import { Search } from 'lucide-react';
import type { SearchFilters } from '../types';

const genres = ['Fiction', 'Non-Fiction', 'Science Fiction', 'Mystery', 'Romance', 'Biography'];

export function SearchSection({ onSearch }: { onSearch: (filters: SearchFilters) => void }) {
  const [filters, setFilters] = useState<SearchFilters>({
    query: '',
    genre: '',
    author: '',
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(filters);
  };

  return (
    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">
          Find Your Next Great Read
        </h1>
        <form onSubmit={handleSearch} className="max-w-3xl mx-auto space-y-4">
          <div className="flex gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search books..."
                className="w-full px-4 py-2 rounded-lg border-2 border-transparent focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                value={filters.query}
                onChange={(e) => setFilters({ ...filters, query: e.target.value })}
              />
            </div>
            <button
              type="submit"
              className="bg-white text-indigo-600 px-6 py-2 rounded-lg font-semibold hover:bg-indigo-50 transition-colors flex items-center gap-2"
            >
              <Search className="w-5 h-5" />
              Search
            </button>
          </div>
          <div className="flex gap-4">
            <select
              className="flex-1 px-4 py-2 rounded-lg border-2 border-transparent focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              value={filters.genre}
              onChange={(e) => setFilters({ ...filters, genre: e.target.value })}
            >
              <option value="">All Genres</option>
              {genres.map((genre) => (
                <option key={genre} value={genre}>
                  {genre}
                </option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Author name..."
              className="flex-1 px-4 py-2 rounded-lg border-2 border-transparent focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              value={filters.author}
              onChange={(e) => setFilters({ ...filters, author: e.target.value })}
            />
          </div>
        </form>
      </div>
    </div>
  );
}