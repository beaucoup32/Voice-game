import { useState, useEffect, useMemo } from "react";

export default function Week1S2(props) {
  const [scenario, setScenario] = useState("");
  const [index, setIndex] = useState(0);


  const welcome = useMemo(
    () => [
      "You look at the Objects around you and scratch your head",
      "You vaguely recall Objects from your prep work studying",      
      "However something smells fishy.... these Objects are actually Oysters!", 
      "Unfortunately you find these Objects are a tough shell to crack",
      "You have been hammering away at them for hours. What do you want to do now?"
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
    <>
      <h1>{props.scenario ? props.scenario : scenario}</h1>
      <img src="images/LighthouseZoom.gif" className="scene-gif"/>
    </>
  );
}

// export default function Week1S2(props) {

  
//   const {scenario} = props;

//   return (
    
//     <p>{scenario ? scenario : "You look at the Objects around you and scratch your head. You vaguely recall Objects from your prep work studying. However something smells fishy.... these Objects are in fact Oysters. You find them tough to crack. You have been hammering away at them for hours. What do you want to now?"}</p>
//   );
// };

