import React from "react";
import { useContext } from "react";
import NewsContext from "../context/newsContext";

const Search = () => {
  const { searchNews, filteredDates } = useContext(NewsContext);

  return (
    <form className="search-form">
      <div className="form-group">
        <input
          type="search"
          onChange={(e) => searchNews(e.target.value)}
          placeholder="What are you looking for?"
        />
        <br />
        <input
          type="date"
          onChange={(e) => filteredDates(e.target.value)}
          placeholder="date search"
        />
      </div>
    </form>
  );
};
export default Search;
