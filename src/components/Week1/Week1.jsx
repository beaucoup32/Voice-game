
const Week1 = (props) => {
  const WEEK_2 = "WEEK_2";
  const navTitle = ["Wading into Lotide"]

  const scenario = [
    setResponse()
    `Congratulations ${props.username}! It looks like you completed all your Prep Work.`,
    "What's that smell you ask? Well you can only make it in the Lighthouse during low-tide.",    
    "Please be careful as you trek into Lighthouse Labs",
    "The ground is wet, reeking of Functional Fungus, Objective Oysters, Contidtional Coral, Arrays of Anemones, and Looping Leeches",
    
    // SHOW: Lighthouse nearby across low water (with text overlay)
            "Which way do you want to go?"

  /* Commands: 
      - Function / Fungus / Mushroom
      "You manage to muster enough muscle memory to move toward the Mushrooms"
      {transision(Mushroom)}

      - Objects / Oyster
      "You saunter slyly to sneak up on some shellfish"
      {transistion(Oyster)}
        
      - Conditionals / Coral
      "You cruise across the seascape closer to see cool colored Coral"
      {transition(Coral)}
    
      - Array / Anemone
      "You agree to amble along your adventure and approach an Array of Anemones"
      {transition(Anemone)}
      
      - Loop / Leech
      "You'd like to linger no longer, so let's look at lots of Looping Leeches"
      {transition(Anemone)}
      
      - Lighthouse
        `Silly ${username}, you can't just warp there through a pipe like some video game.`
        "So seriously, which way do you want to go?"
    
      




  */
   ]
    
  return (
    <div className="container">
      <h2>Tell me your name :</h2>
      {transcript}
    </div>
  );
};

export default GameStart;
