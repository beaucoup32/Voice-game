import "./Week1.css";
import useTTS from "../../../hooks/useTTS";

export default function Week1S5(props) {
  const { scenario } = props;

  const currentSentence = useTTS(scenario);
  return (
    <>
      <h1>{currentSentence}</h1>
      <img
        src="images/leeches.gif"
        alt="leeches-gif"
        className="scene-gif"
      />
    </>
  );
}