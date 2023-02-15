import "./Week1.css";
import useTTS from "../../../hooks/useTTS";

export default function Week1S2(props) {
  const { scenario, image } = props;

  const currentSentence = useTTS(scenario);
  const transitionSentence = "You decide to make an Assistance Request";

  return (
    <div className="scenario">
      <p className="scenario-text">{currentSentence}</p>
      {(image != "walrus" || currentSentence === transitionSentence) && (
        <div className="image-container">
          <img
            src="images/oysters.gif"
            alt="oysters-gif"
            className="scenario-gif oysters"
          />
        </div>
      )}
      {image === "walrus" && currentSentence != transitionSentence && (
        <div className="image-container">
          <img
            src="https://img.buzzfeed.com/buzzfeed-static/static/2015-04/13/1/enhanced/webdr03/anigif_original-grid-image-21537-1428901407-4.gif"
            alt="walrus-gif"
            className="scene-gif walrus"
          />
        </div>
      )}
    </div>
  );
}
