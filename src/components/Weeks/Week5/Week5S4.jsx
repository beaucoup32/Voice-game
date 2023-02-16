import useTTS from "../../../hooks/useTTS";

const Week5S4 = (props) => {
  const { scenario } = props;

  const currentSentence = useTTS(scenario);

  return (
    <div className="scenario">
      <p className="scenario-text">{currentSentence}</p>
    </div>
  );
};

export default Week5S4;
