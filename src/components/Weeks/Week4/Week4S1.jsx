const Week4S1 = (props) => {
  const { scenario } = props;

  const text = (
    <>
      <p className="typed">
        You begin your day by reasearching the issue, but quickly realize you
        need to access to more information.
      </p>
      <p className="typed">What do you do?</p>
    </>
  );
  return (
    <div className="scenario">
      {scenario ? <p className="scenario-text">{scenario}</p> : text}
    </div>
  );
};

export default Week4S1;
