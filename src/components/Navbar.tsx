import React, { useState } from "react";

import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <>
      <nav className={"nav-menu"}>
        <ul>
          <li className="navbar-toggle">
            <Link to="/" className="menu-bars">
              Home
            </Link>
          </li>
          <li className="navbar-toggle active">
            <Link to="/trips" className="menu-bars">
              Trips
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
