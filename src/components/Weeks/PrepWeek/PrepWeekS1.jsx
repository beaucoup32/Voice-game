import "./PrepWeek.css";
import { Fragment } from "react";
const PrepWeekS1 = (props) => {
  const { scenario } = props;

  const text = (
    <>
      <p className="typed">
        You are one of the lucky few to get accepted into a prestigious coding
        bootcamp, eager to learn new skills and launch your tech career.
      </p>
      <p className="typed">
        Every decision you make will determine your path and impact your
        success. It's Prep week and you are faced with your first challenge. You
        are tasked to complete a series of coding modules and quizzes to prepare
        you for the weeks ahead.
      </p>
      <p className="typed">
        You breeze through the first 1/4 of the challenges, feeling confident,
        do you choose to take a quick break and continue or reward yourself with
        a round of TEKKEN?
      </p>
    </>
  );
  return (
    <div className="scenario">
      {scenario ? <p className="scenario-text">{scenario}</p> : text}
    </div>
  );
};

export default PrepWeekS1;