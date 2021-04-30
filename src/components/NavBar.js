import React from "react";
import { GiGlassCelebration } from "react-icons/gi";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to="/" className="nav-logo">
          <h2>
            Tip.sy <GiGlassCelebration />
          </h2>
        </Link>

        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
