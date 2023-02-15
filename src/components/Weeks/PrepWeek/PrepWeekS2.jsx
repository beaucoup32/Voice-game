import useTTS from "../../../hooks/useTTS";

const PrepWeekS2 = (props) => {
  const { scenario } = props;
  const currentSentence = useTTS(scenario);

  const challenge =
    "After taking a quick break you continue on but struggle trying to get one of your functions to work, what do you do?";

  return (
    <div className="scenario">
      <p className="scenario-text">{currentSentence}</p>
      {currentSentence === challenge && (
        <div className="image-container">
          <img className="scenario-gif comp-pic" src="images/prepwks2func.gif" alt="error-comp" />
        </div>
      )}
    </div>
  );
};

export default PrepWeekS2;
