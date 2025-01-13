import React from "react";
import SearchBlog from "./SearchBlog";
import { useState } from "react";

const Blogs = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [query, setQuery] = useState({ search: "", category: "" });
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };
  const handleSearch = () => setQuery({ search, category });
  return (
    <div className="mt-16 container mx-auto">
      <SearchBlog
        search={search}
        handleSearchChange={handleSearchChange}
        handleSearch={handleSearchChange}
      />
      <div>blog card</div>
    </div>
  );
};

export default Blogs;
