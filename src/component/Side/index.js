import React from "react";
import Search from "../search";
import image from "../../asset/image1.jpg";
import image1 from "../../asset/image2.jpg";
import image2 from "../../asset/image3.jpg";
import gif from "../../asset/gif.gif";

const Side = () => {
  return (
    <aside className="col-lg-4">
      <div className="widget search">
        <header>
          <h3 className="h6">Search News</h3>
        </header>
        <Search />
      </div>
      <div className="widget latest-posts">
        <header>
          <h3 className="h6">Latest Images</h3>
        </header>
        <div className="blog-posts">
          <img src={image} alt="..." className="img-fluid" />
          <img src={image1} alt="..." className="img-fluid" />
          <img src={image2} alt="..." className="img-fluid" />
        </div>
      </div>
      <div className="widget tags">
        <header>
          <h3 className="h6">Free Advert Space</h3>
        </header>
        <img src={gif} alt="..." className="img-fluid" />
      </div>
    </aside>
  );
};

export default Side;
