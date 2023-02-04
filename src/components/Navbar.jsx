// import React from "react";
import './Navbar.css'

const Navbar = function(props) {
  const playerName = props.playerName

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/"> Logo </a>
      <span className="navbar-text">
        Say <strong>"Start"</strong> to begin.
      </span>
      <span className='navbar-text'>
        {playerName}
      </span>
    </nav>
  );
};

export default Navbar;