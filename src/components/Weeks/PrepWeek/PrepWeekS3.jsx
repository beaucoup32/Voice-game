import useTTS from "../../../hooks/useTTS";

const PrepWeekS3 = (props) => {
  const { scenario } = props;

  const currentSentence = useTTS(scenario);
  const challenge =
    "Fresh out of coffee beans and hallucinating code arithmatic, do you choose to continue this grueling journey? or return to the comfort of your old life?";

  return (
    <div className="scenario">
      <p className="scenario-text">{currentSentence}</p>
      {currentSentence === challenge && (
        <div className="image-container">
          <img
            className="scenario-gif fork"
            src="images/prepwks3fork.gif"
            alt="error-comp"
          />
        </div>
      )}
    </div>
  );
};

export default PrepWeekS3;
