import { Fragment } from "react";

const Week4S2 = (props) => {
  const { scenario } = props;

  const text = (
    <>
      <p className="typed">
        You are now in jail and need to find a way to escape so you can continue
        your mission to save Tweeter.
      </p>
      <p className="typed">
        Convieniently. In your cell, there happens to be a dusty laptop that
        still happens to power on
      </p>
      <p className="typed">
        Alternatively, you could take your chances with the gaurds who seem to
        be busy outside your cell.
      </p>
      <p className="typed">What do you choose to do?</p>
    </>
  );
  return (
    <div className="scenario">
      {scenario ? <p className="scenario-text">{scenario}</p> : text}
    </div>
  );
};

export default Week4S2;
