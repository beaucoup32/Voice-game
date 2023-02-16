import "./week3.css";
import useTTS from "../../../hooks/useTTS";

const Week3S1 = (props) => {
  const { scenario } = props;

  const currentSentence = useTTS(scenario)
  const challenge = 
  `${props.playerName} decides to spend the entire day studying and practicing coding. 💻📚💻⏰ They're determined to ace the technical interview and test! 💪💻🎓`;

  return (
    <div className="scenario">
      <p className="scenario-text">{currentSentence}</p>
      {currentSentence === challenge && (
        <div className="image-container">           
      <img
        src="https://st.depositphotos.com/1429923/3996/v/600/depositphotos_39965389-stock-illustration-flat-vector-illustration-of-programmer.jpg"
        alt=""
        className="home-img"
            />         
        </div>
      )}
    </div>
  );
}
//   const text = (
//     <>
//       <p className="typed">
//         As you start working on the tinyApp project, you realize that you're
//         encountering several bugs.
//       </p>
//       <p className="typed">What do you do with so many 🐛🐛🐛🐛🐛🐛?</p>
//     </>
//   );
//   return (
//     <div className="scenario">
//       {scenario ? <p className="scenario-text">{scenario}</p> : text}
//     </div>
//   );
// };

export default Week3S1;
