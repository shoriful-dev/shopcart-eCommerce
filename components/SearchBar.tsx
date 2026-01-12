'use client';

import { Search, X } from 'lucide-react';
import React, { useState, useCallback, useRef, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const SearchBar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState(searchParams.get('query') || '');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSearch = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (query.trim()) {
        router.push(`/search?query=${encodeURIComponent(query.trim())}`);
        setQuery('');
        setIsOpen(false);
      }
    },
    [query, router]
  );

  const toggleSearch = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      setQuery('');
    }
  };

  return (
    <div className="relative">
      {!isOpen ? (
        <button
          onClick={toggleSearch}
          className="hover:text-shop_light_green hoverEffect"
          aria-label="Open search"
        >
          <Search className="w-5 h-5" />
        </button>
      ) : (
        <form
          onSubmit={handleSearch}
          className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-1.5 bg-white shadow-lg transition-all duration-300 w-[280px] md:w-[250px] absolute right-0 top-1/2 -translate-y-1/2 z-50"
        >
          <Search className="w-5 h-5 text-gray-500 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products..."
            className="flex-1 bg-transparent outline-none text-gray-700 placeholder:text-gray-400 font-medium min-w-0"
          />
          <button
            type="button"
            onClick={toggleSearch}
            className="text-gray-500 hover:text-gray-700 flex-shrink-0"
            aria-label="Close search"
          >
            <X className="w-5 h-5" />
          </button>
        </form>
      )}
    </div>
  );
};

export default SearchBar;
