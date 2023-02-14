import "./Week1.css";
import useTTS from "../../../hooks/useTTS";


    export default function Week1S4(props) {
    const { scenario } = props;
  
    const currentSentence = useTTS(scenario);
    return (
      <>
        <h1>{currentSentence}</h1>
        <img src="images/anemones.gif" alt="anemones-gif" className="scene-gif anemones" />
      </>
    );
  }