import useDisplayTTS from "../../../hooks/useDisplayTTS";
import { useEffect, useState } from "react";

export default function Week1(props) {
  const [scenario, setScenario] = useState("");

  /* useDisplay relays an array of sentences to useTTS & returns textOutput sentence being spoken */
  const textOutput = useDisplayTTS(props.scenario ? props.scenario : [
    `Congratulations ${props.playerName}! It looks like you've completed all your Prep Work.`,
    "What's that smell you ask?",
    "Well, you can only make it inside the Lighthouse during low-tide.",
    "Please be careful as you trek into Lighthouse Labs",
    "The ground is wet, reeking of Functional Fungus, Objective Oysters, Conditional Coral, Arrays of Anemones, and Looping Leeches",
    "Where would you like to go first?"
    
  ]);
  
  //updates scenario each time current sentence changes
  useEffect(() => {
    setScenario(textOutput);
  }, [textOutput, props.scenario]);

  return (
    {setScenario},
    <>
      <img src="images/lighthouse-zoom.gif" alt="" className="scene-gif" />
      <h1>{scenario}</h1>
    </>
  );
}


// SHOW: Lighthouse nearby across low water (with text overlay)

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
