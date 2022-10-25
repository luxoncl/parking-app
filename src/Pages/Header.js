import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <h1>
        <Link to="/">Home</Link>
      </h1>
      <h1>
        <Link to="/garage">Garage</Link>
      </h1>
      <h1>
        <Link to="/contact">Contact Us</Link>
      </h1>
    </div>
  );
};
export default Header;
