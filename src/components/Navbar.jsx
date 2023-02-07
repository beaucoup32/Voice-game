// import React from "react";
import './Navbar.css'

const Navbar = function(props) {
  const {playerName, text} = props;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/"> Logo </a>
      <span className="navbar-text nav-title">
        {text}
      </span>
      <span className='navbar-text player'>
        {playerName}
      </span>
    </nav>
  );
};

export default Navbar;