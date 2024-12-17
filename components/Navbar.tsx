import React from 'react';
import { BookOpen } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <BookOpen className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">BookShelf</span>
          </div>
          <div className="flex items-center space-x-8">
            <NavLink href="#" active>Home</NavLink>
            <NavLink href="#">Add Book</NavLink>
            <NavLink href="#">About</NavLink>
            <NavLink href="#">Contact</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, children, active }: { href: string; children: React.ReactNode; active?: boolean }) {
  return (
    <a
      href={href}
      className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
        active
          ? 'text-indigo-600 border-b-2 border-indigo-600'
          : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
      }`}
    >
      {children}
    </a>
  );
}