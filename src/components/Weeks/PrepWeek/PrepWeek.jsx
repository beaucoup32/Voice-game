import { useState, useEffect } from "react";
import useTTS from "../../../hooks/useTTS";

const PrepWeek = () => {
  const [scenario, setScenario] = useState("");

  //extracts current from useTTS after providing an array of sentences
  const { sentences, current, setStart, end } = useTTS([
    "Welcome to bootcamp!",
    "Here you will be put through a impossible set of scenarios to hone your coding skills to become an expert programmer",
    "In this game, use your voice to determine your actions.",
    "If you get stuck, say 'Hint' to get some help. Are you ready?",
  ]);

  //enables useTTS until sentence array ends
  useEffect(() => {
    end ? setStart(false) : setStart(true);
  }, [end]);

  //updates scenario to match usTTS current sentence
  useEffect(() => {
    setScenario(sentences[current]);
  }, [sentences, current]);

  return (
    <>
      {/* replace with appropriate gif */}
      <img src="images/lighthouse-zoom.gif" className="scene-gif" />
      <p className="prep-week-intro">{scenario}</p>
    </>
  );
};

export default PrepWeek;

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
