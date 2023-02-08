import { useState, useEffect } from "react";

export default function Week1(props) {
  const [scenario, setScenario] = useState("Welcome to bootcamp!");  
  
  useEffect(() => {
    setTimeout(() => {
      setScenario(
        `Congratulations ${props.playerName}! It looks like you've completed all your Prep Work.`
      );
    }, 1500);

    setTimeout(() => {
      setScenario("What's that smell you ask? Well, you can only make it in the Lighthouse during low-tide.");
    }, 6000);

    setTimeout(() => {
      setScenario("Please be careful as you trek into Lighthouse Labs");
    }, 3000);

    setTimeout(() => {
      setScenario("The ground is wet, reeking of Functional Fungus, Objective Oysters, Conditional Coral, Arrays of Anemones, and Looping Leeches");
    }, 6000);

    setTimeout(() => {
      setScenario("Which way do you want to go?");
    }, 9000);
  }, []);

  return <h1>{scenario}</h1>;
};

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
