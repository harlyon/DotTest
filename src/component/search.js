import React from "react";
import { useContext } from "react";
import NewsContext from "../context/newsContext";

const Search = () => {
  const { searchNews, filteredDates } = useContext(NewsContext);

  return (
    <div className="container">
      <div className="option-inner">
        <div className="others-options d-flex align-items-center">
          <div className="option-item d-flex">
            <form className="search-form date">
              <input
                type="date"
                className="form-control"
                onChange={(e) => {
                  filteredDates(e.target.value);
                }}
              />
            </form>
            <form className="search-box">
              <input
                type="text"
                className="form-control"
                placeholder="Search for.."
                onChange={(e) => searchNews(e.target.value)}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Search;
