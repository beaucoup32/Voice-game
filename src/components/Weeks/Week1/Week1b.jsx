import { useState } from "react";


export default function Week1b(props) {
  const [scenario, setScenario] = useState("Welcome back. Where to next?");  
  if (props.f && props.o && props.c && props.a && props.l) {
    setScenario(`Excellent job! You are Ready for the Week 1 Test. say "Lighthouse" to proceed.`)
  }

  return (
    <>
      <h1>{props.scenario ? props.scenario : scenario}</h1>
      <img src="images/lighthouse-zoom.gif" className="scene-gif"/>
    </>
  );
};