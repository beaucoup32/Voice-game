import "./PrepWeek.css";
import { useEffect } from "react";

const PrepWeekS1 = (props) => {
  const {scenario, setScenario} = props;

  const challenge = "You breeze through the first 1/4 of the challenges, feeling confident, do you choose to take a quick break and continue or reward yourself with a round of TEKKEN?"

  const textOutput = useTTS([
    "You are one of the lucky few to get accepted into a prestigious coding  bootcamp, eager to learn new skills and launch your tech career.",
    "Every decision you make will determine your path and impact your success.",
    "It's Prep week and you are faced with your first challenge.",
    "You are tasked to complete a series of coding modules and quizzes to prepare you for the weeks ahead.",
    challenge
  ]);

  // const text = (
  //   <>
  //     <p className="typed prep">
        
  //     </p>
  //     <p className="typed prep">
  //       Every decision you make will determine your path and impact your
  //       success. It's Prep week and you are faced with your first challenge. You
  //       are tasked to complete a series of coding modules and quizzes to prepare
  //       you for the weeks ahead.
  //     </p>
  //     <p className="typed prep">
  //       You breeze through the first 1/4 of the challenges, feeling confident,
  //       do you choose to take a quick break and continue or reward yourself with
  //       a round of TEKKEN?
  //     </p>
  //   </>
  // );
  
  useEffect(() => {
    setScenario(textOutput)
  },[textOutput, setScenario])

  return (
    <div className="scenario">
      <p className="scenario-text">{scenario}</p>
      {scenario === challenge && (

      <div className="image-container">
        <img src="images/prepwks1tekken.gif" alt="tekken-gif" className="scenario-gif tekken" />
      </div>
      )}
    </div>
  );
};

export default PrepWeekS1;
