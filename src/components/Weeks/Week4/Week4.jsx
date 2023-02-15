import useTTS from "../../../hooks/useTTS";

const Week4 = (props) => {
  const { scenario } = props;

  const currentSentence = useTTS(scenario);

  return (
    <div className="scenario">
      <p className="scenario-text">{currentSentence}</p>
    </div>
  );
};

// const [scenario, setScenario] = useState(
//   "You wake up to an emergency Zoom meeting by the Head director of the bootcamp."
// );

// // check hooks/useCommand for commands
// useEffect(() => {
//   setTimeout(() => {
//     setScenario(
//       "Tweeter has been hacked and is on the brink of destruction!"
//     );
//   }, 4000);

//   setTimeout(() => {
//     setScenario(
//       `Totally at random, the Head Director assigns the task of saving Tweeter to ${playerName}`
//     );
//   }, 8000);

//   setTimeout(() => {
//     setScenario(
//       `${playerName}, fearing being called a chicken in front of their peers, decides to take on the challenge`
//     );
//   }, 14000);

//   setTimeout(() => {
//     setScenario("");
//     transition(WEEK_4_S1);
//     setNavText("WEEK 4: SCENARIO 1");
//   }, 18000);
// }, [playerName, transition, setNavText]);

// return <p className="week4-intro">{scenario}</p>;

export default Week4;
