import "./Navbar.css";
import icon from "./logo.png"

const Navbar = function (props) {
  const { playerName, text, playerLives } = props;

  const heartIcon = <i className="fa-solid fa-heart fa-beat" />;

  const formatLives = () => {
    const lives = [];
    for (let life = 0; life < playerLives; life++) {
      lives.push(heartIcon);
    }
    return lives;
  };

  // formatLives().map()

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        <img className="icon" src={icon} alt="" />
      </a>
      <span className="navbar-text nav-title">{text}</span>
      <span className="navbar-text player">
        {playerName}
        <div className="hearts">{formatLives()}</div>
      </span>
    </nav>
  );
};

export default Navbar;
