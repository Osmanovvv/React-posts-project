import React from "react";
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <div className="navbar">
      <div class="navbar__links">
        <Link to="/about">О сайте</Link>
        <Link to="/posts">Посты</Link>
      </div>
    </div>
  );
}

export default Navbar;
