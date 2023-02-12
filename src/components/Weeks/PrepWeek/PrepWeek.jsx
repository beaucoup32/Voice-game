import useDisplayTTS from "../../../hooks/useDisplayTTS";
import { useEffect, useState } from "react";

export default function PrepWeek() {
  const [scenario, setScenario] = useState("");

  /* useDisplay relays an array of sentences to useTTS & returns textOutput sentence being spoken */
  const textOutput = useDisplayTTS([
    "Welcome to bootcamp!",
    "Here you will be put through a impossible set of scenarios to hone your coding skills to become an expert programmer",
    "In this game, use your voice to determine your actions.",
    "If you get stuck, say 'Hint' to get some help. Are you ready?",
  ]);
  
  //updates scenario each time current sentence changes
  useEffect(() => {
    setScenario(textOutput);
  }, [textOutput]);

  return (
    <>
      {/* replace with appropriate gif */}
      <img src="images/lighthouse-zoom.gif" className="scene-gif" />
      <p className="prep-week-intro">{scenario}</p>
    </>
  );
}

// const [scenario, setScenario] = useState("Welcome to bootcamp!");
// // check hooks/useCommand for commands
// useEffect(() => {

//   setTimeout(() => {
//     setScenario(
//       "Here you will be put through a impossible set of scenarios to hone your coding skills to become an expert programmer"
//       );
//     }, 4000);

//     setTimeout(() => {
//       setScenario("In this game, use your voice to determine your actions.");
//     }, 10000);

//   setTimeout(() => {
//     setScenario("If you get stuck, say 'Hint' to get some help");
//   }, 15000);

//   setTimeout(() => {
//     setScenario("Are you ready?");
//   }, 19000);
// }, []);
