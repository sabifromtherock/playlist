import { Link } from "react-router-dom";
import "./Nav.scss";

const Nav = () => {
  return (
    <div className="nav">
      <Link className="nav__item" to="/">
        Home
      </Link>
      <Link className="nav__item" to="/tracks">
        Playlist
      </Link>
    </div>
  );
};

export default Nav;
