import useTTS from "../hooks/useTTS";

const ConfirmName = (props) => {
  // set player name
  const { scenario } = props;

  const currentSentence = useTTS(scenario);

  return (
    <div className="container">
      <h2>{currentSentence}</h2>
      {/* <h4>Say yes to confirm your name as {playerName}</h4> */}
    </div>
  );
};

export default ConfirmName;
