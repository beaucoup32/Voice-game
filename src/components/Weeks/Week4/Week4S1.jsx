import useTTS from "../../../hooks/useTTS";

const Week4S1 = (props) => {
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
//       You begin your day by reasearching the issue, but quickly realize you
//       need to access to more information.
//     </p>
//     <p className="typed">What do you do?</p>
//   </>
// );
// return (
//   <div className="scenario">
//     {scenario ? <p className="scenario-text">{scenario}</p> : text}
//   </div>
// );

export default Week4S1;
