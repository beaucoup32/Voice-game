const ConfirmName = (props) => {
  // set player name
  const { playerName } = props;

  // commands:
  // yes/confirm - continue to prep week
  // no/reset/clear - resets name -> transition to gamestart

  return (
    <div className="container">
      <h2>Is your name :</h2>
      <h4>{playerName} ?</h4>
    </div>
  );
};

export default ConfirmName;