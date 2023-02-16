import useTTS from "../../../hooks/useTTS";

const Week4S3 = (props) => {
  const { scenario } = props;

  const currentSentence = useTTS(scenario);
  const challenge =
    "You finally find the source of the problem and realize that the issue can be fixed by manually going into Tweeter's servers. How will you get there?";

  const mentor =
    "After waiting in the queue for what feels like ages, you finaly connect with a Mentor and explain your situation.";
  const mentor2 =
    "Lucky for you, this mentor was an Ex Tweeter employee who knew the ins and outs of Tweeter's source code.";

  const guards =
    "You bribe the guards with the last of your coffee bean fund and successfully escape jail.";
  const guardsFail =
    "The guard roasts your haircut and goes back to his duties.";
  return (
    <div className="scenario">
      <p className="scenario-text">{currentSentence}</p>
      {currentSentence === challenge && (
        <div className="image-container">
          <img
            src="images/week4s3plan.gif"
            alt="plan-gif"
            className="scenario-gif plan"
          />
        </div>
      )}

      {currentSentence === guards && (
        <div className="image-container">
          <img
            src="images/week4s2guards.gif"
            alt="guards-gif"
            className="scenario-gif guards"
          />
        </div>
      )}
      {currentSentence === guardsFail && (
        <div className="image-container">
          <img
            src="images/week4s2guards.gif"
            alt="guards-gif"
            className="scenario-gif guards"
          />
        </div>
      )}
      {(currentSentence === mentor || currentSentence === mentor2) && (
        <div className="image-container">
          <img
            src="images/week4s1mentor.gif"
            alt="mentor-gif"
            className="scenario-gif mentor"
          />
        </div>
      )}
    </div>
  );
};

export default Week4S3;
