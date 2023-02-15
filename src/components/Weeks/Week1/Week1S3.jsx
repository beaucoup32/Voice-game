import "./Week1.css";
import useTTS from "../../../hooks/useTTS";

export default function Week1S3(props) {
  const { scenario, image } = props;

  const currentSentence = useTTS(scenario);

  return (
    <div className="scenario">
      <p className="scenario-text">{currentSentence}</p>
      {image != "ouch" && (
        <div className="image-container">
          <img
            src="images/coral-reef.gif"
            alt="coral-gif"
            className="scenario-gif coral"
          />
        </div>
      )}
      {image === "ouch" && (
        <div className="image-container">
          <img
            src="images/coral-feet.gif"
            alt="coralfeet-gif"
            className="scenario-gif coral-feet"
          />
        </div>
      )}
    </div>
  );
}
