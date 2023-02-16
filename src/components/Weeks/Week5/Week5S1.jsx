import useTTS from "../../../hooks/useTTS";
import "./Week5.css";

const Week5S1 = (props) => {
  const { scenario } = props;

  const currentSentence = useTTS(scenario);
  const challenge =
    "Uh oh, we got an error. 'psql: could not connect to server'? What does that even mean?";
  const timeMachine =
    "You discover that Tweeter no longer exists. With no place for people to post thier questionable Tweets, the world has plunged into utter chaos.";

  const tweeter =
    "You use your coding skills to create a virtual version of Tweeter called 'Two-Weeter' and successfully save all the tweets.";
  return (
    <div className="scenario">
      <p className="scenario-text">{currentSentence}</p>
      {currentSentence === challenge && (
        <div className="image-container">
          <img
            src="images/week5terminal.gif"
            alt="terminal-gif"
            className="scenario-gif terminal"
          />
        </div>
      )}

      {currentSentence === tweeter && (
        <div className="image-container">
          <img
            src="images/week4s4tweeter.gif"
            alt="tweeter-gif"
            className="scenario-gif tweeter"
          />
        </div>
      )}
      {currentSentence === timeMachine && (
        <div className="image-container">
          <img
            src="images/week4s4future.gif"
            alt="future-gif"
            className="scenario-gif future"
          />
        </div>
      )}
    </div>
  );
};

export default Week5S1;
