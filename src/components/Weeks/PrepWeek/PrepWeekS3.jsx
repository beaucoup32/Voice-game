import useTTS from "../../../hooks/useTTS";
const PrepWeekS3 = (props) => {
  const { scenario } = props;

  const currentSentence = useTTS(scenario);

  return (
    <div className="scenario">
      <p className="scenario-text">{currentSentence}</p>
    </div>
  );
};

export default PrepWeekS3;
