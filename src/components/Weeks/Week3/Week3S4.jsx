import "./week3.css";
import useTTS from "../../../hooks/useTTS";

const Week3S4 = (props) => {
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
//         You're cruising along, working on your task like a boss 💪, but then BAM! Reality hits you like a ton of bricks 💥🧱...you might not be able to finish it in the allotted time frame. 😔🤯😤 Time to start negotiating for that extension or busting out some super-human productivity skills 💰💪😎.
//       </p>
//     </>
//   );

//   return (
//     <div className="scenario">
//       {scenario ? <p className="scenario-text">{scenario}</p> : text}
//     </div>
//   );
// };

export default Week3S4;