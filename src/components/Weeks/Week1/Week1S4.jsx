import "./Week1.css";
import useTTS from "../../../hooks/useTTS";

export default function Week1S4(props) {
  const { scenario } = props;

  const currentSentence = useTTS(scenario);

  return (
    <div className="W1scenario">
      <p className="W1scenario-text">{currentSentence}</p>

      <div className="W1image-container">
        <img
          src="images/anemones.gif"
          alt="anemones-gif"
          className="W1scenario-gif anemones"
        />
      </div>
    </div>
  );
}
