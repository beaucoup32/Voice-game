import useTTS from "../../../hooks/useTTS";

const Week4S2 = (props) => {
  const { scenario } = props;

  const currentSentence = useTTS(scenario);
  const challenge =
    "Alternatively, you could take your chances with the guards who seem to be busy outside your cell. What do you choose to do?";
  const hack =
    "You successfully hack into Tweeter's systems, but trigger the security alarms.";
  const hackLose =
    "You successfully hack into Tweeter's systems, but trigger the security alarms. Not even getting a chance to commit your work, you're arrested by the Tweeter police.";

  return (
    <div className="scenario">
      <p className="scenario-text">{currentSentence}</p>
      {currentSentence === challenge && (
        <div className="image-container">
          <img
            src="images/week4s2jail.gif"
            alt="tekken-gif"
            className="scenario-gif jail"
          />
        </div>
      )}
      {(currentSentence === hack || currentSentence === hackLose) && (
        <div className="image-container">
          <img
            src="images/week4s1hack.gif"
            alt="hacker-gif"
            className="scenario-gif hack-tweeter"
          />
        </div>
      )}
    </div>
  );
};

export default Week4S2;
