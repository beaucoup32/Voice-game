import "./Week1.css";
import useTTS from "../../../hooks/useTTS";

export default function Week1b(props) {
  const { scenario, setScenario, f, o, c, a, l } = props;
  if (f && o && c && a && l) {
    setScenario([
      `Excellent job! You are Ready for the Week 1 Test. say "Lighthouse" to proceed.`,
    ]);
  }
  const currentSentence = useTTS(scenario);

  return (
    <div className="scenario">
      <p className="scenario-text">{currentSentence}</p>

      <div className="image-container">
        <img
          src="images/lighthouse-zoom.gif"
          alt="lighthouse-gif"
          className="scenario-gif lighthouse"
        />
      </div>
    </div>
  );
}
