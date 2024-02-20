"use client";
import React from "react";
import { useState } from "react";
import { SearchManufacturer } from "./";
function SearchBar() {
  const [manufacturer, setmanufacturer] = useState("");
  const handleSearch = () => {};
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setmanufacturer={setmanufacturer}
        />
      </div>
    </form>
  );
}

export default SearchBar;
