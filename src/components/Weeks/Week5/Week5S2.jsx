import useTTS from "../../../hooks/useTTS";

const Week5S2 = (props) => {
  const { scenario } = props;

  const currentSentence = useTTS(scenario);

  const challenge = "I wonder what the password could be...";
  const mac = "You take out a $4000 loan to buy a macbook.";

  return (
    <div className="scenario">
      <p className="scenario-text">{currentSentence}</p>
      {currentSentence === challenge && (
        <div className="image-container">
          <img
            src="images/week5s2password.gif"
            alt="password-gif"
            className="scenario-gif password"
          />
        </div>
      )}
      {currentSentence === mac && (
        <div className="image-container">
          <img
            src="images/week5s1mac.gif"
            alt="mac-gif"
            className="scenario-gif mac"
          />
        </div>
      )}
    </div>
  );
};

export default Week5S2;
