import useTTS from "../../../hooks/useTTS";

export default function PrepWeek(props) {
  const { scenario } = props;

  //updates scenario each time current sentence changes
  const currentSentence = useTTS(scenario);

  return (
    <div className="prep-week-container">
      <p className="prep-week-intro">{currentSentence}</p>
    </div>
  );
}
