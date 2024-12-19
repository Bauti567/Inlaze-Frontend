import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <div className="relative w-full mb-5">
      <h2 className="text-white text-[16px] font-semibold mb-2">Search</h2>
      <div className="relative">
        <input
          type="text"
          placeholder="Keyword"
          onChange={handleInputChange}
          className="w-full pl-4 pr-10 py-2 text-sm text-white bg-[#1C1C1C] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <MagnifyingGlassIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
      </div>
    </div>
  );
};

export default SearchBar;
