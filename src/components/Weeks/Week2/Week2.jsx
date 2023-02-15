import "./week2.css";
import useTTS from "../../../hooks/useTTS";

export default function Week2(props) {
  const { scenario } = props;

  const currentSentence = useTTS(scenario || "");

  return (
    <div className="week-2-container">
      <p className="week-2-intro">{currentSentence}</p>
      <img
        src="https://st.depositphotos.com/1429923/3996/v/600/depositphotos_39965389-stock-illustration-flat-vector-illustration-of-programmer.jpg"
        alt=""
        className="home-img"
      />
    </div>
  );
}