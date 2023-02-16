import useTTS from "../../../hooks/useTTS";

const Week4 = (props) => {
  const { scenario } = props;

  const currentSentence = useTTS(scenario);

  return (
    <div className="scenario">
      <p className="scenario-text">{currentSentence}</p>
    </div>
  );
};

export default Week4;
