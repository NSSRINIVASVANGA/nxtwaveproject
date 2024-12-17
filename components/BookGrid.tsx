import React from 'react';
import { Edit2, Trash2, Eye } from 'lucide-react';
import type { Book } from '../types';

export function BookGrid({ books }: { books: Book[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {books.map((book) => (
        <div key={book.id} className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src={book.coverUrl || `https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=500&q=80`}
            alt={book.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800">{book.title}</h3>
            <p className="text-gray-600">by {book.author}</p>
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded">
                {book.genre}
              </span>
              <span className="ml-2">{book.pages} pages</span>
            </div>
            <div className="mt-4 flex justify-end space-x-2">
              <button className="p-2 text-gray-600 hover:text-indigo-600">
                <Eye className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-600 hover:text-indigo-600">
                <Edit2 className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-600 hover:text-red-600">
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}