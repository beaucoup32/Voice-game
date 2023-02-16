import "./week3.css";
import useTTS from "../../../hooks/useTTS";

const Week32S = (props) => {
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
//         You're working on a task given by the instructor, to design a web page.👨‍💻
//       </p>
//       <p className="typed">
//         You start working on it and everything is going well, but then suddenly you come across an error.🕵️‍♂️: 🕵️‍♂️
//       </p>
//       <p className="typed">
//         What do you do? Do you ask for help from your classmates or do you try to fix it on your own?🤔🤔🤔
//       </p>
//     </>
//   );

//   return (
//     <div className="scenario">
//       {scenario ? <p className="scenario-text">{scenario}</p> : text}
//     </div>
//   );
// };

export default Week32S;
