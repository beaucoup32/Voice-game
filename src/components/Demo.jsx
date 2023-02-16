import "../App.css";
import useTTS from "../hooks/useTTS";

export default function Demo(props) {
  const { scenario } = props;
  const currentSentence = useTTS(scenario);
 
  return (
    <div className="W1scenario">
      <p className="W1scenario-text">{currentSentence}</p>
             <div className="W1gif-container">
          <img
            src="images/demo-hack.gif"
            alt="tekken-gif"
            className="W1scene-gif hacker2"
          />
        </div>
     
    </div>
  );
}
