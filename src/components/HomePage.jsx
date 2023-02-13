import logo from "./logo.png"
import "./HomePage.css"
const HomePage = () => {

  return (
    <div className="home-container">
      <img src={logo} alt="Logo" className="logo" />
    </div>
  );
};

export default HomePage;