import useTTS from "../../../hooks/useTTS";
import "./PrepWeek.css";
import "../Week1/Week1.css"

export default function PrepWeekS1(props) {
  const { scenario } = props;
  const currentSentence = useTTS(scenario);
  const challenge =
    "Feeling confident, do you choose to take a quick break and keep going or reward yourself with a round of TEKKEN?";

  return (
    <div className="W1scenario">
      <p className="scenario-text">{currentSentence}</p>
      {currentSentence === challenge && (
        <div className="W1image-container">
          <img
            src="images/prepwks1tekken.gif"
            alt="tekken-gif"
            className="W1scenario-gif tekken"
          />
        </div>
      )}
    </div>
  );
}
