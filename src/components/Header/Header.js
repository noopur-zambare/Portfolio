import React from "react";
import { Nav, NavLink, Bars, NavMenu } from "./HeaderElements";
import './Header.css';

const Header = ({ toggle }) => {
  return (

      <Nav className="Nav">
        <NavMenu>
          <NavLink className="menu-item" to="about">
            About
          </NavLink>
          <NavLink className="menu-item" to="internships">
            Internships
          </NavLink>
          <NavLink className="menu-item" to="projects">
            Projects
          </NavLink>
          <NavLink className="menu-item" to="extracurricular">
            Extracurricular
          </NavLink>
          
        </NavMenu>
        <Bars onClick={toggle} />
      </Nav>

  );
};

export default Header;
