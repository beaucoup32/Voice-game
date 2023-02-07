// import React from "react";
import './Navbar.css'

const Navbar = function(props) {
  const {playerName, text, playerLives} = props;

  const formatLives = () => {
    const lives = []
    for (let life = 0; life < playerLives; life++ ) {
     lives.push("❤️")
    }
    return lives
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/"> Logo </a>
      <span className="navbar-text nav-title">
        {text}
      </span>
      <span className='navbar-text player'>
        {playerName}
        <div>
          {formatLives()}
        </div>
      </span>
    </nav>
  );
};

export default Navbar;