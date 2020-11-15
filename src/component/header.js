import React from "react";

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <div className="navbar-header d-flex align-items-center justify-content-between">
            <a href="/" className="navbar-brand">
              News Headline
            </a>
            <button
              type="button"
              data-toggle="collapse"
              data-target="#navbarcollapse"
              aria-controls="navbarcollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
              className="navbar-toggler"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
          <div id="navbarcollapse" className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a href="/" className="nav-link ">
                  News Headlines powered by News Api
                </a>
              </li>
            </ul>
            <ul className="langs navbar-text">
              <a href="/" className="active">
                EN
              </a>
              <span></span>
              <a href="/">ES</a>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
