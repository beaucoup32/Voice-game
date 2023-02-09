import { Fragment } from "react";

const PrepWeekS3 = (props) => {
  const { scenario } = props;
  const text = (
    <>
      <p className="typed">
        Several days pass and you've finaly submitted your last GIST.
      </p>
      <p className="typed">
        Fresh out of coffee beans and hallucinating code arithmatic, do you
        choose to continue this grueling journey? or return to the comfort of
        your old life?
      </p>
    </>
  );
  return (
    <div className="scenario">
      {scenario ? <p className="scenario-text">{scenario}</p> : text}
    </div>
  );
};

export default PrepWeekS3;
