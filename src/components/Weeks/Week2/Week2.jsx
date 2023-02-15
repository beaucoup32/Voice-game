import "./week2.css";
import useTTS from "../../../hooks/useTTS";

export default function Week2(props) {
  const { scenario } = props;

  const currentSentence = useTTS(scenario || "");

  return (
    <div className="week-2-container">
      <p className="week-2-intro">{currentSentence}</p>
                <img
                  src="https://miro.medium.com/max/1400/0*C-cPP9D2MIyeexAT.gif"
                  alt="Image 4"
                  className="home-img"
                />
    </div>
  );
}

//   useEffect(() => {
//     setTimeout(() => {
//       setScenario(
//         "This week is focused on front-end development, get ready to dive into HTML, CSS, and JavaScript."
//       );
//     }, 4000);

//     setTimeout(() => {
//       setScenario(
//         "You're in the JavaScript Jungle. Be on the lookout for wild variables."
//       );
//     }, 8000);

//     setTimeout(() => {
//       setScenario("You come across a stream filled with curly braces. what you will do next?");
//     }, 12000);
//   }, []);

//   return <p className="week-2-intro">{scenario}</p>;
// }
