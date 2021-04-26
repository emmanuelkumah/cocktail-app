import React from "react";
import { GiWineGlass } from "react-icons/gi";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link className="nav-logo">
          <h2>Punch</h2>
          <GiWineGlass className="nav-icon" />
        </Link>

        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/review">Reviews</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
