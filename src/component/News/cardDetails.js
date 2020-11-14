import React from 'react';

const CardDetails = () => {
  return (
    <section className="news-details-area ptb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="blog-details-desc">
                <div className="article-image">
                  <img src="assets/img/news-details/news-details-1.jpg" alt="p" />
                </div>
                <div className="article-content">
                  <span><a href="/">Patricia</a> / 28 September 2020 / <a href="/">0 Comment</a></span>
                  <h3>The Prime Minister’s said that selfish nations are constantly dying for their own interests.</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione.</p>
                  <div className="desc-overview">
                    <div className="row align-items-center">
                      <div className="col-lg-6">
                        <div className="desc-image">
                          <img src="assets/img/news-details/news-details-2.jpg" alt="p" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="desc-text">
                          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div></div></div>
                <div className="col-lg-4">
        <aside className="widget-area">
          <div className="widget widget_search">
            <form className="search-form">
              <label>
                <span className="screen-reader-text">Search for:</span>
                <input type="search" className="search-field" placeholder="Search..." />
              </label>
              <button type="submit">
                <i className="bx bx-search" />
              </button>
            </form>
          </div>
          <section className="widget widget_latest_news_thumb">
            <h3 className="widget-title">Latest news</h3>
            <article className="item">
              <a href="#" className="thumb">
                <span className="fullimage cover bg1" role="img" />
              </a>
              <div className="info">
                <h4 className="title usmall"><a href="#">Negotiations on a peace agreement between the two countries</a></h4>
                <span>28 September, 2020</span>
              </div>
            </article>
            <article className="item">
              <a href="#" className="thumb">
                <span className="fullimage cover bg2" role="img" />
              </a>
              <div className="info">
                <h4 className="title usmall"><a href="#">Love songs helped me through heartbreak</a></h4>
                <span>28 September, 2020</span>
              </div>
            </article>
            <article className="item">
              <a href="#" className="thumb">
                <span className="fullimage cover bg3" role="img" />
              </a>
              <div className="info">
                <h4 className="title usmall"><a href="#">This movement aims to establish women rights</a></h4>
                <span>28 September, 2020</span>
              </div>
            </article>
            <article className="item">
              <a href="#" className="thumb">
                <span className="fullimage cover bg4" role="img" />
              </a>
              <div className="info">
                <h4 className="title usmall"><a href="#">Giving special powers to police officers to prevent crime</a></h4>
                <span>28 September, 2020</span>
              </div>
            </article>
          </section>
        </aside></div>
                </div></div></section>
  );
};

export default CardDetails;