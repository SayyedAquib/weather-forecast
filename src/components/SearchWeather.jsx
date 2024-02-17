// SearchWeather.js
import React from "react";
import search from "../assets/search.png";

const SearchWeather = ({ handleSearch, searchCity, setSearchCity }) => {
  return (
    <form className="form-container" onSubmit={handleSearch}>
      <input
        placeholder="Search for city ..."
        value={searchCity}
        onChange={(e) => setSearchCity(e.target.value)}
      />
      <button className="btn" type="submit">
        <img src={search} alt="Search" />
      </button>
    </form>
  );
}

export default SearchWeather;
