import { Fragment } from "react";

const Week4S4 = (props) => {
  const { scenario } = props;

  const text = (
    <>
      <p className="typed">
        With very little time left, you decide to get creative and come up with
        a new plan to save Tweeter.
      </p>
      <p className="typed">
        After days of planning, you settle on two options:
      </p>
      <p className="typed">
        Use your coding skills to create a virtual version of Tweeter.
      </p>
      <p className="typed">
        Or use those skills to build a time machine and prevent the problem from
        even happening
      </p>
    </>
  );
  return (
    <div className="scenario">
      {scenario ? <p className="scenario-text">{scenario}</p> : text}
    </div>
  );
};

export default Week4S4;
