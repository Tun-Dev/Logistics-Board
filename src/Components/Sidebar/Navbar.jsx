import React from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { NavBarData } from "./NavBarData";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className="navbar">
        <div className="menu-bars">
          <FontAwesomeIcon icon={faBars} onClick={showSidebar} />
        </div>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items">
          <li className="navbar-toggle">
            <div className="menu-bars">
              <FontAwesomeIcon icon={faX} onClick={showSidebar} />
            </div>
          </li>
          {NavBarData.map((item, index) => {
            return (
              <li key={item.id} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
