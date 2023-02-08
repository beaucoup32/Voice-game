import { useState, useEffect } from "react";

const PrepWeek = () => {
  const [scenario, setScenario] = useState("Welcome to bootcamp!");

  useEffect(() => {
    setTimeout(() => {
      setScenario(
        "Here you will be put through a impossible set of scenarios to hone your coding skills to become an expert programmer"
      );
    }, 4000);

    setTimeout(() => {
      setScenario("In this game, use your voice to determine your actions.");
    }, 10000);

    setTimeout(() => {
      setScenario("If you get stuck, say 'Hint' to get some help");
    }, 15000);

    setTimeout(() => {
      setScenario("Are you ready?");
    }, 19000);
  }, []);

  return <h1>{scenario}</h1>;
};

export default PrepWeek;
