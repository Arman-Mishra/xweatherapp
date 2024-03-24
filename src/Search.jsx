import React, { useState } from "react";
import "./search.css";

const Search = ({ setSearch }) => {
  const [city, setCity] = useState("");
  return (
    <div className="container">
      <input
        className="search_bar"
        type="text"
        name="searchBar"
        id="searchBar"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button className="button" onClick={() => setSearch(city)}>
        Search
      </button>
    </div>
  );
};

export default Search;
