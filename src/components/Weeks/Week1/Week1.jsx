import { useState, useEffect } from "react";

export default function Week1(props) {
  const [scenario, setScenario] = useState(
    `Congratulations ${props.playerName}! It looks like you've completed all your Prep Work.`
  );

  useEffect(() => {
    setTimeout(() => {
      setScenario(
        "What's that smell you ask? Well, you can only make it in the Lighthouse during low-tide."
      );
      setTimeout(() => {
        setScenario("Please be careful as you trek into Lighthouse Labs");
        setTimeout(() => {
          setScenario(
            "The ground is wet, reeking of Functional Fungus, Objective Oysters, Conditional Coral, Arrays of Anemones, and Looping Leeches"
          );
          setTimeout(() => {
            setScenario("Which way do you want to go?");
          }, 9000);
        }, 4500);
      }, 4500);
    }, 4500);
  }, []);

  return (
    <>
      <h1>{props.scenario ? props.scenario : scenario}</h1>
      <img src="images/lighthouse-zoom.gif" className="scene-gif"/>
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
