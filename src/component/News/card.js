import React from "react";
import noImage from "../../asset/image.jpg";
import moment from "moment";

const Card = ({ item }) => {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="single-news-item item">
        <div className="news-image">
          <img
            src={item.urlToImage ? item.urlToImage : noImage}
            alt="card-img"
          />
        </div>
        <div className="news-content mt-20">
          <span>{item.source.name}</span>
          <h3>
            <a href="/">{item.title}.</a>
          </h3>
          <p>{item.content}.</p>
          <p>
            <a href="/">{item.author}</a> -{" "}
            {moment(item.publishedAt).format("YYYY/MMM/DD")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
