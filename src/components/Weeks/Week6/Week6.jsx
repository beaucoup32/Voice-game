import { useState, useEffect, useMemo } from "react";

export default function Week6(props) {

  const [scenario, setScenario] = useState("");
  const [index, setIndex] = useState(0);


  const welcome = useMemo(
    () => [
      `Congratulations, on making it to Mid-Term week ${props.playerName}.`,
      "You are assigned a random group with colleagues Kii Ner and Neva Derr.",
      "You study until you can barely Function",
      "Now let's have some fun, guy!",
      "What do you want to do next?"      
    ],
    []
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => {
        if (prev === welcome.length - 1) {
          clearInterval(timer);
          return prev;
        }
        return prev + 1;
      });
    }, 4500);
    return () => clearInterval(timer);
  }, [setIndex, welcome.length]);

  useEffect(() => {
    setScenario(welcome[index]);
  }, [index, welcome, setScenario]);

  return (

  <h1>{props.scenario ? props.scenario : scenario}</h1>  
  );
}
  const [scenario, setScenario] = useState(
    
  );

  useEffect(() => {
    setTimeout(() => {
      setScenario(
        
      );
      setTimeout(() => {
        setScenario("You will have to coordinate together to create a full stack app from scratch.");
        setTimeout(() => {
          setScenario(
            "Your team will need to chose a Project");
          setTimeout(() => {
            setScenario( scenario + " What should you do?");
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
