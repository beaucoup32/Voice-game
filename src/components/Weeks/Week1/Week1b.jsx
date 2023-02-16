import "./Week1.css";
import useTTS from "../../../hooks/useTTS";

export default function Week1b(props) {
  const { scenario } = props;
 
  const currentSentence = useTTS(scenario);

  return (
    <div className="W1scenario">
      <p className="W1scenario-text">{currentSentence}</p>

      <div className="W1image-container">
        <img
          src="images/lighthouse-zoom.gif"
          alt="lighthouse-gif"
          className="W1scenario-gif lighthouse"
        />
      </div>
    </div>
  );
}
