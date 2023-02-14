import { useState, useEffect } from "react";
import "./week3.css";
import useTTS from "../../../hooks/useTTS";

const Week3 = (props) => {
  const WEEK_3_S1 = "WEEK_3_S1";
  const { playerName, transition, setNavText } = props;
  const [scenario, setScenario] = useState(
    "It's the start of the third week of the coding/programming bootcamp and the technical interview and test are just around the corner! 💻👨‍💻📈 Time to brush up those skills and bring your A-game! 💪🔥💯"
  );

  useEffect(() => {
    setTimeout(() => {
      setScenario(
        `Oh no! 💥 ${playerName} realizes they need to level up their coding skills like a boss 💪 if they want to crush the technical interview and test with flying colors 🌈!`
      );
    }, 4000);

    setTimeout(() => {
      setScenario(
        `${playerName} decides to spend the entire day studying and practicing coding. 💻📚💻⏰ They're determined to ace the technical interview and test! 💪💻🎓`
      );
    }, 8000);

    setTimeout(() => {
      setScenario(
        `Suddenly, the tinyApp project assigned earlier that week comes to mind, 💡💡💡 and ${playerName} decides to work on it to brush up their skills and impress the instructor 🤩😎.`
      );
    }, 14000);

    setTimeout(() => {
      setScenario("");
      transition(WEEK_3_S1);
      setNavText("WEEK 3: SCENARIO 1");
    }, 18000);
  }, [playerName, transition, setNavText]);

  return <p className="week3-intro">{scenario}</p>;
};

export default Week3;
