import React from 'react';

const SearchBlog = ({ search, handleSearchChange, handleSearch }) => {
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="w-full flex">
      <input
        value={search}
        onChange={handleSearchChange}
        onKeyDown={handleKeyPress} // Use onKeyDown instead of onKeyPress
        type="text"
        placeholder="Search for the Blog"
        className="py-2 px-4 mr-5 w-full bg-[#f7f8f9] focus:outline-none focus:border"
      />
      <button
        className="bg-[#1E73BE] px-4 py-2 text-white"
        onClick={handleSearch} // Add onClick to handle search
      >
        Search
      </button>
    </div>
  );
};

export default SearchBlog;
