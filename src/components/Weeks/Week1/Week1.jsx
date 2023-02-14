// import useDisplayTTS from "../../../hooks/useDisplayTTS";
import { useEffect, useState } from "react";
// import useARHook from "../../../hooks/useARHook";
import useTTS from "../../../hooks/useTTS";

export default function Week1(props) {
  // const [output, setOutput] = useState("");
  const { scenario } = props;

  const currentSentence = useTTS(scenario);

  return (
    <>
      <img src="images/lighthouse-zoom.gif" alt="" className="scene-gif" />
      <h1>{currentSentence}</h1>
    </>
  );
}

// to be set at transition to component:

//               setNavText("WEEK 1: Wading into Lotide");
//               setScenario(
//                 [ "initiating human voice",
//                   `Congratulations ${player}! It looks like you've completed all your Prep Work.`,
//                   // "What's that smell you ask?",
//                   // "Well, you can only make it inside the Lighthouse during low-tide.",
//                   // "Please be careful as you trek into Lighthouse Labs",
//                   // "The ground is wet, reeking of Functional Fungus, Objective Oysters, Conditional Coral, Arrays of Anemones, and Looping Leeches",
//                   "Where would you like to go first?",
//                 ]
//               );
//               setResponse("");
//               transition(WEEK_1);

/* Commands: 
    - Function / Fungus / Mushroom
    
    - Objects / Oyster
      
    - Conditionals / Coral
    
    - Array / Anemone
    
    - Loop / Leech
    
    - Lighthouse
      `Silly ${username}, you can't just warp there through a pipe like some video game.`
      "So seriously, which way do you want to go?"
*/
