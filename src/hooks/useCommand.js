import { useEffect, useState } from "react";
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
  } = props;

  // returns rand int between 0 - 9
  const randInt = () => {
    const max = 10;
    return Math.floor(Math.random() * max);
  };

  const [commands, setCommands] = useState([]);

  const { listenContinuously, transcript, resetTranscript, listening } =
    useListen(commands);

  const staticCommands = [
    {
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
    },
    {
      command: ["game over", "death", "quit"],
      callback: () => {
        transition(GAMEOVER);
        setGameOverText("Test: loreum ipsum loreum ipsum");
        resetTranscript();
      },
      isFuzzyMatch: true,
    },
    {
      // testing for week 4
      command: ["week 4"],
      callback: () => {
        transition(WEEK_4);
        setLives(3);
        setPlayer("Donny");
        setScenario("");
      },
      isFuzzyMatch: true,
    },
    {
      // manually set lives for debugging
      command: "set lives (to) :number",
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
              setResponse("Starting Adventure!");
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
              setResponse(`Welcome to hell ${player} 😈`);
              setNavText("PREP WEEK");
              transition(PREPWEEK);
              resetTranscript();
              setLives(3);

              resetTranscript();
            },
            isFuzzyMatch: true,
            matchInterim: true,
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
              transition(PREPWEEKS1);
              resetTranscript();
            },
            isFuzzyMatch: true,
            matchInterim: true,
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
              transition(PREPWEEKS2);
              setNavText("PREP WEEK: SCENARIO 2");
              resetTranscript();
            },
            isFuzzyMatch: true,
            matchInterim: true,
          },
          {
            command: ["reward (myself)", "(play) tekken"],
            callback: () => {
              setResponse("That was hard to watch... 😬");
              setScenario(
                "Unfortunatly the exictement from making it into bootcamp threw off your game. After losing your rank to a kid half your age, you decide to continue on with your course work"
              );

              // current lives is 2
              setLives(lives - 1);

              // after a delay, will continue on to next scenario
              setTimeout(() => {
                setNavText("PREP WEEK: SCENARIO 2");
                transition(PREPWEEKS2);
                setScenario("");
              }, 7000);
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
              setScenario(
                "After reaching out for some assistance, a peer offers to lend a hand. you finaly figure where your bug was and fix that pesky function!"
              );

              setResponse("Good call 👍");

              setTimeout(() => {
                transition(PREPWEEKS3);
                setNavText("PREP WEEK: SCENARIO 3");
                setResponse("");
                setScenario("");
              }, 7000);
              resetTranscript();
            },
            isFuzzyMatch: true,
            matchInterim: true,
          },
          {
            command: ["google", "* online"],
            callback: () => {
              setScenario(
                "After searching online for answers you come across a helpful video tutorial. You finaly figure where your bug was and fix that pesky function!"
              );

              setResponse("Thank god for Google search 😅");

              setTimeout(() => {
                transition(PREPWEEKS3);
                setNavText("PREP WEEK: SCENARIO 3");
                setScenario("");
                setResponse("");
              }, 7000);
              resetTranscript();
            },
            isFuzzyMatch: true,
            matchInterim: true,
          },
          {
            command: ["continue", "press on", "keep going"],
            callback: () => {
              setScenario(
                "Hours pass and its late. Very late. At 2 AM you finaly figure where your bug was and fix that pesky function... But at what cost?"
              );

              setResponse("Maybe you should've reached out for help 🤷");

              // current lives is 1 or 2
              setLives(lives - 1);

              setTimeout(() => {
                transition(PREPWEEKS3);

                setNavText("PREP WEEK: SCENARIO 3");
                setScenario("");
                setResponse("");
              }, 7000);
              resetTranscript();
            },
            isFuzzyMatch: true,
            matchInterim: true,
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
                transition(GAMEOVER);
                setGameOverText("Say 'restart' to return to Main Menu");
                setResponse("");
              }, 7000);
              resetTranscript();
            },
            isFuzzyMatch: true,
            matchInterim: true,
          },
        ]);
        break;
      case "PREP_WEEK_S3":
        setCommands([
          {
            command: ["continue", "yes", "keep going"],
            callback: () => {
              setScenario(
                "Your eyes light up with new found determination as you add an order of instant coffee to your Amazon cart and prepare for the following week"
              );

              setResponse("Good luck! 😏");

              setTimeout(() => {
                transition(WEEK_1);
                setNavText("WEEK 1: Wading into Lotide");
                setScenario("");
                setResponse("");
              }, 9000);
              resetTranscript();
            },
            isFuzzyMatch: true,
            matchInterim: true,
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
              setScenario(
                "Fearing you may not be cut out to be a developer you decide to opt out and restock on your precious coffee beans. Also you slip on a banana peel and die"
              );
              setResponse("Had a feeling you'd say that 🥱");

              setLives(0);

              setTimeout(() => {
                transition(GAMEOVER);
                setGameOverText("A banana peel? Really? 🤣");
                setNavText("Say 'restart' to return to Main Menu");
              }, 9000);
              resetTranscript();
            },
            matchInterim: true,
            isFuzzyMatch: true,
          },
        ]);
        break;
      case "WEEK_1":
      case "WEEK_1B":
        setCommands([
          ...staticCommands,
          {
            command: ["Function", "Fungus", "Mushroom(s)"],

            callback: () => {
              if (f) {
                setResponse(
                  "You already learned about Functions, Where to now?"
                );
              } else {
                setF(true);
                setScenario("");
                setResponse("You mosey over to the Mushrooms");
                setTimeout(() => {
                  setNavText("W1: Fun Fun Fn(Fungus)");
                  transition(WEEK_1_S1);
                  setScenario("");
                  setResponse("");
                }, 3000);
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
              } else {
                setO(true);
                setScenario("");
                setResponse("You saunter slowly to see some shellfish");
                setTimeout(() => {
                  transition(WEEK_1_S2);
                  setNavText("W1: { Objective: Oysters }");
                  setScenario("");
                  setResponse("");
                }, 3000);
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
              } else {
                setC(true);
                setScenario("");
                setResponse("You cruise to the cool colored Coral");
                setTimeout(() => {
                  setNavText("W1: If (Condition) then Coral");
                  transition(WEEK_1_S3);
                  setScenario("");
                  setResponse("");
                }, 3000);
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
              } else {
                setA(true);
                setScenario("");
                setResponse("You approach an Array of Anemones");
                setTimeout(() => {
                  setNavText("W1: Array = [ A, n, e, m, o, n, e, s ] ");
                  transition(WEEK_1_S4);
                  setScenario("");
                  setResponse("");
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
              } else {
                setL(true);
                setScenario("");
                setResponse(
                  "You'd like to linger no longer, so let's look at lots of Looping Leeches"
                );
                setTimeout(() => {
                  setNavText("W1: for (Leech of Leeches)");
                  transition(WEEK_1_S5);
                  setScenario("");
                  setResponse("");
                }, 3000);
              }
              resetTranscript();
            },
            isFuzzyMatch: true,
          },
          {
            command: ["Lighthouse", "Entrance", "Test"],

            callback: () => {
              setResponse("");
              setScenario("");
              if (!f && !o && !c && !a && !l) {
                setResponse(
                  `Silly ${player}, you can't just warp there through a pipe like some video game.`
                );
              } else {
                setResponse("Pop Quiz Hotshot!");
                setScenario(
                  "To progress further in Lighthouse Labs you must pass your Week 1 test!"
                );
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
                    setScenario(
                      `Check out the big brain on ${player}! You got 100%. You must have studied very hard. You've earned an extra life for fully understanding our FOCAL points`
                    );
                    setResponse(
                      "You earn a gold star! ⭐ (And an extra life 💖)"
                    );
                    setLives(lives + 1);
                  } else {
                    setScenario(
                      `Ooh tough break ${player}! You got ${score} out of 100. You needed 90% to pass. You are going to have to study extra hard over the weekends to get caught up. Not off to a great start, better try harder in Week 2!`
                    );
                  }
                }, 3000);
                setTimeout(() => {
                  setNavText("WEEK 2: Cats & ISS & API oh my!");
                  transition(WEEK_2);
                  setScenario("");
                  setResponse("");
                }, 10000);
              }
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
            command: ["eat *", "taste", " bite"],

            callback: () => {
              setResponse("You pop a tasty looking 🍄 into your mouth");
              setScenario("As you chew you feel a weird tingling sensation");
              setTimeout(() => {
                const mushrooms = ["1up", "big", "poison"];
                const rngMush = mushrooms[Math.floor(Math.random() * 3)];
                switch (rngMush) {
                  case "1up":
                    setScenario(
                      `Wow ${player}! That's what you call gamer accumen!`
                    );
                    setResponse("You found a secret 1up!💖");
                    setLives(lives + 1);
                    break;
                  case "big":
                    setScenario(
                      "You found a Super Mushroom! You quickly double in size"
                    );
                    setResponse(`It's a-you, Super ${player}!`);
                    setBig(true);
                    break;
                  case "poison":
                    setScenario(
                      "A few minutes pass when your tongue goes num and your stomach begins to cramp up"
                    );

                    setTimeout(() => {
                      setScenario(
                        "This particular mushroom is not magically delicious"
                      );
                      setTimeout(() => {
                        setResponse("it's magically DEADLY! ☠");
                        setTimeout(() => {
                          setScenario(
                            "The Fn(Fungus) hit you with an arrow function => "
                          );
                          setResponse("Oh no! You can't handle *this*!");
                          setTimeout(() => {
                            if (big) {
                              setResponse(
                                "You shrink back down to regular size"
                              );
                              setBig(false);
                            } else {
                              setResponse("You lost a life! 💔");
                              setLives(lives - 1);
                              if (lives === 0) {
                                setScenario(
                                  "Many have died to mushrooms, you were just the Last of Us😏"
                                );
                              }
                            }
                          }, 3000);
                        }, 3000);
                      }, 3000);
                    }, 3000);
                    break;
                  default:
                }
              }, 5000);
              setResponse("");
              setScenario("");
              resetTranscript();
            },
            isFuzzyMatch: true,
          },
          {
            command: ["pick up", "take", "pocket", "keep"],

            callback: () => {
              if (!mushroom) {
                setScenario("");
                setResponse(
                  "Sure, why not. Mushroom foraging is legal, right?"
                );
                setScenario(
                  "You decide to put a mushroom in your pocket for later"
                );
                setMushroom(true);
              } else {
                setResponse("Calm down greedy! You already have one.");
                setScenario(
                  "You overestimate your ability to carry mushrooms. You leave the rest of the mushrooms on the ground so others can have some too"
                );
                setMushroom(true);
              }
              // after a delay, will continue on to next scenario
              setTimeout(() => {
                setScenario("");
                setResponse("");
              }, 5000);
            },
            isFuzzyMatch: true,
          },
          {
            command: ["Leave", "get up", "stand"],

            callback: () => {
              if (big) {
                setResponse(
                  "You pounce to your feet, towering over the Functional Fungus"
                );
                setScenario(
                  "You crushed the entire room into mush with your giant feet."
                );
              } else {
                setResponse("You rise to your feet to flee these fungi");
              }
              setTimeout(() => {
                setNavText("WEEK 1: Wading into Lotide");
                setResponse("");
                setScenario("");
                transition(WEEK_1B);
              }, 7000);
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
              setScenario(
                "You grab a bigger hammer, and smash apart all the Oysters. You might not have learned alot but you got through them. However that wasn't the objective of studying these Objects"
              );
              setTimeout(() => {
                setResponse("You lost a life! 💔");
                setLives(lives - 1);
              }, 4000);
              setTimeout(() => {
                setNavText("WEEK 1: Wading into Lotide");
                setResponse("");
                setScenario("");
                transition(WEEK_1B);
              }, 10000);
              resetTranscript();
            },
            isFuzzyMatch: true,
          },
          {
            command: ["(ask for) help", "Assistance (Request)", "ask a *"],

            callback: () => {
              setResponse("You've gained a pearl of wisdom! 🦪");
              setScenario(
                "You decide to make an Assistance Request and you are greeted by a mentor named Walrus. He reviews your work and notices the hammer in your carpenter like hands. He offers you some eSTEAMed insights on how to crack open the solution. Thankful and wiser, you continue your journey"
              );

              setTimeout(() => {
                setNavText("WEEK 1: Wading into Lotide");
                transition(WEEK_1B);
                setScenario("");
                setResponse("");
              }, 10000);
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
                setScenario(
                  "You throw on your shoes and take a step... CRUNCH!!! Oops! It seems you are still super-sized from that mushroom earlier... you crush the Coral into sand beneth your feet as you walk away"
                );
                setTimeout(() => {
                  setNavText("WEEK 1: Wading into Lotide");
                  setResponse("");
                  setScenario("");
                  transition(WEEK_1B);
                }, 8000);
              } else {
                setScenario(
                  "You put your shoes back on before doing anything else because you realize the Condition your feet would be in if you didn't. Now you can walk around the Coral with your feet in-tact"
                );
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
                setScenario(
                  "Eager to return on your quest to be the best programmer, you left before learning enough about Conditionals and Coral. You severly cut your feet trying to leave without your shoes. You shove your toes back into your now blood-red shoes."
                );
                setTimeout(() => {
                  setResponse("You lost a life! 💔");
                  setLives(lives - 1);
                }, 8000);
              } else {
                setScenario(
                  "You feel good about the Condition you are leaving the Coral in and your understanding of both Coral and Conditionals"
                );
              }
              setTimeout(() => {
                setNavText("WEEK 1: Wading into Lotide");
                transition(WEEK_1B);
                setScenario("");
                setResponse("");
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
                setScenario(
                  "You take a step closer to inspect the coral... CRUNCH!!! It seems you are still super-sized from that mushroom earlier... you crush the Coral into sand beneth your feet and walk away in shame."
                );
              }
              if (!boolean) {
                setResponse("Oh no! your feet!! 👣");
                setScenario(
                  "You severly cut your feet trying get close to the coral without your shoes. You shove your toes back into your now blood-red shoes."
                );
              } else {
                setScenario(
                  "You spend the exact right amount of time learning about Ifs, Thens, and everything Else. You learn so much about Conditionals, you even improve your heart Condition!"
                );
                setTimeout(() => {
                  setResponse("You found a secret 1up!💖");
                  setLives(lives + 1);
                }, 6000);
              }
              setTimeout(() => {
                setNavText("WEEK 1: Wading into Lotide");
                transition(WEEK_1B);
                setScenario("");
                setResponse("");
              }, 8000);

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
              setScenario(
                "You whip out some Index cards and take an Array of notes. You learn you can push, pop, and even slice them"
              );
              setTimeout(() => {
                setResponse("");
                setScenario("What do you want to do now?");
              }, 4000);

              resetTranscript();
            },
            isFuzzyMatch: true,
          },
          {
            command: ["Leave", "go back"],

            callback: () => {
              setScenario(
                "You decide to leave. Anemones are fine and all but if you are going to spend any more time here, you want Arrays"
              );

              setTimeout(() => {
                setNavText("WEEK 1: Wading into Lotide");
                transition(WEEK_1B);
                setResponse("");
                setScenario("");
              }, 10000);
              resetTranscript();
            },
            isFuzzyMatch: true,
          },
          {
            command: ["pop", "push", "slice", "splice"],

            callback: () => {
              setResponse("You use your Array methods on the Anemones");

              setScenario(
                "You get your hands dirty by finding, filtering, popping, pushing, splicing and slicing the Anemones. For purposes of this exercise we'll say you both had a great time. You tickled their fancy and you enjoyed learning code from these creatures. You leave the Array after having made a friend out of Anemone!"
              );
              setTimeout(() => {
                setResponse("Your heart grew one size that day!💖");
                setLives(lives + 1);
              }, 8000);

              setTimeout(() => {
                setNavText("WEEK 1: Wading into Lotide");
                transition(WEEK_1B);
                setResponse("");
                setScenario("");
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
              setResponse("No Break, Continue to study? You got it sucker!");
              setScenario(
                "You stay amongst the Leeches and study how they were able to suck you back in. Learning about loops and realizing that you are in an infinite loop. The Leeches are positive you didn't close off your code properly. If the Looping Leeches never become false, you can't get out!"
              );
              setTimeout(() => {
                setResponse("How now, Inspector?");
                setScenario("");
              }, 12000);

              resetTranscript();
            },
            isFuzzyMatch: true,
          },
          {
            command: ["Leave", "go back"],

            callback: () => {
              setScenario("You decide to leave. ");

              setTimeout(() => {
                setNavText("WEEK 1: Wading into Lotide");
                transition(WEEK_1B);
                setResponse("");
                setScenario("");
              }, 10000);
              resetTranscript();
            },
            isFuzzyMatch: true,
          },
          {
            command: [
              "(take a quick) break",
              "(short) break",
              "keep going",
              "(quick) break",
              "(take a) break",
            ],

            callback: () => {
              setBoolean(true);
              setResponse("Is this a little too meta?");

              setScenario(
                "Your Final project has an infinite loop on the main branch. You don't waste time re-writing all of the new code. Instead you take a Break and chat with your team to resolve. Bothou and the Looping Leeches in your code got a Break."
              );

              setTimeout(() => {
                setNavText("WEEK 1: Wading into Lotide");
                transition(WEEK_1B);
                setScenario("");
              }, 12000);

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
              setScenario(
                "You successfully hack into Tweeter's systems, but trigger the security alarms."
              );

              setLives(lives - 1);
              setTimeout(() => {
                setScenario(
                  "After pushing to main, the Tweeter Police show up and you are arrested for hacking into a (not so) secure system"
                );
                setTimeout(() => {
                  if (lives <= 0) {
                    setScenario("");
                    transition(GAMEOVER);
                    setGameOverText(
                      "Looks like you ran out of lives. Better luck next time."
                    );
                    setNavText(
                      "Say 'Restart' or 'Home' to return to Main menu"
                    );
                    setResponse("");
                  }

                  setScenario("");
                  setNavText("WEEK 4: SCENARIO 2");
                  transition(WEEK_4_S2);
                }, 6000);
              }, 7000);
              resetTranscript();
            },
            isFuzzyMatch: true,
            matchInterim: true,
          },
          {
            command: ["(ask) classmates", "(ask) peers"],
            callback: () => {
              setNavText("WEEK 4: SCENARIO 1");
              setScenario(
                "You ask your classmates for help, but they are all too busy with their own projects."
              );

              setTimeout(() => {
                setScenario("");
                transition(WEEK_4_S1);
              }, 6000);
              resetTranscript();
            },
            isFuzzyMatch: true,
            matchInterim: true,
          },
          {
            command: ["mentor", "queue"],
            callback: () => {
              setLives(lives + 1);

              setScenario(
                "After waiting in the queue for what feels like ages, you finaly connect with a Mentor and explain your situation."
              );

              setTimeout(() => {
                setScenario(
                  "Lucky for you, this mentor was an Ex Tweeter employee who knew the ins and outs of Tweeter's source code."
                );
                setTimeout(() => {
                  setScenario(
                    "The mentor shares their knowledge and you carry on with your research"
                  );
                  setTimeout(() => {
                    setNavText("WEEK 4: SCENARIO 3");
                    setScenario("");
                    transition(WEEK_4_S3);
                  }, 5000);
                }, 6000);
              }, 6000);

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
                setScenario(
                  "You grab the laptop and use your coding skills to open your jail cell"
                );

                setTimeout(() => {
                  setScenario(
                    "While the guards are looking away you sneak out and successfully escape"
                  );

                  setTimeout(() => {
                    setScenario(
                      "You get back home safely continue your mission to save Tweeter."
                    );

                    setTimeout(() => {
                      setNavText("WEEK 4: SCENARIO 3");
                      setScenario("");
                      transition(WEEK_4_S3);
                    }, 6000);
                  }, 6500);
                }, 7000);
              } else {
                setLives(lives - 1);
                setScenario(
                  "Whoops...You pick up the laptop, but it slips and lands right on your toe"
                );

                if (lives <= 0) {
                  transition(GAMEOVER);
                  setGameOverText(
                    "Death by dusty laptop. Thats pretty embarassing..."
                  );
                  setNavText("Say 'Restart' or 'Home' to return to Main menu");
                  setScenario("");
                }

                setTimeout(() => {
                  setScenario("");
                  transition(WEEK_4_S2);
                }, 7000);
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
                setScenario(
                  "You bribe the guards with the last of your coffee bean fund and successfully escape jail."
                );

                setTimeout(() => {
                  setScenario(
                    "You get back home safely continue your mission to save Tweeter."
                  );
                  setTimeout(() => {
                    setNavText("WEEK 4: SCENARIO 3");
                    transition(WEEK_4_S3);
                  }, 4000);
                }, 7000);
              } else {
                setLives(lives - 1);

                if (lives <= 0) {
                  transition(GAMEOVER);
                  setGameOverText("Maybe the guard went a bit overboard...");
                  setNavText("Say 'Restart' or 'Home' to return to Main menu");
                  setScenario("");
                }

                setScenario(
                  "The guard roasts your haircut and goes back to his duties."
                );

                setTimeout(() => {
                  setScenario("It was super effective.");
                  setTimeout(() => {
                    transition(WEEK_4_S2);
                    setNavText();
                  }, 5000);
                }, 6000);
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
              setScenario("You use your TELUS benefits to rent a helicopter");
              setLives(lives - 1);
              setTimeout(() => {
                setScenario(
                  "But you crash as soon as you take off because you forgot you're a programmer, not a pilot"
                );

                if (lives <= 0) {
                  setTimeout(() => {
                    transition(GAMEOVER);
                    setGameOverText(
                      "Should've probably packed a parachute too."
                    );
                    setNavText(
                      "Say 'Restart' or 'Home' to return to Main menu"
                    );
                    setScenario("");
                  }, 6000);
                } else {
                  setTimeout(() => {
                    setScenario("You walk back home in shame");

                    setTimeout(() => {
                      transition(WEEK_4_S4);
                      setNavText("WEEK 4: SCENARIO 4");
                      setScenario("");
                    });
                  }, 6000);
                }
              }, 7000);

              resetTranscript();
            },
            isFuzzyMatch: true,
          },
          {
            command: ["transit", "public transport"],
            callback: () => {
              setResponse("");

              setScenario(
                "After checking transit routes, you find out it will be a 7 hour commute, you take emotional damage and reconcider."
              );

              setTimeout(() => {
                setNavText("WEEK 4: SCENARIO 4");
                transition(WEEK_4_S4);
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
                "After a couple steps outside you return home exhausted and embarassed."
              );

              setTimeout(() => {
                setResponse("");
                transition(WEEK_4_S3);
                setScenario("");
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

              setScenario(
                "You use your coding skills to create a virtual version of Tweeter called 'Two-weeter' and successfully save all the tweets."
              );

              setTimeout(() => {
                setScenario(
                  "You are hailed as a hero and thanked personally from the CEO of Tweeter. Just in time for week 5 of bootcamp 😉"
                );

                setTimeout(() => {
                  setScenario("A cheque would've been nice though...");
                  setTimeout(() => {
                    setNavText("WEEK 4: SCENARIO 1");
                    transition(WEEK_5);
                    setScenario("");
                  }, 5000);
                }, 6000);
              }, 7000);
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

              setScenario(
                "You decide to build a time machine, but it sends you to the year 2077."
              );

              setTimeout(() => {
                setScenario(
                  "You discover that Tweeter no longer exists. With no place for people to post thier questionable Tweets, the world has plunged into utter chaos."
                );

                setTimeout(() => {
                  setScenario("Mission Failed.");
                  setTimeout(() => {
                    setNavText(
                      "Say 'Restart' or 'Home' to return to Main menu"
                    );
                    transition(GAMEOVER);
                    setGameOverText("And its allll your fault 🙂");
                    setLives(0);
                  }, 5000);
                }, 6000);
              }, 7000);
              resetTranscript();
            },
            isFuzzyMatch: true,
            matchInterim: true,
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

const WEEK_4 = "WEEK_4";
const WEEK_4_S1 = "WEEK_4_S1";
const WEEK_4_S2 = "WEEK_4_S2";
const WEEK_4_S3 = "WEEK_4_S3";
const WEEK_4_S4 = "WEEK_4_S4";

const WEEK_5 = "WEEK_5";
