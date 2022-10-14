import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  const [activeMenu, setActiveMenu] = useState("");

  return (
    <>
      <nav className={"nav-menu"}>
        <ul>
          <li className="navbar-toggle">
            <button style={{ padding: "8px 40px", backgroundColor: "black" }}>
              <Link
                className={
                  activeMenu === "/" ? "active menu-bars" : "menu-bars"
                }
                onClick={() => {
                  setActiveMenu("/");
                }}
                to="/"
              >
                Home
              </Link>
            </button>{" "}
          </li>
          <li className="navbar-toggle active">
            <button style={{ padding: "8px 40px", backgroundColor: "black" }}>
              <Link
                onClick={() => {
                  setActiveMenu("trips");
                }}
                to="/trips"
                className={
                  activeMenu === "trips" ? "active menu-bars" : "menu-bars"
                }
              >
                Trips
              </Link>
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
