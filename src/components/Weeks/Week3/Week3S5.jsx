import "./week3.css";
import useTTS from "../../../hooks/useTTS";

const Week3S5 = (props) => {
  const { scenario } = props;

  const currentSentence = useTTS(scenario);

  return (
    <div className="scenario">
      <p className="scenario-text">{currentSentence}</p>
    </div>
  );

};

//   const text = (
//     <>
//       <p className="typed">
//       Uh oh, deadline approaching πββοΈπ¨ Do you hit the panic button and ask for an extension π or do you unleash your superhero powers π¦ΈββοΈ and work harder to finish it on time? πͺ Bonus points if you get offered π° from your mentor for being a boss! π°πΌ
//       </p>
//     </>
//   );

//   return (
//     <div className="scenario">
//       {scenario ? <p className="scenario-text">{scenario}</p> : text}
//     </div>
//   );
// };

export default Week3S5;