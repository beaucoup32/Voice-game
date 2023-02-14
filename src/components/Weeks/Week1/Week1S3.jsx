import "./Week1.css";
import useTTS from "../../../hooks/useTTS";


    export default function Week1S3(props) {
    const { scenario } = props;
  
    const currentSentence = useTTS(scenario);
    return (
      <>
        <h1>{currentSentence}</h1>
        <img src="images/coral-reef.gif" alt="coral-gif" className="scene-gif coral" />
      </>
    );
  }
  
