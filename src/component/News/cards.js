import React, { useContext, useEffect } from "react";
import NewsContext from "../../context/newsContext";
import Side from "../Side";
import Card from "./card";

const Cards = () => {
  const { getHeadlines, all_news } = useContext(NewsContext);

  useEffect(() => {
    getHeadlines();
  }, [getHeadlines]);

  return (
    <div className="container">
      <div className="row">
        <main className="posts-listing col-lg-8">
          <div className="container">
            <div className="row">
              {all_news.map((item, index) => {
                return <Card key={index} item={item} />;
              })}
            </div>
          </div>
        </main>
        <Side />
      </div>
    </div>
  );
};

export default Cards;
