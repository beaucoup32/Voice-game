import useTTS from "../../../hooks/useTTS";
import "./PrepWeek.css";

export default function PrepWeekS1(props) {
  const { scenario } = props;
  const currentSentence = useTTS(scenario);
  const challenge =
    "Feeling confident, do you choose to take a quick break and continue or reward yourself with a round of TEKKEN?";

  return (
    <div className="scenario">
      <p className="scenario-text">{currentSentence}</p>
      {currentSentence === challenge && (
        <div className="image-container">
          <img
            src="images/prepwks1tekken.gif"
            alt="tekken-gif"
            className="scenario-gif tekken"
          />
        </div>
      )}
    </div>
  );
}
