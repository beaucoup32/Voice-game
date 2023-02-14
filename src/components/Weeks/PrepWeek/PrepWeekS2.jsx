
const PrepWeekS2 = (props) => {
  const { scenario } = props;
  const text = (
    <>
      <p className="typed">
        After taking a quick break you continue on but struggle trying to get
        one of your functions to work, what do you do?
      </p>
    </>
  );
  return (
    <div className="scenario">
      {scenario ? <p className="scenario-text">{scenario}</p> : text}
    </div>
  );
};

export default PrepWeekS2;
