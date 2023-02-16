import "./week3.css";
import useTTS from "../../../hooks/useTTS";

const Week3S3 = (props) => {
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
//       The instructor hands you a task that's due real soon, but you're thinking "No worries, I got this! 💪🕰️💰 (offer for overtime work). But then reality hits and you're like "Oh snap, this is actually a toughie!😓🤔💭"
//       </p>

//     </>
//   );

//   return (
//     <div className="scenario">
//       {scenario ? <p className="scenario-text">{scenario}</p> : text}
//     </div>
//   );
// };

export default Week3S3;
