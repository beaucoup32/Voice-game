import "./week2.css";
import useTTS from "../../../hooks/useTTS";

const Week2S3 = (props) => {
  const { scenario } = props;

  const currentSentence = useTTS(scenario);

  return (
    <div className="scenario">
      <p className="scenario-text">{currentSentence}</p>
    </div>
  );
};

export default Week2S3;