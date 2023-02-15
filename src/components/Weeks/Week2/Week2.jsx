import "./week2.css";
import useTTS from "../../../hooks/useTTS";

export default function Week2(props) {
  const { scenario } = props;

  const currentSentence = useTTS(scenario || "");

  return (
    <div className="week-2-container">
      <p className="week-2-intro">{currentSentence}</p>
      <img
        src="https://miro.medium.com/max/1400/0*C-cPP9D2MIyeexAT.gif"
        alt=""
        className="home-img"
      />
    </div>
  );
}