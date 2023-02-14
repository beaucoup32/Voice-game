import useTTS from "../../../hooks/useTTS";

const Week5S4 = (props) => {
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
//     <p className="typed">
      // After inspecting the hackers database table you find the only solution
      // is to get rid of it.
//     </p>
//     <p className="typed">What command will get the job done?</p>
//   </>
// );
// return (
//   <div className="scenario">
//     {scenario ? <p className="scenario-text">{scenario}</p> : text}
//   </div>
// );

export default Week5S4;
