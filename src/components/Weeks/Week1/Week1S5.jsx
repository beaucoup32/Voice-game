import "./Week1.css";
import useTTS from "../../../hooks/useTTS";

export default function Week1S5(props) {
  const { scenario } = props; 

  const currentSentence = useTTS(scenario);
  const transitionSentence = "You are still stuck in this loop. How can you break out of it?";
  const feldman = "https://images5.fanpop.com/image/photos/27000000/my-prime-stand-by-me-27043905-498-238.gif"

  return (
    <div className="W1scenario">
      <p className="W1scenario-text">{currentSentence}</p>
      {currentSentence !== transitionSentence && (
        <div className="W1image-container">
          <img
            src="images/leeches.gif"
            alt="leeches-gif"
            className="W1scenario-gif"
          />
        </div>
      )}
      {currentSentence === transitionSentence && (
        <div className="W1image-container">
          <img
            src={feldman}
            alt="leeches-gif"
            className="W1scenario-gif"
          />
        </div>
      )}
    </div>
  );
}