import "./GameOver.css"

const GameOver = (props) => {
  const {text, playerLives, playerName} = props;

  return (
    <div className="game-over-container">
      <h1 className="game-over-title">
        GAME OVER
      </h1>
      <span className="game-over-text">{text}</span>
    </div>
  )
}

export default GameOver;