import "../App.css";

const GameStart = (props) => {
  return (
    <div className="container">
      <h2>Tell me your name :</h2>
      <h4>{props.playerName ? props.playerName : "My name is ... "}</h4>
    </div>
  );
};

export default GameStart;
