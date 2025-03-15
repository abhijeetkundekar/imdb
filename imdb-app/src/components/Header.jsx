import { Link } from "react-router";
import "/home/abhijeet/Desktop/imdb/imdb-app/src/App.css";

const Header = () => {
  return (
    <header className="header">
      <h1>IMDB</h1>

      <ul>
        <li>
          <Link style={{ color: "none", underline: "always" }} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link to="/details">Movies</Link>
        </li>
        <li>
          <Link to="/watchlist">Watch List</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
