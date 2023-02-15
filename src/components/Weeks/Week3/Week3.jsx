import { useState, useEffect } from "react";
import "./week3.css";
import useTTS from "../../../hooks/useTTS";

export default function Week3(props) {
  const [scenario, setScenario] = useState(
    `Welcome to Week 3, ${props.playerName}! Let's begin!`
  );

  useEffect(() => {
    setTimeout(() => {
      setScenario(
        "It's the start of the third week of the coding/programming bootcamp and the technical interview and test are just around the corner! 💻👨‍💻📈 Time to brush up those skills and bring your A-game! 💪🔥💯"
      );
    }, 4000);

    setTimeout(() => {
      setScenario( `${props.playerName} decides to spend the entire day studying and practicing coding. 💻📚💻⏰ They're determined to ace the technical interview and test! 💪💻🎓`

      );
    }, 8000);

    setTimeout(() => {
      setScenario(
        `Suddenly, the tinyApp project assigned earlier that week comes to mind, 💡💡💡 and ${props.playerName} decides to work on it to brush up their skills and impress the instructor 🤩😎.`
      );
    }, 12000);

    setTimeout(() => {
      setScenario(`Suddenly, the tinyApp project assigned earlier that week comes to mind, 💡💡💡 and ${props.playerName} decides to work on it to brush up their skills and impress the instructor 🤩😎.`);
    }, 16000);
  }, []);

  return <p className="week-3-intro">{scenario}</p>;
}

