import useTTS from "../../../hooks/useTTS";
import "./Week4.css";

const Week4S1 = (props) => {
  const { scenario } = props;

  const currentSentence = useTTS(scenario);
  const challenge =
    "You begin your day by researching the issue, but quickly realize you need access to more information. What do you do?";

  return (
    <div className="scenario">
      <p className="scenario-text">{currentSentence}</p>
      {currentSentence === challenge && (
        <div className="image-container">
          <img
            src="images/week4access.gif"
            alt="access-gif"
            className="scenario-gif access"
          />
        </div>
      )}
    </div>
  );
};

export default Week4S1;
