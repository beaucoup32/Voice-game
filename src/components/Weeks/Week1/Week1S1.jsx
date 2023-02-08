import { useState, useEffect, useMemo } from "react";

export default function Week1S1(props) {
  const { scenario, setScenario } = useState("")
  const { index, setIndex } = useState(0);

  const welcome = useMemo(() => [
    "You make your way over to a patch of Mushrooms and sit down atop them like the Cheshire Cat",
    "They are so comfy you can barely Function",
    "Enough of that, let's have some fun guy...",
    "What do you want to do now?",
  ], []);
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => {
        if (prev === welcome.length - 1) {
          clearInterval(timer);
          return prev;
        }
        return prev + 1;
      });
    }, 2000);
    return () => clearInterval(timer);
  }, [setIndex, welcome.length]);

  useEffect(() => {
    setScenario(welcome[index]);
  }, [index, welcome, setScenario]);

  return <h1>{scenario}</h1>;
}

//  SHOW: Mushrooms gif/image
/*
      Commands:
        - eat{
          "You pop a tasty looking Mushroom into your mouth"
            (rng lose a life, gain a life, get bigger)

              1up:
                `Dang check out the gamer accumen on ${username}! You found a secret 1up!`
                -play mario 1up sound if possible 
                -life +1          
              
              big:
                "As soon as you start chewing you feel something happening..",
                "You found a Super Mushroom! You quickly double in size"
                "Note to presenter, zoom in so you look bigger on camera"
                "Welcome to the Super ${username} Super Show!"
                big = true
                  setUsername("Super"+${username})                  

              lose life: 
                "A few minutes pass and your tongue goes numb, your stomach begins to cramp up", "This particular mushroom was not your lucky charm."
                "It's not magically delicious, it's magically DEADLY!",
                display:
                  "This Fn(Mushroom) hit you with it's arrow function =>"
                "Oh no! You can't handle *this*!"
                if big === true
                  "You shrink back down to regular size"
                  big = false
                   setUsername (-Super from {$username})
                else
                  life -1
                  "You lost a life"
                    (if life === 0)
                      "Many others have died to mushrooms, you were just the Last of Us"
                      death = true
          }          
          
        - take / pocket
          "You decide to put a mushroom in your pocket for later"
            mushroom = true  
            add 🍄 to navbar next to logo?

        - leave / get up / stand / step        
          if big  {      
            "You pounce to your feet, towering over the Functional Fungus"
            "crushing the room into mush with your giant feet"
          else
            "you rise to your feet to flee the fungi"}            
          "Do you feel the Functional Fungus are under-your-standing now?"
            -yes "You leave the mushroom patch"
            transition(Week1B)
            -no "Alright king, let's stay in your Mushroom Kingdom."
                transition(Mushroom2)          

          
        - give:
            "Who do you want to give the mushroom to?"
              - Fungus
                  "You wonder why you picked it up to begin with."
                  "You take the mushroom out of your pocket and toss it back to the ground"
                  transition(Mushroom2)
              - Oyster 
                  "You aren't close enough to any Oysters to use that Object"
                  "You saunter slyly to sneak up on some shellfish"
                  transition(Oyster)
              - Coral
                  "You aren't close enough to the Coral here"
                  "However *If* you were closer *Then* the Condition would be met"
                  "You cruise across the seascape closer to see cool colored Coral"
                  transition(Coral)
              - Anemone
                  "I see you keep your friends close, but wish your Anemones were closer."
                  "You decide to amble along your adventure and approach an Array of Anemones"
                  transistion(Anemone)
              - Leech
                  "Those little suckers aren't at this location"
                  "You'd like to linger no longer, so let's look at lots of Looping Leeches"
                  transistion(Leech)                        
        }

    
      




  */
