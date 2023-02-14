import useTTS from "../../../hooks/useTTS";

const Week5S3 = (props) => {
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
//     <p className="typed">We're finally in the Database!</p>
//     <p className="typed">
//       You find an out of place table named 'hackers(do not touch)'. Suddenly,
//       your phone rings.
//     </p>
//     <p className="typed">
//       Its mom. Oh no. Its been 5 weeks since youve facetimed her and she's not
//       happy.
//     </p>
//     <p className="typed">What do you do?</p>
//   </>
// );
// return (
//   <div className="scenario">
//     {scenario ? <p className="scenario-text">{scenario}</p> : text}
//   </div>
// );

export default Week5S3;
