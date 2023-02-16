//import "./week3.css";
import useTTS from "../../../hooks/useTTS";

export default function Week3(props) {
  const { scenario } = props;

  const currentSentence = useTTS(scenario || "");

  return (
    <div className="week-3-container">
      <p className="week-3-intro">{currentSentence}</p>
      <img
        src="https://st.depositphotos.com/1037238/4364/v/450/depositphotos_43641985-stock-illustration-computer-programmer-working-on-his.jpg"
        alt=""
        className="home-img"
      />
    </div>
  );
}

//   useEffect(() => {
//     setTimeout(() => {
//       setScenario(
//         "It's the start of the third week of the coding/programming bootcamp and the technical interview and test are just around the corner! 💻👨‍💻📈 Time to brush up those skills and bring your A-game! 💪🔥💯"
//       );
//     }, 4000);

//     setTimeout(() => {
//       setScenario( `${props.playerName} decides to spend the entire day studying and practicing coding. 💻📚💻⏰ They're determined to ace the technical interview and test! 💪💻🎓`

//       );
//     }, 8000);

//     setTimeout(() => {
//       setScenario(

//   }, []);

//   return <p className="week-3-intro">{scenario}</p>;
// }

