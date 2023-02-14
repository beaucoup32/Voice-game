import "./Week1.css";
import useTTS from "../../../hooks/useTTS";

export default function Week1S2(props) {
  const { scenario } = props;

  const currentSentence = useTTS(scenario);
  return (
    <>
        <h1>{currentSentence}</h1>
      <img src="images/oysters.gif" alt="oysters-gif" className="scene-gif oysters" />
    </>
  );
}

// export default function Week1S2(props) {

//   const {scenario} = props;

//   return (

//     <p>{scenario ? scenario : "You look at the Objects around you and scratch your head. You vaguely recall Objects from your prep work studying. However something smells fishy.... these Objects are in fact Oysters. You find them tough to crack. You have been hammering away at them for hours. What do you want to now?"}</p>
//   );
// };
