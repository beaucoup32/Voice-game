import { useState, useEffect } from "react";

export default function Week1(props) {
  const [scenario, setScenario] = useState(
    `Congratulations on making it to Week 6,  ${props.playerName}. You will have no Lectures this week.`
  );

  useEffect(() => {
    setTimeout(() => {
      setScenario(
        "You have an assigned group with ."
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

  return <h1>{props.scenario ? props.scenario : scenario}</h1>;
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
