import useTTS from "../../../hooks/useTTS";

const Week4S3 = (props) => {
  const { scenario } = props;

  const currentSentence = useTTS(scenario);

  return (
    <div className="scenario">
      <p className="scenario-text">{currentSentence}</p>
    </div>
  );
};

// const text = (
//   <>
//     <p className="typed">
//       You finally find the source of the problem and realize that the issue
//       can be fixed by manually going into Tweeter's servers.
//     </p>
//     <p className="typed">How will you get there?</p>
//   </>
// );
// return (
//   <div className="scenario">
//     {scenario ? <p className="scenario-text">{scenario}</p> : text}
//   </div>
// );
export default Week4S3;
