import "./week2.css";
import useTTS from "../../../hooks/useTTS";

const Week2S2 = (props) => {
  const { scenario } = props;
  const currentSentence = useTTS(scenario);

  const challenge =
    "You're now faced with two options, do you choose to:";

  return (
    <div className="scenario">
      <p className="scenario-text">{currentSentence}</p>
      {currentSentence === challenge && (
        <div className="image-container">
              <figure className="home-figure">
                <img
                  src="https://st2.depositphotos.com/5313596/7758/v/600/depositphotos_77585368-stock-illustration-java-programmer-at-work.jpg"
                  alt="Image 2"
                  className="home-img"
                />
                <figcaption className="home-figcaption">Java Guru at Work</figcaption>
              </figure>
        </div>
      )}
    </div>
  );
};

//     <>
//       <p className="typed">
//         You're now faced with two options, do you choose to:
//       </p>
//       <ul>
//         <li>Spend the next few hours adapting the design to the existing code</li>
//         <li>Start from scratch and implement the new design correctly</li>
//       </ul>
//     </>
//   );
//   return (
//     <div className="scenario">
//       {scenario ? <p className="scenario-text">{scenario}</p> : text}
//     </div>
//   );
// };

 export default Week2S2;
