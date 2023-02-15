import "./week2.css";
import useTTS from "../../../hooks/useTTS";

export default function Week2S1(props) {
  const { scenario } = props;
  const currentSentence = useTTS(scenario)
  const challenge = "You decide to drink from the stream filled with curly braces?"
  
  return (
        <div className="scenario">
          <p className="scenario-text">{currentSentence}</p>
          {currentSentence === challenge && (
    
          <div className="image-container">           

              <figure className="home-figure">
                <img
                  src="https://st.depositphotos.com/1429923/3996/v/600/depositphotos_39965389-stock-illustration-flat-vector-illustration-of-programmer.jpg"
                  alt="Image 3"
                  className="home-img"
                />
                </figure>
          </div>
          )}
        </div>
      );
}
//     <>
//       <p className="typed">
//       You decide to drink from the stream filled with curly braces.
//       </p>
//       <p className="typed">
//         The CEO is impressed with your work so far, but the design team has
//         just sent over a new design that changes everything.
//       </p>
//     </>
//   );
//   return (
//     <div className="scenario">
//       {scenario ? <p className="scenario-text">{scenario}</p> : text}
//     </div>
//   );
// };

// export default Week2S1;
