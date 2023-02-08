import { useEffect, useState, useMemo } from "react";
// import useVisualMode from "./useVisualMode";
import useListen from "./useListen";

export default function useCommand(props) {
  const {
    mode,
    transition,
    setResponse,
    handleTTS,
    setPlayer,
    player,
    setNavText,
    setScenario,
    setLives,
    lives,
    big,
    setBig,
    death,
    setDeath,
    mushroom,
    setMushroom,
  } = props;
  const [commands, setCommands] = useState([]);
  const { listenContinuously, transcript, resetTranscript } =
    useListen(commands);
    
    useEffect(() => {
    const staticCommands = [{
      // this command will clear the response message
      // when triggered, it will set the response message to an empty string ""
      // and reset the voice transcript to allow for new voice commands to be recorded.
      command: ["reset", "clear"],
      callback: () => {
        resetTranscript();
      },
      isFuzzyMatch: true,
    },
    {
      command: "Marco",
      callback: () => {
        setResponse("Polo?");
        handleTTS();
        // transcript resets when command is triggered
        resetTranscript();
      },
    }]
    switch (mode) {
      case "HOME":
        setCommands([
          ...staticCommands,
          {
            command: "Ping",
            callback: () => {
              setResponse("Pong!");
              handleTTS();
              resetTranscript();
            },
          },
          {
            command: ["Start", "thought"],
            callback: () => {
              setResponse("Starting Adventure!");
              handleTTS();

              // changes mode to show GAMESTART component
              transition(GAMESTART);
              resetTranscript();
            },
            isFuzzyMatch: true,
          },
        ]);
        break;
      case "GAMESTART":
        setCommands([
          ...staticCommands,
          {
            command: ["home"],
            callback: () => {
              transition(HOME);
              resetTranscript();
              setLives(0);
            },
            isFuzzyMatch: true,
          },
          {
            command: "(My name is) :name",
            callback: (name) => {
              setResponse(`Did you say ${name}?`);
              setPlayer(name);
              transition(ConfirmName);
              // transcript resets when command is triggered
              resetTranscript();
            },
          },
        ]);
        break;
      case "ConfirmName":
        setCommands([
          ...staticCommands,
          {
            command: ["reset", "clear", "no"],
            callback: () => {
              setResponse("Lets try this again..");
              transition(GAMESTART);
              setPlayer("");
              resetTranscript();
            },
            isFuzzyMatch: true,
          },
          {
            command: ["yes", "confirm"],
            callback: () => {
              setResponse(`Welcome to hell ${player} 😈`);
              setNavText("PREP WEEK");
              transition(PREPWEEK);
              resetTranscript();
              setLives(3);
            },
            isFuzzyMatch: true,
          },
        ]);
        break;
      case "PREP_WEEK":
        setCommands([
          ...staticCommands,
          {
            command: ["home"],
            callback: () => {
              transition(HOME);
              resetTranscript();
            },
          },
          {
            command: "no",
            callback: () => {
              setResponse("🐔🐔🐔");
              setNavText("Say 'Start' to begin.");
              transition(HOME);
              resetTranscript();
            },
          },
          {
            command: ["yes", "yes (i am)", "yeah"],
            callback: () => {
              setNavText("PREP WEEK: SCENARIO 1");
              setResponse("");
              transition(PREPWEEKS1);
              resetTranscript();
            },
            isFuzzyMatch: true,
          },
        ]);
        break;
      case "PREP_WEEK_S1":
        setCommands([
          {
            command: ["(take a quick) break", "(short) break", "keep going", "(quick) break", "(take a) break"],

            callback: () => {
              setResponse("That one was easy 🥱");
              transition(PREPWEEKS2);
              setNavText("PREP WEEK: SCENARIO 2");
              resetTranscript();
            },
            isFuzzyMatch: true,
          },
          {
            command: ["reward (myself)", "(play) tekken"],
            callback: () => {
              setResponse("😬");
              setScenario(
                "Unfortunatly the exictement from making it into bootcamp threw off your game, after losing your rank you decide to continue your course work"
              );

              setLives(lives - 1);
              // after a delay, will continue on to next scenario
              setTimeout(() => {
                setNavText("PREP WEEK: SCENARIO 2");
                transition(PREPWEEKS2);
                setScenario("");
              }, 5000);
              resetTranscript();
            },
            isFuzzyMatch: true,
          },
        ]);
        break;
      case "PREP_WEEK_S2":
        setCommands([
          {
            command: ["(ask for) help", "ask a *"],
            callback: () => {
              setScenario(
                "After reaching out for some assistance, a peer offers to lend a hand. you finaly figure where your bug was and fix that pesky function!"
              );

              setResponse("Good call 👍");

              setTimeout(() => {
                transition(PREPWEEKS3);
                setNavText("PREP WEEK: SCENARIO 3");
                setScenario("");
              }, 5000);
              resetTranscript();
            },
          },
          {
            command: ["google", "* online"],
            callback: () => {
              setScenario(
                "After searching online for answers you come across a helpful video tutorial. you finaly figure where your bug was and fix that pesky function!"
              );

              setResponse("Thank god for Google search 😅");

              setTimeout(() => {
                transition(PREPWEEKS3);
                setNavText("PREP WEEK: SCENARIO 3");
                setScenario("");
                setResponse("");
              }, 5000);
              resetTranscript();
            },
          },
          {
            command: ["continue", "press on"],
            callback: () => {
              setScenario(
                "Hours pass and its late. Very late. At 2 AM you finaly figure where your bug was and fix that pesky function... But at what cost?"
              );

              setResponse("Maybe you should've reached out for help 🤷");
              setLives(lives - 1);

              setTimeout(() => {
                transition(PREPWEEKS3);

                setNavText("PREP WEEK: SCENARIO 3");
                setScenario("");
                setResponse("");
              }, 5000);
              resetTranscript();
            },
          },
          {
            command: ["give up"],
            callback: () => {
              setScenario(
                "You decide this bootcamp is too difficult for you and walk away from your laptop in shame..."
              );

              setResponse("Well... coding isnt for everyone");

              // set lives to 0 and transition to game over
              setLives(0);

              setTimeout(() => {
                transition(HOME);
                setNavText("Say 'Start' to begin.");
                setScenario("");

                setResponse("");
              }, 5000);
              resetTranscript();
            },
          },
        ]);
        break;
      case "PREP_WEEK_S3":
        setCommands([
          {
            command: ["continue", "yes"],
            callback: () => {
              setScenario(
                "Your eyes light up fircely as you add an order of instant coffee to your amazon cart as you get ready for the following week"
              );

              setResponse("Good luck! 😏");

              setTimeout(() => {
                transition(WEEK_1);
                setNavText("WEEK 1: Wading into Lotide");
                setScenario("");
                setResponse("");

              }, 6000);
              resetTranscript();
            },
          },
          {
            command: ["no", "stop", "(I) quit", "(return to) old life", "give up"],
            callback: () => {
              setScenario(
                "Fearing you may not be cut out to be a developer you decide to opt out and restock on your precious coffee beans. Also you slip on a banana peel and die"
              );
              setResponse("Had a feeling you'd say that 🥱");

              setLives(0);

              setTimeout(() => {
                transition(HOME);
                setNavText("Say 'Start' to begin.");
                setScenario("");

              }, 7000);
              resetTranscript();
            },
          },
        ]);
        break;
      case "WEEK_1":
      case "WEEK_1B":
        setCommands([
          ...staticCommands,
          {
            command: ["restart section"],
            callback: () => {
              setTimeout(() => {
                transition(WEEK_1);
                setNavText("WEEK 1: Wading into Lotide");
                setScenario("");
                setResponse("");

              }, 2000);
              resetTranscript();
            },
          },
          {
            command: ["Function", "Fungus", "Mushroom(s)"],

            callback: () => {
              setResponse("You manage to muster enough muscle memory to move toward the Mushrooms");
              setTimeout(() => {
                setNavText("W1: Fun Fun Fn(Fungus)");
                transition(WEEK_1_S1);
                setScenario("");
              }, 3000);
              resetTranscript();
            },
            isFuzzyMatch: true,
          },
          {
            command: ["Object", "Objective", "Oyster(s)"],

            callback: () => {
              setResponse("You saunter slyly to sneak up on some shellfish");
              setTimeout(() => {
                transition(WEEK_1_S2);
                setNavText("W1: { Objective: Oysters },");
                setScenario("");
              }, 3000);
              resetTranscript();
            },
            isFuzzyMatch: true,
          },
          {
            command: ["Contitionals", "Coral"],

            callback: () => {
              setResponse("You cruise across the seascape to see cool colored Coral closer");
              setTimeout(() => {
                setNavText("W1: If (Condition) then Coral");
                transition(WEEK_1_S3);
                setScenario("");
              }, 3000);
              resetTranscript();
            },
            isFuzzyMatch: true,
          },
          {
            command: ["Array (of Anemones)", "Anemone", "An Enemy", "Anemones", "An Enemies"],

            callback: () => {
              setResponse("You agree to amble along your adventure and approach an Array of Anemones");
              setTimeout(() => {
                setNavText("W1: Array = [ Anemones ] ");
                transition(WEEK_1_S4);
                setScenario("");
              }, 3000);

              resetTranscript();
            },
            isFuzzyMatch: true,
          },
          {
            command: ["Loop", "Leech", "Looping Leeches"],

            callback: () => {
              setResponse("You'd like to linger no longer, so let's look at lots of Looping Leeches");
              setTimeout(() => {
                setNavText("W1: for (Leech of Leeches)");
                transition(WEEK_1_S4);
                setScenario("");
              }, 3000);
              resetTranscript();
            },
            isFuzzyMatch: true,
          },
          {
            command: ["Lighthouse", "Entrance", "Door"],

            callback: () => {
              setResponse(`Silly ${player}, you can't just warp there through a pipe like some video game.`);
              resetTranscript();
            },
            isFuzzyMatch: true,
          },
          {
            command: ["home", "bed", "back"],
            callback: () => {
              setScenario(
                "Fearing another step forward you choose to take a step back. The door hits you on the way out."
              );
              setResponse("Wow so much self doubt. Bye I guess 👋");

              setLives(0);

              setTimeout(() => {
                transition(HOME);
                setNavText("Say 'Start' to begin.");
                setScenario("");
                setResponse("");

              }, 7000);
              resetTranscript();
            },
          },
        ]);
        break;
      case "WEEK_1_S1":
        setCommands([
          {
            command: ["eat", "taste", "lick", "chew"],

            callback: () => {
              setResponse("You pop a tasty looking 🍄 into your mouth");
              const mushrooms = ["1up", "big", "poison"];
              const rngMush = mushrooms[Math.floor(Math.random() * 3)];
              switch(rngMush) {
                case "1up":
                  setResponse(`Dang check out the gamer accumen on ${player}!`);
                  setScenario("You found a secret 1up!");
                  setLives(lives + 1);
                  break;
                case "big":
                  setResponse(`Dang check out the gamer accumen on ${player}!`);
                  setScenario("You found a Super Mushroom! You quickly double in size");
                  setBig(true);
                  break;
                case "poison":
                  setResponse("This particular mushroom is not magically delicious");
                  setScenario("A few minutes pass and your tongue goes numb, your stomach begins to cramp up");
                  setTimeout(() => {
                    setResponse("it's magically DEADLY!");
                    setScenario("The Fn(Mushroom) hit you with an arrow function => 💘");
                }, 1000);
                setTimeout(() => {
                  setScenario("Oh no! You just can't handle *this* yet");
                  if (big) {
                    setResponse("You shrink back down to regular size");
                    setBig(false);
                  } else {
                    setResponse("You lost a life! 💔");
                    setLives(lives - 1);
                    if (lives === 0) {
                      setScenario("Many have died to mushrooms, you were just the Last of Us😏");
                      setDeath(true);
                    }
                    transition(HOME)
                  }
                }, 3000);
                break;
                default:
              }
                setTimeout(() => {
                  setResponse("");
                  setScenario("What do you want to do now?");
                }, 4000);
                resetTranscript();
            },
            isFuzzyMatch: true,
          },
          {
            command: ["take", "pocket", "keep"],

            callback: () => {
              if (!mushroom) {
                setResponse("Sure, why not. Mushroom foraging is legal, right?");
                setScenario(
                  "You decide to put a mushroom in your pocket for later"
                );
                setMushroom(true);
              }
              else {
                setResponse("Calm down greedy! You already have one.");
                setScenario(
                  "You overestimate your ability to carry mushrooms. You leave the rest of the mushrooms on the ground so others can have some too"
                );
                setMushroom(true);
              }

              setLives(lives - 1);
              // after a delay, will continue on to next scenario
              setTimeout(() => {
                setScenario("");
              }, 5000);
            },
            isFuzzyMatch: true,
          },
          {
            command: ["Leave", "get up", "stand"],

            callback: () => {
              if (big) {
                setResponse("You pounce to your feet, towering over the Functional Fungus");
                setScenario("You crushed the entire room into mush with your giant feet.");
              } else {
                setResponse("You rise to your feet to flee these fungi");
              }
              setTimeout(() => {
                setNavText("WEEK 1: Wading into Lotide");
                setResponse("Ovjective Oysters, Conditional Coral, Array of Anemones and Looping Leeches Awaie")
                transition(WEEK_1B);
              }, 3000);
              resetTranscript();
            },
            isFuzzyMatch: true,
          },
        ]);
        break;
      default:
        setCommands([]);
    }
  }, [mode]);
  return { commands, listenContinuously, transcript, resetTranscript };
}

const HOME = "HOME";
const GAMESTART = "GAMESTART";
const ConfirmName = "ConfirmName";
const PREPWEEK = "PREP_WEEK";
const PREPWEEKS1 = "PREP_WEEK_S1";
const PREPWEEKS2 = "PREP_WEEK_S2";
const PREPWEEKS3 = "PREP_WEEK_S3";
const WEEK_1 = "WEEK_1";
const WEEK_1B = "WEEK_1B";
const WEEK_1_S1 = "WEEK_1_S1";
const WEEK_1_S2 = "WEEK_1_S2";
const WEEK_1_S3 = "WEEK_1_S3";
const WEEK_1_S4 = "WEEK_1_S4";
