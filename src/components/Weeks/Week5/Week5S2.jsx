import useTTS from "../../../hooks/useTTS";

const Week5S2 = (props) => {
  const { scenario } = props;

  const currentSentence = useTTS(scenario);

  return (
    <div className="scenario">
      <p className="scenario-text">{currentSentence}</p>
    </div>
  );
};
// const { scenario } = props;

// const text = (
//   <>
//     <p className="typed">You are greeted with a password input!</p>
//     <p className="typed">I wonder what the password could be...?</p>
//   </>
// );
// return (
//   <div className="scenario">
//     {scenario ? <p className="scenario-text">{scenario}</p> : text}
//   </div>
// );

export default Week5S2;
