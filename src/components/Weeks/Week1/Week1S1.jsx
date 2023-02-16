import "./Week1.css";
import useTTS from "../../../hooks/useTTS";

export default function Week1S1(props) {
  const { scenario, image } = props;

  const currentSentence = useTTS(scenario);

  return (
    <div className="W1scenario">
      <p className="W1scenario-text">{currentSentence}</p>
      {image !== "holding" && (
        <div className="W1image-container">
          <img
            src="images/mushroom-patch.gif"
            alt="mush-patch-gif"
            className="W1scenario-gif mushroom"
          />
        </div>
      )}
      {image === "holding" && (
        <div className="W1image-container">
          <img
            src="images/holding-mushroom.gif"
            alt="hold-mush-gif"
            className="W1scenario-gif hold-mush"
          />
        </div>
      )}
    </div>
  );
}
