const { default: Search } = require("./search");

const Header = () => {
  return (
    <div className="page-title-area">
      <div className="container">
        <div className="page-title-content">
          <h2>News Headlines</h2>
          <ul>
            <li>
              <Search />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
