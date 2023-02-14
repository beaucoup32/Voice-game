const ConfirmName = (props) => {
  // set player name
  const { playerName, scenario } = props;

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
