import useTTS from "../../../hooks/useTTS";

const Week4S4 = (props) => {
  const { scenario } = props;

  const currentSentence = useTTS(scenario);
  const challenge =
    "Use your coding skills to create a virtual version of Tweeter. Or use those skills to build a time machine and prevent the problem from even happening.";

  const heli =
    "But you crash as soon as you take off because you forgot you're a programmer, not a pilot";

  return (
    <div className="scenario">
      <p className="scenario-text">{currentSentence}</p>
      {currentSentence === challenge && (
        <div className="image-container">
          <img
            src="images/week4s4screen.gif"
            alt="screen-gif"
            className="scenario-gif screen"
          />
        </div>
      )}
      {currentSentence === heli && (
        <div className="image-container">
          <img
            src="images/week4s3heli.gif"
            alt="heli-gif"
            className="scenario-gif heli"
          />
        </div>
      )}
    </div>
  );
};

export default Week4S4;
