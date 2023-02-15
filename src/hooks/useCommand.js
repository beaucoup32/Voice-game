import { useEffect, useState } from "react";
import useListen from "./useListen";

export default function useCommand(props) {
  const {
    mode,
    transition,
    setResponse,
    // handleTTS,
    setPlayer,
    player,
    setNavText,
    setScenario,
    setLives,
    lives,
    setGameOverText,
    big,
    setBig,
    mushroom,
    setMushroom,
    f,
    o,
    c,
    a,
    l,
    setF,
    setO,
    setC,
    setA,
    setL,
    boolean,
    setBoolean,
    setImage
  } = props;

  // returns rand int between 0 - 9
  const randInt = () => {
    const max = 10;
    return Math.floor(Math.random() * max);
  };

  const [commands, setCommands] = useState([]);

  const { listenContinuously, transcript, resetTranscript, listening } =
    useListen(commands);
  const [async, setAsync] = useState(false);
  const [lodash, setLodash] = useState(false);
  const [inventory, setInventory] = useState([]);

  const staticCommands = [
    // {
    //   // this command will clear the response message
    //   // when triggered, it will set the response message to an empty string ""
    //   // and reset the voice transcript to allow for new voice commands to be recorded.
    //   command: ["reset", "clear"],
    //   callback: () => {
    //     resetTranscript();
    //   },
    //   isFuzzyMatch: true,
    // },
    // {
    //   command: ["Marco"],
    //   callback: () => {
    //     setScenario(["Polo?"]);
    //     // handleTTS();
    //     // transcript resets when command is triggered
    //     resetTranscript();
    //   },
    // },
    // {
    //   command: ["game over", "death", "quit"],
    //   callback: () => {
    //     transition(GAMEOVER);
    //     setGameOverText("Test: loreum ipsum loreum ipsum");
    //     resetTranscript();
    //   },
    //   isFuzzyMatch: true,
    // },
    {
      // testing for week 4
      command: ["week one", "week 1"],
      callback: () => {
        transition(PREPWEEKS3);
        setLives(3);
        setPlayer("Rebecca");
        setScenario([""]);
      },
      isFuzzyMatch: true,
    },
    // {
    //   // testing for week 5
    //   command: ["week 5"],
    //   callback: () => {
    //     transition(WEEK_5);
    //     setLives(3);
    //     setPlayer("Donny");
    //     setScenario([""]);
    //   },
    //   isFuzzyMatch: true,
    // },
    {
      // manually set lives for debugging
      command: ["set lives to :number"],
      callback: (number) => {
        if (!isNaN(number)) {
          setLives(number);
        }
        resetTranscript();
      },
    },
  ];

  useEffect(() => {
    switch (mode) {
      case "HOME":
        setCommands([
          ...staticCommands,
          {
            command: ["Start", "thought", "dot", "begin"],
            callback: () => {
              
              setScenario([
                "Loading human voice",
                // "Starting Adventure!",
                "It's time to Walk the Talk",
                "Please tell me your name",
              ]);
              setPlayer("");
              // handleTTS();

              // changes mode to show GAMESTART component
              transition(GAMESTART);
              setNavText("Speak into the mic 🎙️");
              resetTranscript();
            },
            isFuzzyMatch: true,
            matchInterim: true,
          },
        ]);
        break;
      case "GAMESTART":
        setCommands([
          ...staticCommands,
          {
            command: ["(My name is) :name"],
            callback: (name) => {
              setPlayer(name);
              setScenario([`Did you say ${name}?`]);
              transition(ConfirmName);
              // transcript resets when command is triggered
              resetTranscript();
            },
          },
        ]);
        break;
      case "GAME_OVER":
        setCommands([
          {
            command: ["home", "restart", "reset"],
            callback: () => {
              transition(HOME);
              setPlayer("");
              setNavText("Say 'Start' to begin.");
              resetTranscript();
            },
            isFuzzyMatch: true,
            matchInterim: true,
          },
        ]);
        break;
      case "ConfirmName":
        setCommands([
          {
            command: ["reset", "clear", "no"],
            callback: () => {
              setResponse("Lets try this again..");
              setScenario(["My bad, What is your name?"]);
              transition(GAMESTART);
              setPlayer("");
              resetTranscript();
            },
            isFuzzyMatch: true,
            matchInterim: true,
          },
          {
            command: ["yes", "confirm", "yeah", "yep", "yes (it is)"],
            callback: () => {
              resetTranscript();
              setLives(3);
              setResponse(`Welcome to hell ${player} 😈`);
              setNavText("PREP WEEK");
              setScenario([
                "Welcome to bootcamp!",
                "Here you will be put through an impossible set of scenarios to hone your coding skills and become an expert programmer",
                "In this game, use your voice to determine your actions.",
                "If you get stuck, say 'Hint' to get some help. Are you ready?",
              ]);
              transition(PREPWEEK);
            },
            isFuzzyMatch: true,
            // matchInterim: true,
          },
        ]);
        break;
      case "PREP_WEEK":
        setCommands([
          {
            command: ["no", "nope", "nevermind"],
            callback: () => {
              setResponse("🐔🐔🐔");
              setNavText("Say 'Start' to begin.");
              transition(HOME);
              resetTranscript();
            },
            matchInterim: true,
          },
          {
            command: ["yes", "yeah", "yep", "skip"],
            callback: () => {
              setNavText("PREP WEEK: SCENARIO 1");
              setResponse("");
              setScenario([
                "Every decision you make will determine your path and impact your success.",
                "It's Prep week and you are faced with your first challenge.",
                "You are tasked to complete a series of coding modules and quizzes to prepare you for the weeks ahead.",
                "You breeze through the first 1/4 of the challenges.",
                "Feeling confident, do you choose to take a quick break and keep going or reward yourself with a round of TEKKEN?",
              ]);
              transition(PREPWEEKS1);
              resetTranscript();
            },
            isFuzzyMatch: true,
            // matchInterim: true,
          },
        ]);
        break;
      case "PREP_WEEK_S1":
        setCommands([
          {
            command: [
              "(take a quick) break",
              "(short) break",
              "keep going",
              "(quick) break",
              "(take a) break",
            ],

            callback: () => {
              setResponse("That one was easy 🥱");
              setScenario([
                "After taking a quick break you continue on but struggle trying to get one of your functions to work, what do you do?",
              ]);
              transition(PREPWEEKS2);
              setNavText("PREP WEEK: SCENARIO 2");
              resetTranscript();
            },
            isFuzzyMatch: true,
            // matchInterim: true,
          },
          {
            command: ["reward (myself)", "(play) tekken"],
            callback: () => {
              setResponse("That was hard to watch... 😬");

              // current lives is 2
              setLives(lives - 1);
              setScenario([
                "Unfortunatly the excitement from making it into bootcamp threw off your game. After losing your rank to a kid half your age, you decide to continue on with your course work",
                "After taking a quick break you continue on but struggle trying to get one of your functions to work, what do you do?",
              ]);
              transition(PREPWEEKS2);

              setTimeout(() => {
                setNavText("PREP WEEK: SCENARIO 2");
                setResponse("");
              }, 6000);

              resetTranscript();
            },
            isFuzzyMatch: true,
            matchInterim: true,
          },
        ]);
        break;
      case "PREP_WEEK_S2":
        setCommands([
          {
            command: ["(ask for) help", "ask a *"],
            callback: () => {
              setResponse("Good call 👍");
              setScenario([
                "After reaching out for some assistance, a peer offers to lend a hand. You finaly figure where your bug was and fix that pesky function!",
                "Several days pass and you've finaly submitted your last GIST.",
                "Fresh out of coffee beans and hallucinating code arithmatic, do you choose to continue this grueling journey? or return to the comfort of your old life?",
              ]);

              transition(PREPWEEKS3);

              setTimeout(() => {
                setNavText("PREP WEEK: SCENARIO 3");
                setResponse("");
              }, 5000);
              resetTranscript();
            },
            isFuzzyMatch: true,
          },
          {
            command: ["google", "* online"],
            callback: () => {
              setResponse("Thank god for Google search 😅");
              setScenario([
                "After searching online for answers you come across a helpful video tutorial. You finaly figure where your bug was and fix that pesky function!",
                "Several days pass and you've finaly submitted your last GIST.",
                "Fresh out of coffee beans and hallucinating code arithmatic, do you choose to continue this grueling journey? or return to the comfort of your old life?",
              ]);

              transition(PREPWEEKS3);

              setTimeout(() => {
                setNavText("PREP WEEK: SCENARIO 3");
              }, 7000);
              resetTranscript();
            },
            isFuzzyMatch: true,
          },
          {
            command: ["continue", "press on", "keep going"],
            callback: () => {
              setResponse("Maybe you should've reached out for help 🤷");
              setScenario([
                "Hours pass and its late. Very late. At 2 AM you finaly figure where your bug was and fix that pesky function... But at what cost?",
                "Several days pass and you've finaly submitted your last GIST.",
                "Fresh out of coffee beans and hallucinating code arithmatic, do you choose to continue this grueling journey? or return to the comfort of your old life?",
              ]);

              transition(PREPWEEKS3);

              // current lives is 1 or 2
              setLives(lives - 1);

              setTimeout(() => {
                setNavText("PREP WEEK: SCENARIO 3");
              }, 7000);
              resetTranscript();
            },
            isFuzzyMatch: true,
            matchInterim: true,
          },
          {
            command: ["give up"],
            callback: () => {
              setScenario([
                "You decide this bootcamp is too difficult for you and walk away from your laptop in shame...",
              ]);

              setResponse("Well... coding isnt for everyone");

              // set lives to 0 and transition to game over
              setLives(0);

              transition(GAMEOVER);
              setGameOverText("Say 'restart' to return to Main Menu");
              setTimeout(() => {
                setResponse("");
              }, 7000);
              resetTranscript();
            },
            isFuzzyMatch: true,
          },
        ]);
        break;
      case "PREP_WEEK_S3":
        setCommands([
          {
            command: ["continue", "yes", "keep going"],
            callback: () => {
              setResponse("Good luck! 😏");
              setScenario([
                "Your eyes light up with new found determination as you add an order of instant coffee to your Amazon cart and prepare for the following week",
                `Congratulations ${player}! It looks like you've completed all your Prep Work.`,
                "What's that smell you ask?",
                "Well, you can only make it inside the Lighthouse during low-tide.",
                "Please be careful as you trek into Lighthouse Labs",
                "The ground is wet, reeking of Functional Fungus, Objective Oysters, Conditional Coral, Arrays of Anemones, and Looping Leeches",
                "Where would you like to go first?",
              ]);
              setTimeout(() => {
                setResponse("");
              }, 4000);
              transition(WEEK_1);
              setNavText("WEEK 1: Wading into Lotide");
              resetTranscript();
            },
            isFuzzyMatch: true,
            // matchInterim: true,
          },
          {
            command: [
              "no",
              "stop",
              "(I) quit",
              "(return to) old life",
              "give up",
            ],
            callback: () => {
              setScenario([
                "Fearing you may not be cut out to be a developer you decide to opt out and restock on your precious coffee beans. Also you slip on a banana peel and die",
              ]);
              setResponse("Had a feeling you'd say that 🥱");

              setLives(0);

              transition(GAMEOVER);
              setGameOverText("A banana peel? Really? 🤣🍌");

              setTimeout(() => {
                setNavText("Say 'restart' to return to Main Menu");
              }, 7000);
              resetTranscript();
            },
            isFuzzyMatch: true,
          },
        ]);
        break;
      case "WEEK_1":
      case "WEEK_1B":
        setCommands([
          ...staticCommands,
          {
            command: ["where (can I)", "repeat", "options"],
            callback: () => {
              // transition(WEEK_1B);
              // setTimeout(() => {
              //   transition(WEEK_1);
              // }, 1);
              setScenario([
                "Your options include: Lighthouse, Functional Fungus, Objective Oysters, Conditional Coral, Arrays of Anemones, and Looping Leeches",
              ]);
              resetTranscript();
            },
            isFuzzyMatch: true,
            matchInterim: true,
          },
          {
            command: ["Function", "Fungus", "Mushroom(s)"],

            callback: () => {
              if (f) {
                setResponse(
                  "You already learned about Functions, Where to now?"
                );
                transition(WEEK_1B);
                setTimeout(() => {
                  transition(WEEK_1);
                }, 1);
                setScenario([
                  "You already learned about Functions, Where to now?",
                ]);
              } else {
                setF(true);
                setResponse("You mosey over to the Mushrooms");
                setScenario([
                  "You mosey over to the Mushrooms",
                  "You find a lovely patch of Fungi and sit down atop them like the Cheshire Cat",
                  "You get up close and study how they Function",
                  "You study until 'YOU' can barely Function",
                  "Now let's have some fun guy!",
                  "What do you want to do next?",
                ]);
                setNavText("W1: Fun Fun Fn(Fungus)");
                transition(WEEK_1_S1);
              }

              resetTranscript();
            },
            isFuzzyMatch: true,
          },
          {
            command: ["Objective (Oysters)", "Objects", "Oyster"],

            callback: () => {
              if (o) {
                setResponse("You already learned about Objects, Where to now?");
                transition(WEEK_1B);
                setTimeout(() => {
                  transition(WEEK_1);
                }, 1);
                setScenario([
                  "You already learned about Objects, Where to now?",
                ]);
              } else {
                setO(true);
                setResponse("You saunter slowly to see some shellfish");
                setTimeout(() => {
                  transition(WEEK_1_S2);
                  setNavText("W1: { Objective: Oysters }");
                  setScenario([
                    "You saunter slowly to see some shellfish",
                    "You look at the Objects around you and scratch your head",
                    "You vaguely recall Objects from your prep work studying",
                    "However something smells fishy.... these Objects are actually Oysters!",
                    "Unfortunately you find these Objects are a tough shell to crack",
                    "You have been hammering away at them for hours. What do you want to do now?",
                  ]);
                }, 1000);
              }
              resetTranscript();
            },
            isFuzzyMatch: true,
          },
          {
            command: ["Contitional (Coral)", "Coral", "Condidtion"],

            callback: () => {
              if (c) {
                setResponse(
                  "You already learned about Conditionals, Where to now?"
                );
                setScenario([
                  "You already learned about  Conditionals, Where to now?",
                ]);
                transition(WEEK_1B);
                setTimeout(() => {
                  transition(WEEK_1);
                }, 1);
              } else {
                setC(true);
                setResponse("You cruise to the cool colored Coral");
                setTimeout(() => {
                  transition(WEEK_1B);
                  setTimeout(() => {
                    transition(WEEK_1_S3);
                  }, 1);
                  setNavText("W1: If (Condition) then Coral");
                  setScenario([
                    "You cruise to the cool colored Coral",
                    "You stare at the beautiful Coral in front of you and wonder...",
                    "Why are these called Conditional Coral? How did you get here?",
                    "Hm, Was it the command you just gave?",
                    "If (conditional === Coral) { you arrive at coral }",
                    "You pondered this as you take off your shoes.",
                    "Maybe you think better without shoes on 🤷‍♂️? What do you do next?",
                  ]);
                }, 1000);
              }
              resetTranscript();
            },
            isFuzzyMatch: true,
          },
          {
            command: [
              "Array (of Anemones)",
              "Anemone",
              "An Enemy",
              "Anemones",
              "An Enemies",
            ],

            callback: () => {
              if (a) {
                setResponse("You already learned about Arrays, Where to now?");
                setScenario([
                  "You already learned about  Arrays, Where to now?",
                ]);
                transition(WEEK_1B);
                setTimeout(() => {
                  transition(WEEK_1);
                }, 1);
              } else {
                setA(true);
                setResponse("You approach an Array of Anemones");
                setScenario([
                  "You approach the Anenomes with caution as you don't want to make any enemies.",
                  "You sneak to not Arrays their awareness.",
                  "You peer under the pier they reside in and .find them",
                  "They are in some .sort of order [0, 1, 2, 3 ]. What do you want to do next?",
                ]);
                setTimeout(() => {
                  setNavText("W1: Array = [ A, n, e, m, o, n, e, s ] ");
                  transition(WEEK_1_S4);
                }, 3000);
              }

              resetTranscript();
            },
            isFuzzyMatch: true,
          },
          {
            command: ["Loop", "Leech", "Looping Leeches"],

            callback: () => {
              if (l) {
                setResponse("You already learned about Loops, Where to now?");
                setScenario([
                  "You already learned about  Loops, Where to now?",
                ]);
                transition(WEEK_1B);
                setTimeout(() => {
                  transition(WEEK_1);
                }, 1);
              } else {
                setL(true);

                setResponse(
                  "You'd like to linger no longer, so let's look at lots of Looping Leeches"
                );
                setScenario([
                  "You'd like to linger no longer, so let's look at lots of Looping Leeches",
                  "You wade into some standing water. Look down and you see your legs covered in Leeches!",
                  "You run out of the river like a pheonix!",
                  "The Leeches break out in song. 🎵 Oh won't you stand by me...",
                  "Shocked, you find yourself standing in some wading water. Look down and see your legs covered in Leeches!",
                  "You want to run again, but keep your cool and realize you are caught in a Loop.",
                  "Ok Corey Feldman, what will you Do-While you are here?",
                ]);

                setNavText("W1: for (Leech of Leeches)");
                transition(WEEK_1_S5);
              }
              resetTranscript();
            },
            isFuzzyMatch: true,
          },
          {
            command: [
              "(the) Lighthouse",
              "Entrance",
              "Test",
              "lighthouse (labs)",
            ],

            callback: () => {
              if (!f && !o && !c && !a && !l) {
                setResponse(
                  `Silly ${player}, you can't just warp there through a pipe like some video game.`
                );

                setScenario([
                  "Nice try pal!",
                  `Silly ${player}, you can't just warp there through a pipe like some video game.`,
                  "How about you explore the area first?",
                ]);
                transition(WEEK_1B);
                setTimeout(() => {
                  transition(WEEK_1);
                }, 1);
              } else {
                setResponse("Pop Quiz Hotshot!");
                setScenario([
                  "Pop Quiz Hotshot!",
                  "To progress further in Lighthouse Labs you must pass your Week 1 test!",
                ]);
                transition(WEEK_1B);
                setTimeout(() => {
                  transition(WEEK_1);
                }, 1);
                let score = 0;
                if (f) {
                  score += 20;
                }
                if (o) {
                  score += 20;
                }
                if (c) {
                  score += 20;
                }
                if (a) {
                  score += 20;
                }
                if (l) {
                  score += 20;
                }
                setTimeout(() => {
                  if (score === 100) {
                    setScenario([
                      `Check out the big brain on ${player}! You got 100%.`,
                      "You must have studied very hard.",
                      "You've earned an extra life for fully understanding our FOCAL points!",
                    ]);
                    transition(WEEK_1B);
                    setTimeout(() => {
                      transition(WEEK_1);
                    }, 1);
                    setResponse(
                      "You earn a gold star! ⭐ (And an extra life 💖)"
                    );
                    setLives(lives + 1);
                  } else {
                    setScenario([
                      `Ooh tough break ${player}! You got ${score} out of 100.`,
                      "You needed 90% to pass.",
                      "You are going to have to study extra hard over the weekends to get caught up.",
                      "Not off to a great start, better try harder in Week 2!",
                    ]);
                    transition(WEEK_1B);
                    setTimeout(() => {
                      transition(WEEK_1);
                    }, 1);
                    setResponse("Heartbreaking defeat! 💔");
                    setLives(lives - 1);
                  }
                }, 7000);
                setTimeout(() => {
                  setNavText("WEEK 2: Cats & ISS & API oh my!");
                  transition(WEEK_2);
                  setBoolean(false);
                }, 10000);
              }
              resetTranscript();
            },
            isFuzzyMatch: true,
          },
          {
            command: ["home", "bed", "back"],
            callback: () => {
              setScenario([
                "Fearing another step forward you choose to take a step back. The door hits you on the way out.",
              ]);
              setResponse("Wow so much self doubt. Bye I guess 👋");

              setLives(0);

              setTimeout(() => {
                transition(HOME);
                setNavText("Say 'Start' to begin.");                
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
            command: ["eat (a mushroom)", "eat one", "(take a) bite"],

            callback: () => {
              setResponse("You grab a tasty looking 🍄");
              setImage("holding");
              setScenario([
                "You pop a tasty looking mushroom into your mouth",
                "As you chew you feel a weird tingling sensation",
              ]);
              transition(WEEK_1B);
              setTimeout(() => {
                transition(WEEK_1_S1);
              }, 1);
              setTimeout(() => {
                const mushrooms = ["1up", "big", "poison"];
                const rngMush = mushrooms[Math.floor(Math.random() * 3)];
                switch (rngMush) {
                  case "1up":
                    setScenario([
                      `Wow ${player}! That's what I call gamer accumen!`,
                      "You found a secret 1up!💖",
                    ]);
                    transition(WEEK_1B);
                    setTimeout(() => {
                      transition(WEEK_1_S1);
                    }, 1);
                    setTimeout(() => {
                      setResponse("You found a secret 1up!💖");
                      setLives(lives + 1);
                      setImage("");
                    }, 6000);
                    break;
                  case "big":
                    setScenario([
                      "You found a Super Mushroom!",
                      "I guess it just makes you feel bigger",
                      `It's a-you, Super ${player}!`,
                    ]);
                    transition(WEEK_1B);
                    setTimeout(() => {
                      transition(WEEK_1_S1);
                    }, 1);

                    setResponse(`Wow that's Super ${player}!`);
                    setBig(true);
                    setImage("");
                    break;
                  case "poison":
                    setScenario([
                      "A few minutes pass when your tongue goes numb and your stomach begins to cramp up",
                      "This particular mushroom is not magically delicious",
                      "it's magically DEADLY!",
                      "Oh no! You can't handle *this*!",
                    ]);
                    transition(WEEK_1B);
                    setTimeout(() => {
                      transition(WEEK_1_S1);
                    }, 1);
                    setTimeout(() => {
                      setResponse(
                        "The Fn(Fungus) hit you with an arrow function => "
                      );
                      setTimeout(() => {
                        if (big) {
                          setResponse("You shrink back down to regular size");
                          setBig(false);
                        } else {
                          setResponse("You lost a life! 💔");
                          setLives(lives - 1);

                          if (lives === 0) {
                            setScenario([
                              "Many have died to mushrooms, you were just the Last of Us",
                            ]);
                            transition(GAMEOVER);
                            setGameOverText(
                              "Looks like you ran out of lives. Better luck next time."
                            );
                          }
                        }
                        setImage("");
                      }, 8000);
                    }, 6000);

                    break;
                  default:
                }
              }, 10000);
              setResponse("");

              resetTranscript();
            },
            isFuzzyMatch: true,
          },
          {
            command: ["pick up (a mushroom)", "take", "(put in)(my) pocket", "keep"],

            callback: () => {
              if (!mushroom) {
                setResponse(
                  "Sure, why not. Mushroom foraging is legal, right?"
                );
                setImage("holding");
                setScenario([
                  "You decide to put a mushroom in your pocket for later",
                ]);
                setMushroom(true);
                transition(WEEK_1B);
                setTimeout(() => {
                  transition(WEEK_1_S1);
                }, 1);
              } else {
                setResponse("Calm down greedy! You already have one.");
                setScenario([
                  "You overestimate your ability to carry mushrooms.",
                  "You leave the rest of the mushrooms so others can have some too",
                ]);
                transition(WEEK_1B);
                setTimeout(() => {
                  transition(WEEK_1_S1);
                }, 1);
              }
              setTimeout(() => {
                setImage("");
              }, 4000);
            },
            isFuzzyMatch: true,
          },
          {
            command: ["Leave", "get up", "stand"],

            callback: () => {
              if (big) {
                setResponse(
                  `Look out! it's Super ${player}!!`
                );
                setScenario([
                  "You pounce to your feet, towering over the Functional Fungus",
                  "You crush the entire ROOM into MUSH with your giant feet.",
                ]);
                transition(WEEK_1B);
                setTimeout(() => {
                  transition(WEEK_1_S1);
                }, 1);
              } else {
                setResponse("You rise to your feet to flee these fungi");
              }
              setTimeout(() => {
                setResponse("Welcome back. Where to next?");
                setNavText("WEEK 1: Wading into Lotide");
                setScenario(["Welcome back. Where to next?"]);
                transition(WEEK_1B);
              }, 9000);
              resetTranscript();
            },
            isFuzzyMatch: true,
          },
        ]);
        break;
      case "WEEK_1_S2":
        setCommands([
          ...staticCommands,
          {
            command: ["(keep) hammering (away)", "hammer", "keep going"],

            callback: () => {
              setResponse("Alright, stubborn brute force it is");
              setScenario([
                "You grab a bigger hammer, and smash apart all the Oysters.",
                "You might not have learned alot but you got through them.",
                "However that wasn't the objective of studying these Objects",
              ]);
              transition(WEEK_1);
              setTimeout(() => {
                transition(WEEK_1_S2);
              }, 1);
              setTimeout(() => {
                setResponse("You lost a life! 💔");
                setLives(lives - 1);
              }, 6000);
              setTimeout(() => {
                setNavText("WEEK 1: Wading into Lotide");
                setResponse("Welcome back. Where to next?");
                setScenario(["Welcome back. Where to next?"]);
                transition(WEEK_1B);
              }, 8000);
              resetTranscript();
            },
            isFuzzyMatch: true,
          },
          {
            command: ["(ask for) help", "Assistance (Request)", "ask a *"],

            callback: () => {
              setResponse("You've gained a pearl of wisdom! 🦪");
              setScenario([
                "You decide to make an Assistance Request",
                "You are greeted by a mentor named Walrus.",
                "He reviews your work and notices the hammer in your carpenter like hands.",
                "He offers you some e-STEAMed insights on how to crack open the solution.",
                "Thankful and wiser, you continue your journey",
              ]);
              transition(WEEK_1);
              setTimeout(() => {
                transition(WEEK_1_S2);
              }, 1);
              setImage("walrus");
              setTimeout(() => {
                setNavText("WEEK 1: Wading into Lotide");
                transition(WEEK_1B);
                setScenario(["Welcome back. Where to next?"]);
              }, 20000);
              resetTranscript();
            },
            isFuzzyMatch: true,
          },
        ]);
        break;
      case "WEEK_1_S3":
        setCommands([
          ...staticCommands,
          {
            command: ["(put on) shoes", "lace (up)"],

            callback: () => {
              setResponse("You can't be de-FEET-ed now!");
              setBoolean(true);
              if (big) {
                setScenario([
                  "You throw on your shoes and take a step... CRUNCH!!",
                  "Oops! It seems you are still super-sized from that mushroom earlier",
                  "you crush the Coral into sand beneth your feet as you walk away",
                ]);
                transition(WEEK_1);
                setTimeout(() => {
                  transition(WEEK_1_S3);
                }, 1);
                setTimeout(() => {
                  setNavText("WEEK 1: Wading into Lotide");
                  setResponse("Welcome back. Where to next?");
                  transition(WEEK_1B);

                }, 8000);
              } else {
                setScenario([
                  "You put your shoes back on before doing anything else",
                  "You must realize the Condition your feet would be in if you didn't.",
                  "Now you can walk around the Coral with your feet in-tact",
                ]);
                transition(WEEK_1B);
                setTimeout(() => {
                  transition(WEEK_1_S3);
                }, 1);
              }

              resetTranscript();
            },
            isFuzzyMatch: true,
          },
          {
            command: ["Leave", "go back"],

            callback: () => {
              if (!boolean) {
                setResponse("Oh no! your feet!! 👣");
                setImage("ouch");
                setScenario([
                  "Eager to return on your quest to be the best programmer, you start to leave",
                  "Oh no! Your feet!!",
                  "You severly cut your feet trying to leave without your shoes.",
                  "You shove your toes back into your now blood-red shoes.",
                  "You left before learning enough about Conditionals and Coral.",
                ]);
                transition(WEEK_1);
                setTimeout(() => {
                  transition(WEEK_1_S3);
                }, 1);
                setTimeout(() => {
                  setResponse("You lost a life! 💔");
                  setLives(lives - 1);
                }, 8000);
              } else {
                setScenario([
                  "You feel good about the Condition you are leaving the Coral",
                  "And in in the Condition the Coral left your feet in.",
                  "Good job gum-shoe, impressive understanding of both Coral and Conditionals",
                ]);
                transition(WEEK_1B);
                setTimeout(() => {
                  transition(WEEK_1_S3);
                }, 1);
              }
              setTimeout(() => {
                setNavText("WEEK 1: Wading into Lotide");
                setResponse("Welcome back. Where to next?");
                transition(WEEK_1B);
              }, 10000);
              resetTranscript();
            },
            isFuzzyMatch: true,
          },
          {
            command: ["study", "look (closer)"],

            callback: () => {
              setResponse(
                "You are so eager to learn! Smart decision, probably"
              );
              if (big) {
                setScenario([
                  "You take a step closer to inspect the coral... CRUNCH!!!",
                  "It seems you are still super-sized from that mushroom earlier.",
                  "You crush the Coral into sand beneth your feet and walk away in shame.",
                ]);
                transition(WEEK_1B);
                setTimeout(() => {
                  transition(WEEK_1_S3);
                }, 1);
              }
              if (!boolean) {
                setResponse("Oh no! your feet!! 👣");
                setImage("ouch");
                setScenario([
                  "You severly cut your feet trying get close to the coral without your shoes.",
                  "You shove your toes back into your now blood-red shoes.",
                ]);
                transition(WEEK_1B);
                setTimeout(() => {
                  transition(WEEK_1_S3);
                }, 1);
                setTimeout(() => {
                  setResponse("You lost a life! 💔");
                  setLives(lives - 1);
                }, 4000);
              } else {
                setScenario([
                  "You were smart enough to put your shoes on first.",
                  "You spend the exact right amount of time learning about Ifs, Thens, and everything Else.",
                  "After learning so much about Conditionals, you even improve your heart Condition!",
                ]);
                transition(WEEK_1B);
                setTimeout(() => {
                  transition(WEEK_1_S3);
                }, 1);
                setTimeout(() => {
                  setResponse("You found a secret 1up!💖");
                  setLives(lives + 1);
                }, 6000);
              }
              setTimeout(() => {
                setNavText("WEEK 1: Wading into Lotide");
                setResponse("Welcome back. Where to next?");
                transition(WEEK_1B);
              }, 16000);

              resetTranscript();
            },
            isFuzzyMatch: true,
          },
        ]);
        break;
      case "WEEK_1_S4":
        setCommands([
          ...staticCommands,
          {
            command: ["Study", "(take) notes"],

            callback: () => {
              setResponse("Index cards for Arrays? Nice.");
              setScenario([
                "You whip out some Index cards and take an Array of notes.",
                "You learn you can PUSH, POP, and even SLICE these things!",
              ]);
              transition(WEEK_1);
              setTimeout(() => {
                transition(WEEK_1_S4);
              }, 1);
              setTimeout(() => {
                setResponse("What do you want to do now?");
                // setScenario(["What do you want to do now?"]);
              }, 4000);

              resetTranscript();
            },
            isFuzzyMatch: true,
          },
          {
            command: ["Leave", "go back"],

            callback: () => {
              setScenario([
                "There must have been a no loitering sign, considering how fast you leave.",
                "Anemones are fine and all but if you are going to spend any more time here, you want Arrays",
              ]);
              transition(WEEK_1);
              setTimeout(() => {
                transition(WEEK_1_S4);
              }, 1);

              setTimeout(() => {
                setNavText("WEEK 1: Wading into Lotide");
                setResponse("Welcome back. Where to next?");
                transition(WEEK_1B);
              }, 10000);
              resetTranscript();
            },
            isFuzzyMatch: true,
          },
          {
            command: ["pop", "push", "slice", "splice"],

            callback: () => {
              setResponse("You use your Array methods on the Anemones");

              setScenario([
                "You get your hands dirty by finding, filtering, popping, pushing, splicing and slicing the Anemones.",
                "For purposes of this exercise we'll say they had a great time.",
                "You tickled their fancy and you enjoyed learning code from these creatures.",
                "You leave the Array having made a friend out of Anemone!",
              ]);
              transition(WEEK_1B);
              setTimeout(() => {
                transition(WEEK_1_S4);
              }, 1);
              setTimeout(() => {
                setResponse("Your heart grew one size that day!💖");
                setLives(lives + 1);
              }, 8000);

              setTimeout(() => {
                setNavText("WEEK 1: Wading into Lotide");
                setResponse("Welcome back. Where to next?");
                transition(WEEK_1B);
              }, 10000);

              resetTranscript();
            },
            isFuzzyMatch: true,
          },
        ]);
        break;
      case "WEEK_1_S5":
        setCommands([
          ...staticCommands,
          {
            command: ["Study", "(take) notes"],
            callback: () => {
              setResponse("No Break, Continue to study? You got it sucker");
              setScenario([
                "You stay amongst the Leeches and study how they were able to suck you back in.",
                "Learning about loops and realizing that you are in an infinite loop.",
                "The Leeches are positive you didn't close off your code properly.",
                "If the Looping Leeches never become false, you can't get out!",
              ]);
              transition(WEEK_1);
              setTimeout(() => {
                transition(WEEK_1_S5);
              }, 1);
              setTimeout(() => {
                setResponse("How now, Inspector?");
              }, 12000);

              resetTranscript();
            },
            isFuzzyMatch: true,
          },
          {
            command: ["Leave", "go back"],

            callback: () => {
              if (!boolean) {
                setScenario([
                  "Yuck Leeches! Am I right? You decide to leave right away.",
                  "You run out of the water, ripping Leeches off of you.",
                  "A second later you are back in the water, covered in Leeches again.",
                  "You are still stuck in this loop. How can you break out of it?",
                ]);
                transition(WEEK_1);
                setTimeout(() => {
                  transition(WEEK_1_S5);
                }, 1);
              } else {
                setScenario([
                  "You decide now is a good time to leave.",
                  "Good thing you took that break and resolved the infinite loop.",
                  "You can finally continue your coding journey!",
                ]);
                setTimeout(() => {
                  setNavText("WEEK 1: Wading into Lotide");
                  transition(WEEK_1B);
                  setResponse("");
                }, 15000);
              }
              resetTranscript();
            },
            isFuzzyMatch: true,
          },
          {
            command: [
              "(take a quick) break",
              "(short) break",
              "(quick) break",
              "(take a) break",
            ],

            callback: () => {
              setBoolean(true);
              setResponse("Is this a little too meta?");

              setScenario([
                "Your Final project has an infinite loop on the main branch.",
                "You don't waste time re-writing all of the new code.",
                "Instead you take a Break and chat with your team to resolve. Both you and the Looping Leeches in your code got a Break.",
              ]);
              transition(WEEK_1);
              setTimeout(() => {
                transition(WEEK_1_S5);
              }, 1);

              resetTranscript();
            },
            isFuzzyMatch: true,
          },
        ]);
        break;

      case "WEEK_2":
        setCommands([
          {
            command: ["no", "nope", "nevermind"],
            callback: () => {
              setResponse("Let's dive into Week 2! 🌊🐬🦑");
              setNavText("");
              transition(HOME);
              resetTranscript();
            },
            matchInterim: true,
          },
          {
            command: ["yes", "yeah", "yep", "skip"],
            callback: () => {
              setNavText(`Welcome to Week 2, ${props.playerName}! Let's begin!`);
              setResponse("");
              setScenario([
                "You made it to Week 2! It's time to dive in.",
                "In this week, you'll be learning about asynchronous programming and completing the Lotide project.",
                "You can always reach out to mentors or instructors if you need help.",
                "As you start your project, you run into an issue. You can't decide which technology to use.",
                "What do you do?",
              ]);
              transition(WEEK_2_S1);
              resetTranscript();
            },
            isFuzzyMatch: true,
          },
        ]);
        break;
        
      case "WEEK_2_S1":

        setCommands([
          {
            command: ["show me the path", "where to next", "what's next", "where do I go", "where to go", "where to head next", "what should I do", "what's next"],
            callback: () => {
              setResponse(" Refer to the provided documentation for guidance. Good luck!");

              setScenario([
                "As you embark on your journey into Week 2, you're greeted with a complex structure of directories and files.",
                "You realize that you'll need to create a basic JS component called `App.js` which will hold your application state, as well as your conditional rendering for each of the scenes in Week 2.",
                "Refer to the provided documentation for guidance.",
                "Are you up for the challenge?",
              ]);
              transition(WEEK_2_S2);
              setNavText("WEEK 2: CHALLENGE 1");
              resetTranscript();
            },
            isFuzzyMatch: true,
          },
          {
            command: ["skip"],
            callback: () => {
              setResponse("Don't skip the basics! 😤");

              setScenario([
                "As you embark on your journey into Week 2, you're greeted with a complex structure of directories and files.",
                "You realize that you'll need to create a basic React component called `App.js` which will hold your application state, as well as your conditional rendering for each of the scenes in Week 1.",
                "Refer to the provided documentation for guidance.",
                "Are you up for the challenge?",
              ]);
              transition(WEEK_2_S2);
              setNavText("WEEK 2: CHALLENGE 1");
              resetTranscript();
            },
            isFuzzyMatch: true,
          },
          {
            command: ["give up"],
            callback: () => {
              setResponse("No pain, no gain. 💪");

              setScenario([
                "As you embark on your journey into Week 2, you're greeted with a complex structure of directories and files.",
                "You realize that you'll need to create a basic JS component called `App.js` which will hold your application state, as well as your conditional rendering for each of the scenes in Week 1.",
                "Refer to the provided documentation for guidance.",
                "Are you up for the challenge?",
              ]);
              transition(WEEK_2_S2);
              setNavText("WEEK 2: CHALLENGE 1");
              resetTranscript();
            },
            isFuzzyMatch: true,
          },
        ]);
        break;
      case "WEEK_2_S2":
        setCommands([
          {
            command: ["continue", "yes", "keep going"],
            callback: () => {
              setResponse("Good choice! 🚀");
              setScenario([
                "Week 2 continues with asynchronous programming, you'll need to be comfortable working with Promises, async/await, and the event loop.",
                "Your first project is the Lotide project, which is inspired by the Lodash project, which is a utility library for JavaScript.",
                "This is a challenging project, but if you can complete it, you'll have a solid foundation in asynchronous programming.",
                "Do you feel ready for the challenge?",
              ]);
              setNavText("WEEK 2: LOTIDE PROJECT");
              transition(WEEK_2_S3);
              resetTranscript();
            },
            isFuzzyMatch: true,
          },
          {
            command: ["no", "stop", "(I) quit", "give up"],
            callback: () => {
              setScenario([
                "It's okay to take a break, but remember that the road to success is rarely an easy one",
              ]);
              setNavText("WEEK 2: WADING INTO LOW-TIDE");
              transition(WEEK_2_S3);
              resetTranscript();
            },
            isFuzzyMatch: true,
          },
        ]);
        break;
      case "WEEK_2_S3":
        setCommands([
          {
            command: ["continue", "yes", "keep going"],
            callback: () => {
              setResponse("Good luck! 😏");
              setScenario([
                "You've arrived at Lighthouse Labs and your first project is assigned. Working with a small team, you're tasked to build a project in 2 days.",
                "Despite some roadblocks, your team is able to deliver a working product just in time for the demo.",
                "But the journey doesn't stop here, the next challenge is a solo project. You have to build a functional application from scratch using React.",
                "Feeling confident and eager to learn, do you choose to continue? or go back to your old life?",
              ]);

              transition(WEEK_3);
              setNavText("WEEK 3: Time to Solo");

              resetTranscript();
            },
            isFuzzyMatch: true,
            // matchInterim: true,
          },
          {
            command: [
              "no",
              "stop",
              "(I) quit",
              "(return to) old life",
              "give up",
            ],
            callback: () => {
              setScenario([
                "Fearing you may not be cut out for a career in tech, you decide to opt out and return to the comfort of your old life.",
                "Months later, you still think about what could have been...",
              ]);
              setResponse("Coding isn't for everyone. 🤷‍♀️");

              setLives(0);

              transition(GAMEOVER);
              setGameOverText("Say 'restart' to return to Main Menu");

              setTimeout(() => {
                setNavText("");
              }, 7000);
              resetTranscript();
            },
            isFuzzyMatch: true,
          },
        ]);
        break;







      case "WEEK_3":
        setCommands([
          {
            command: ["explore", "look around", "search"],
            callback: () => {
              setResponse("What would you like to search for?");

              setScenario([
                "You find yourself in a dimly lit dungeon, with no idea how you got here.",
                "There are several chests scattered throughout the room.",
                "You notice that one of the chests has a keyhole.",
              ]);

              transition(WEEK_3_S1);

              setTimeout(() => {
                setNavText("WEEK 3: The Treasure Hunt");
                setResponse("");
                setScenario([""]);
              }, 2000);

              resetTranscript();
            },
            isFuzzyMatch: true,
          },
          {
            command: ["run", "escape"],
            callback: () => {
              setScenario([
                "You panic and run around aimlessly until you tire yourself out.",
                "You turn around to find that you're back to where you started.",
              ]);
              setResponse("Maybe try searching for a way out?");

              setScenario([
                "You look around frantically for an exit, but there doesn't seem to be one in sight.",
                "As you catch your breath, you notice a glint of metal from one of the chests.",
                "Could it be a key?",
              ]);

              transition(WEEK_3_S1);

              setTimeout(() => {
                setNavText("WEEK 3: The Treasure Hunt");
                setResponse("");
                setScenario([""]);
              }, 5000);

              resetTranscript();
            },
            isFuzzyMatch: true,
          },
          {
            command: ["inventory", "items"],
            callback: () => {
              setResponse(
                `You have ${inventory.length} items: ${inventory.join(", ")}`
              );
              resetTranscript();
            },
            isFuzzyMatch: true,
          },
          {
            command: ["start project"],
            callback: () => {
              setResponse("You begin your technical interview project.");
              setScenario([
                "You are interviewing for a web developer position and have been given a project to complete.",
                "The task is to create a simple app that retrieves data from an API and displays it on a webpage.",
                "You will need to use AJAX to make the API call and parse the JSON response.",
              ]);
              transition(WEEK_3_S2);

              setTimeout(() => {
                setNavText("WEEK 3: The Technical Interview");
                setResponse("");
              }, 5000);

              resetTranscript();
            },
            isFuzzyMatch: true,
          },
        ]);
        break;
      case "WEEK_3_S1":
        setCommands([
          {
            command: ["look for a map", "map"],
            callback: () => {
              setResponse("You find a map in one of the chests!");
              setInventory([...inventory, "Map"]);

              setTimeout(() => {
                setResponse("");
              }, 3000);

              transition(WEEK_3_S2);
              resetTranscript();
            },
            isFuzzyMatch: true,
          },
          {
            command: ["look for a key", "key"],
            callback: () => {
              setResponse(
                "You find a key, but it doesn't seem to fit any of the doors in this room."
              );
              setInventory([...inventory, "Key"]);

              setTimeout(() => {
                setResponse("");
              }, 5000);

              transition(WEEK_3_S2);
              resetTranscript();
            },
            isFuzzyMatch: true,
          },
          {
            command: ["look for an exit", "exit"],
            callback: () => {
              setResponse("There doesn't seem to be an exit in this room. You should keep searching for clues.");
              resetTranscript();
            },
            isFuzzyMatch: true,
          },
          {
            command: ["inventory", "items"],
            callback: () => {
              setResponse(
                `You have ${inventory.length} items: ${inventory.join(", ")}`
              );
              resetTranscript();
            },
            isFuzzyMatch: true,
          },
        ]);
        break;
      case "WEEK_3_S2":
        setCommands([
          {
            command: ["send request", "make api call", "retrieve data"],
            callback: () => {
              setResponse("You successfully make the API call and retrieve data!");
              setInventory([...inventory, "API Data"]);

              setTimeout(() => {
                setResponse("");
              }, 3000);

              transition(WEEK_3_S3);
              resetTranscript();
            },
            isFuzzyMatch: true,
          },
          {
            command: ["parse data", "display on webpage"],
            callback: () => {
              setResponse("You successfully parse the data and display it on the webpage!");
              setInventory([...inventory, "Webpage"]);

              setTimeout(() => {
                setResponse("");
              }, 3000);

              transition(WEEK_3_S3);
              resetTranscript();
            },
            isFuzzyMatch: true,
          },
          {
            command: ["inventory", "items"],
            callback: () => {
              setResponse(
                `You have ${inventory.length} items: ${inventory.join(", ")}`
              );
              resetTranscript();
            },
            isFuzzyMatch: true,
          },
        ]);
        break;
      case "WEEK_3_S3":
        setCommands([
          {
            command: ["submit project", "finish project"],
            callback: () => {
              setResponse("You submit your project and feel a sense of accomplishment!");
              setScenario([
                "You eagerly await the response from the hiring team.",
                "Days pass, but you finally receive an email from the company.",
                `Congratulations, ${player}! You've been offered the web developer position!`,
              ]);

              setTimeout(() => {
                setNavText("WEEK 4: The Job Offer");
                setResponse("");
              }, 6000);

              transition(WEEK_4);
              resetTranscript();
            },
            isFuzzyMatch: true,
          },
          {
            command: ["improve project", "revise project"],
            callback: () => {
              setResponse(
                "You spend some time improving your project and submitting a revised version."
              );
              setScenario([
                "The hiring team is impressed with your dedication and hard work.",
                "They offer you the web developer position!",
              ]);

              setTimeout(() => {
                setNavText("WEEK 4: The Job Offer");
                setResponse("");
              }, 6000);

              transition(WEEK_4);
              resetTranscript();
            },
            isFuzzyMatch: true,
          },
          {
            command: ["quit"],
            callback: () => {
              setResponse(
                "You give up on the project and decide to move on to something else."
              );
              setScenario([
                "The hiring team is disappointed with your lack of commitment and decides not to offer you the position.",
              ]);

              setTimeout(() => {
                setNavText("WEEK 4: The Job Offer");
                setResponse("");
              }, 6000);

              transition(WEEK_4);
              resetTranscript();
            },
            isFuzzyMatch: true,
          },
          {
            command: ["inventory", "items"],
            callback: () => {
              setResponse(
                `You have ${inventory.length} items: ${inventory.join(", ")}`
              );
              resetTranscript();
            },
            isFuzzyMatch: true,
          },
        ]);
        break;


      case "WEEK_4":
        setCommands([
          {
            command: ["skip"],
            callback: () => {
              setResponse("");

              setScenario([
                "You begin your day by reasearching the issue, but quickly realize you need to access to more information. What do you do?",
              ]);
              setNavText("WEEK 4: SCENARIO 1");
              transition(WEEK_4_S1);
              resetTranscript();
            },
            isFuzzyMatch: true,
            matchInterim: true,
          },
        ]);
        break;
      case "WEEK_4_S1":
        setCommands([
          {
            command: [
              "hack (into tweeter)",
              "hack",
              "back",
              "* into twitter",
              "* into tweeter",
            ],
            callback: () => {
              setResponse("🚨🚨🚨");
              setLives(lives - 1);

              if (lives <= 0) {
                setScenario([
                  "You successfully hack into Tweeter's systems, but trigger the security alarms.",
                  "Not even getting a chance to commit your work, you're arrested by the Tweeter police.",
                ]);

                transition(GAMEOVER);
                setGameOverText(
                  "Looks like you ran out of lives. Better luck next time."
                );
                setNavText("Say 'Restart' or 'Home' to return to Main menu");
                setTimeout(() => {
                  setResponse("");
                }, 7000);
              } else {
                setScenario([
                  "You successfully hack into Tweeter's systems, but trigger the security alarms.",
                  "After pushing to main, the Tweeter Police show up and you are arrested for hacking into a (not so) secure system",
                  "You are now in jail and need to find a way to escape so you can continue your mission to save Tweeter.",
                  "Convieniently. In your cell, there happens to be a dusty laptop that still manages to power on.",
                  "Alternatively, you could take your chances with the gaurds who seem to be busy outside your cell.",
                  "What do you choose to do?",
                ]);
                transition(WEEK_4_S2);
                setTimeout(() => {
                  setNavText("WEEK 4: SCENARIO 2");
                }, 6000);
              }

              resetTranscript();
            },
            isFuzzyMatch: true,
            matchInterim: true,
          },
          {
            command: ["(ask) classmates", "(ask) peers"],
            callback: () => {
              setNavText("WEEK 4: SCENARIO 1");
              setScenario([
                "You ask your classmates for help, but they are all too busy with their own projects.",
                "You begin your day by reasearching the issue, but quickly realize you need to access to more information. What do you do?",
              ]);

              transition(WEEK_4_S1);
              resetTranscript();
            },
            isFuzzyMatch: true,
            matchInterim: true,
          },
          {
            command: ["mentor", "queue", "assistance (request)"],
            callback: () => {
              setLives(lives + 1);

              setScenario([
                "After waiting in the queue for what feels like ages, you finaly connect with a Mentor and explain your situation.",
                "Lucky for you, this mentor was an Ex Tweeter employee who knew the ins and outs of Tweeter's source code.",
                "The mentor shares their knowledge and you carry on with your research",
                "You finally find the source of the problem and realize that the issue can be fixed by manually going into Tweeter's servers. How will you get there?",
              ]);

              setNavText("WEEK 4: SCENARIO 3");
              transition(WEEK_4_S3);
              resetTranscript();
            },
            isFuzzyMatch: true,
            matchInterim: true,
          },
        ]);
        break;
      case "WEEK_4_S2":
        setCommands([
          {
            command: ["hack", "(use) laptop"],
            callback: () => {
              if (randInt() > 4) {
                setResponse("Jailbreak! 😈");
                setScenario([
                  "You grab the laptop and use your coding skills to open your jail cell",
                  "While the guards are looking away you sneak out and successfully escape",
                  "You get back home safely continue your mission to save Tweeter.",
                  "You finally find the source of the problem and realize that the issue can be fixed by manually going into Tweeter's servers. How will you get there?",
                ]);

                setNavText("WEEK 4: SCENARIO 3");
                transition(WEEK_4_S3);
              } else {
                setLives(lives - 1);
                setScenario([
                  "Whoops...You pick up the laptop, but it slips and lands right on your toe",
                ]);

                if (lives <= 0) {
                  transition(GAMEOVER);
                  setGameOverText(
                    "Death by dusty laptop. Thats pretty embarassing..."
                  );
                  setNavText("Say 'Restart' or 'Home' to return to Main menu");
                } else {
                  setScenario([
                    "You are now in jail and need to find a way to escape so you can continue your mission to save Tweeter.",
                    "Convieniently. In your cell, there happens to be a dusty laptop that still manages to power on.",
                    "Alternatively, you could take your chances with the gaurds who seem to be busy outside your cell.",
                    "What do you choose to do?",
                  ]);
                  transition(WEEK_4_S2);
                }
              }
              resetTranscript();
            },
            isFuzzyMatch: true,
            matchInterim: true,
          },
          {
            command: ["bribe guards", "talk to *"],
            callback: () => {
              resetTranscript();
              setResponse("");

              if (randInt() < 4) {
                setScenario([
                  "You bribe the guards with the last of your coffee bean fund and successfully escape jail.",
                  "You get back home safely continue your mission to save Tweeter.",
                  "You finally find the source of the problem and realize that the issue can be fixed by manually going into Tweeter's servers. How will you get there?",
                ]);

                setNavText("WEEK 4: SCENARIO 3");
                transition(WEEK_4_S3);
              } else {
                setLives(lives - 1);

                if (lives <= 0) {
                  transition(GAMEOVER);
                  setGameOverText("Maybe the guard went a bit overboard...");
                  setNavText("Say 'Restart' or 'Home' to return to Main menu");
                } else {
                  setScenario([
                    "The guard roasts your haircut and goes back to his duties.",
                    "It was super effective.",
                    "You are now in jail and need to find a way to escape so you can continue your mission to save Tweeter.",
                    "Convieniently. In your cell, there happens to be a dusty laptop that still manages to power on.",
                    "Alternatively, you could take your chances with the gaurds who seem to be busy outside your cell.",
                    "What do you choose to do?",
                  ]);

                  transition(WEEK_4_S2);
                  setNavText("WEEK 4: SCENARIO 2");
                }
              }
            },
            isFuzzyMatch: true,
            matchInterim: true,
          },
        ]);
        break;
      case "WEEK_4_S3":
        setCommands([
          {
            command: ["fly", "* helicopter"],
            callback: () => {
              setResponse("");
              setLives(lives - 1);

              if (lives <= 0) {
                setScenario([
                  "You use your TELUS benefits to rent a helicopter",
                  "But you crash as soon as you take off because you forgot you're a programmer, not a pilot",
                ]);

                transition(GAMEOVER);
                setGameOverText("Should've probably packed a parachute too.");

                setNavText("Say 'Restart' or 'Home' to return to Main menu");
              } else {
                setScenario([
                  "You use your TELUS benefits to rent a helicopter",
                  "But you crash as soon as you take off because you forgot you're a programmer, not a pilot",
                  "You walk back home in shame",
                  "With very little time left, you decide to get creative and come up with a new plan to save Tweeter.",
                  "After days of planning, you settle on two options:",
                  " Use your coding skills to create a virtual version of Tweeter. Or use those skills to build a time machine and prevent the problem from even happening",
                ]);

                transition(WEEK_4_S4);
              }

              setTimeout(() => {
                setNavText("WEEK 4: SCENARIO 4");
              }, 7000);

              resetTranscript();
            },
            isFuzzyMatch: true,
          },
          {
            command: ["transit", "public transport"],
            callback: () => {
              setResponse("");

              setScenario([
                "After checking transit routes, you find out it will be a 7 hour commute, you take emotional damage and reconcider.",
                "With very little time left, you decide to get creative and come up with a new plan to save Tweeter.",
                "After days of planning, you settle on two options:",
                " Use your coding skills to create a virtual version of Tweeter. Or use those skills to build a time machine and prevent the problem from even happening.",
              ]);

              transition(WEEK_4_S4);
              setTimeout(() => {
                setNavText("WEEK 4: SCENARIO 4");
              }, 7000);

              resetTranscript();
            },
            isFuzzyMatch: true,
          },
          {
            command: ["walk"],
            callback: () => {
              setResponse("...really?");

              setScenario(
                "After a couple steps outside you return home exhausted and embarassed.",
                "You finally find the source of the problem and realize that the issue can be fixed by manually going into Tweeter's servers. How will you get there?"
              );

              transition(WEEK_4_S3);

              setTimeout(() => {
                setResponse("");
              }, 6000);

              resetTranscript();
            },
            isFuzzyMatch: true,
            matchInterim: true,
          },
        ]);
        break;
      case "WEEK_4_S4":
        setCommands([
          {
            command: ["make tweeter", "make twitter", "tweeter", "twitter"],
            callback: () => {
              setResponse("");

              setScenario([
                "You use your coding skills to create a virtual version of Tweeter called 'Two-weeter' and successfully save all the tweets.",
                "You are hailed as a hero and thanked personally from the CEO of Tweeter. Just in time for week 5 of bootcamp 😉",
                "A cheque would've been nice though...",
                "Wow. You actually managed to save Tweeter..",
                "Not bad, im impressed.",
                "Unfortunatly for us however, it looks like you upset the hackers...",
                "Now they are targeting our bootcamps' Databases!",
                "Get into our database and drop them once and for all!",
                "You open up your terminal and proceed to type 'psql'. To connect to the database.",
                "Uh oh, we got an error. 'psql: could not connect to server'? What does that even mean?What do we do?",
              ]);

              transition(WEEK_5_S1);

              setTimeout(() => {
                setNavText("WEEK 5: SCENARIO 1");
              }, 16000);

              resetTranscript();
            },
            isFuzzyMatch: true,
          },
          {
            command: [
              "time machine",
              "go back in time",
              "build (time machine)",
            ],
            callback: () => {
              setResponse("");

              setLives(0);
              setScenario([
                "You decide to build a time machine, but it sends you to the year 2077.",
                "You discover that Tweeter no longer exists. With no place for people to post thier questionable Tweets, the world has plunged into utter chaos.",
                "Mission Failed.",
              ]);

              setNavText("Say 'Restart' or 'Home' to return to Main menu");

              setGameOverText("And its allll your fault 🙂");
              transition(GAMEOVER);

              resetTranscript();
            },
            isFuzzyMatch: true,
            matchInterim: true,
          },
        ]);
        break;
      case "WEEK_5":
        setCommands([
          {
            command: ["skip"],
            callback: () => {
              setResponse("");
              setNavText("WEEK 5: SCENARIO 1");
              transition(WEEK_5_S1);
              resetTranscript();
              setScenario([""]);
            },
            isFuzzyMatch: true,
            matchInterim: true,
          },
        ]);
        break;
      case "WEEK_5_S1":
        setCommands([
          {
            command: ["startpostgres", "start postgres", "thought postgres"],
            callback: () => {
              setResponse("");
              setScenario([
                "You are greeted with a password input!",
                "I wonder what the password could be...",
              ]);
              setNavText("WEEK 5: SCENARIO 2");
              transition(WEEK_5_S2);
              resetTranscript();
            },
            isFuzzyMatch: true,
            matchInterim: true,
          },
          {
            command: ["hack", "hack into (database)"],
            callback: () => {
              setResponse("");

              setScenario([
                "You attempt to hack into the bootcamps database!",
                "It wasnt very effective...",
                "Uh oh, we got an error. 'psql: could not connect to server'? What does that even mean?What do we do?",
              ]);

              setNavText("WEEK 5: SCENARIO 1");
              transition(WEEK_5_S1);

              resetTranscript();
            },
            isFuzzyMatch: true,
            matchInterim: true,
          },
          {
            command: ["buy a mac(book)", "use mac(book)", "mac(book)"],
            callback: () => {
              setResponse("");

              setLives(lives - 1);
              if (lives <= 0) {
                setScenario([
                  "You take out a $4000 loan to buy a macbook.",
                  "I really hope it was worth it.",
                ]);

                transition(GAMEOVER);
                setResponse("");
                setGameOverText("Spoiler: It wasnt.");
                setNavText("Say 'Reset' or 'Home' to return to Main menu");
              } else {
                setNavText("WEEK 5: SCENARIO 2");
                setScenario([
                  "You take out a $4000 loan to buy a macbook.",
                  "I really hope it was worth it.",
                  "You are greeted with a password input!",
                  "I wonder what the password could be...",
                ]);
                transition(WEEK_5_S2);
              }

              resetTranscript();
            },
            isFuzzyMatch: true,
            matchInterim: true,
          },
        ]);
        break;
      case "WEEK_5_S2":
        setCommands([
          {
            command: ["monkeyfuzz", "monkey fuzz"],
            callback: () => {
              setResponse("🙈🙉🙊");

              setScenario([
                "It Worked!",
                "I think I see why we got hacked...",
                "We're finally in the Database!",
                " You find an out of place table named 'hackers(do not touch)'.",
                "Suddenly, your phone rings.",
                "Its mom. Oh no. Its been 5 weeks since youve facetimed her and she's not happy. What do you do?",
              ]);
              setNavText("WEEK 5: SCENARIO 3");

              transition(WEEK_5_S3);
              setTimeout(() => {
                setScenario([""]);
              }, 9000);

              resetTranscript();
            },
            isFuzzyMatch: true,
            matchInterim: true,
          },
          {
            command: [":password"],
            callback: (password) => {
              setResponse("");

              if (randInt() > 2) {
                setScenario([
                  "Incorrect Password. Try again.",
                  "You are greeted with a password input!",
                  "I wonder what the password could be...",
                ]);

                transition(WEEK_5_S2);
              } else {
                setResponse("lucky lucky 🍀");
                setScenario([
                  `Wow. You guessed it... ${password} was really the password.`,
                  "I think I see how we got hacked...",
                  "We're finally in the Database!",
                  " You find an out of place table named 'hackers(do not touch)'.",
                  "Suddenly, your phone rings.",
                  "Its mom. Oh no. Its been 5 weeks since youve facetimed her and she's not happy. What do you do?",
                ]);
                setNavText("WEEK 5: SCENARIO 3");
                transition(WEEK_5_S3);

                setTimeout(() => {
                  setScenario([""]);
                }, 10000);
              }

              resetTranscript();
            },
          },
        ]);
        break;
      case "WEEK_5_S3":
        setCommands([
          {
            command: ["ignore", "select hacker(s)", "select table", "hang up"],
            callback: () => {
              setResponse("");

              setScenario([
                "With no regard for your life, you let call goto voicemail and SELECT the hacker table",
                "After inspecting the hackers database table you find the only solution is to get rid of it.What command will get the job done?",
              ]);

              setNavText("WEEK 5: SCENARIO 4");
              transition(WEEK_5_S4);

              resetTranscript();
            },
            isFuzzyMatch: true,
            matchInterim: true,
          },
          {
            command: ["pick up (phone)", "mom", "mum", "call", "pick up"],
            callback: () => {
              setResponse("Aww.. 🥺");
              setLives(lives + 1);

              setScenario([
                "You pick up the phone expecting to get an earfull but you are greeted with encouragement and some words of wisdom 🙂",
                "After inspecting the hackers database table you find the only solution is to get rid of it.What command will get the job done?",
              ]);

              setNavText("WEEK 5: SCENARIO 4");
              transition(WEEK_5_S4);
              setTimeout(() => {
                setScenario([""]);
              }, 10000);
              resetTranscript();
            },
            isFuzzyMatch: true,
            matchInterim: true,
          },
        ]);
        break;
      case "WEEK_5_S4":
        setCommands([
          {
            command: ["drop table cascade"],
            callback: () => {
              setResponse("");

              setScenario(["TABLE DELETED", "Look at you, another day saved!"]);

              transition(WEEK_6);
              setNavText("WEEK 6");

              setTimeout(() => {
                setScenario([""]);
              }, 10000);

              resetTranscript();
            },
            isFuzzyMatch: true,
          },
          {
            command: ["drop table"],
            callback: () => {
              setResponse("");

              setScenario([
                "ERROR: table has dependencies",
                "That didnt work?!",
                "I wonder if we are missing something...",
                "After inspecting the hackers database table you find the only solution is to get rid of it.What command will get the job done?",
              ]);

              transition(WEEK_5_S4);

              resetTranscript();
            },
            isFuzzyMatch: true,
          },
          {
            command: ["delete table"],
            callback: () => {
              setResponse("");

              setScenario([
                "You delete the contents of the hackers table!",
                "But suddenly see the table repopulate before your eyes",
                "There has to be a better way.",
                "After inspecting the hackers database table you find the only solution is to get rid of it.What command will get the job done?",
              ]);

              transition(WEEK_5_S4);

              resetTranscript();
            },
            isFuzzyMatch: true,
          },
          {
            command: ["insert *"],
            callback: () => {
              setResponse("");
              setLives(lives - 1);

              if (lives <= 0) {
                setScenario(["...I think that made it stronger?"]);
                transition(GAMEOVER);
                setGameOverText("...I mean, what did you expect?");
                setNavText("Say 'Reset' or 'Home' to return to Main menu");
              } else {
                setScenario([
                  "...I think that made it stronger?",
                  "After inspecting the hackers database table you find the only solution is to get rid of it.What command will get the job done?",
                ]);
                transition(WEEK_5_S4);
              }

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

  return {
    commands,
    listenContinuously,
    transcript,
    resetTranscript,
    listening,
  };
}

const HOME = "HOME";
const GAMESTART = "GAMESTART";
const GAMEOVER = "GAME_OVER";
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
const WEEK_1_S5 = "WEEK_1_S5";

const WEEK_2 = "WEEK_2";
const WEEK_2_S1 = "WEEK_2_S1";
const WEEK_2_S2 = "WEEK_2_S2";
const WEEK_2_S3 = "WEEK_2_S3";

const WEEK_3 = "WEEK_3";
const WEEK_3_S1 = "WEEK_3_S1";
const WEEK_3_S2 = "WEEK_3_S2";
const WEEK_3_S3 = "WEEK_3_S3";
const WEEK_3_S4 = "WEEK_3_S4";
const WEEK_3_S5 = "WEEK_3_S5";

const WEEK_4 = "WEEK_4";
const WEEK_4_S1 = "WEEK_4_S1";
const WEEK_4_S2 = "WEEK_4_S2";
const WEEK_4_S3 = "WEEK_4_S3";
const WEEK_4_S4 = "WEEK_4_S4";

const WEEK_5 = "WEEK_5";
const WEEK_5_S1 = "WEEK_5_S1";
const WEEK_5_S2 = "WEEK_5_S2";
const WEEK_5_S3 = "WEEK_5_S3";
const WEEK_5_S4 = "WEEK_5_S4";

const WEEK_6 = "WEEK_6";
