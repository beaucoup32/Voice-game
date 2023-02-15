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