import "./Week1.css";
import useTTS from "../../../hooks/useTTS";

export default function Week1S3(props) {
  const { scenario, image } = props;

  const currentSentence = useTTS(scenario);

  return (
    <div className="W1scenario">
      <p className="W1scenario-text">{currentSentence}</p>
      {image !== "ouch" && (
        <div className="W1image-container">
          <img
            src="images/coral-reef.gif"
            alt="coral-gif"
            className="W1scenario-gif coral"
          />
        </div>
      )}
      {image === "ouch" && (
        <div className="W1image-container">
          <img
            src="images/coral-feet.gif"
            alt="coralfeet-gif"
            className="W1scenario-gif coral-feet"
          />
        </div>
      )}
    </div>
  );
}
