import "./Week1.css";
import useTTS from "../../../hooks/useTTS";

export default function Week1S1(props) {
  const { scenario, image } = props;

  const currentSentence = useTTS(scenario);

  return (
    <div className="scenario">
      <p className="scenario-text">{currentSentence}</p>
      {image !== "holding" && (
        <div className="image-container">
          <img
            src="images/mushroom-patch.gif"
            alt="mush-patch-gif"
            className="scenario-gif mushroom"
          />
        </div>
      )}
      {image === "holding" && (
        <div className="image-container">
          <img
            src="images/holding-mushroom.gif"
            alt="hold-mush-gif"
            className="scenario-gif hold-mush"
          />
        </div>
      )}
    </div>
  );
}
