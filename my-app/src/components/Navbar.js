import React from "react";
import { Link } from "react-router-dom";
import { NavbarContainer } from "../styles";

const Navbar = () => {
  return (
    <NavbarContainer>
      <h2>React Helmet POC</h2>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </NavbarContainer>
  );
};

export default Navbar;
