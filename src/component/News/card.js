import React from "react";
import noImage from "../../asset/image.jpg";
import moment from "moment";
import avatar from "../../asset/avatar.png"

const Card = ({ item }) => {
  return (
    <div className="post col-xl-6">
      <div className="post-thumbnail">
        <a href="post.html">
          <img
            src={item.urlToImage ? item.urlToImage : noImage}
            alt="..."
            className="img-fluid"
          />
        </a>
      </div>
      <div className="post-details">
        <div className="post-meta d-flex justify-content-between">
          <div className="date meta-last">
            {moment(item.publishedAt).format("YYYY-MMM-DD")}
          </div>
          <div className="category">
            <a href="/">{item.source.name}</a>
          </div>
        </div>
        <a href="post.html">
          <h3 className="h4">{item.title}</h3>
        </a>
        <p className="text-muted">
          {item.content && item.content.length < 150
            ? `${item.content}`
            : `${item.content && item.content.substring(0, 155)}...`}
        </p>
        <footer className="post-footer d-flex align-items-center">
          <a href="/" className="author d-flex align-items-center flex-wrap">
            <div className="avatar">
              <img
                src={avatar}
                alt="..."
                className="img-fluid"
              />
            </div>
            <div className="title">
              <span>{item.author}</span>
            </div>
          </a>
          <a
            className="news_buttons"
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Read More
          </a>
        </footer>
      </div>
    </div>
  );
};

export default Card;
