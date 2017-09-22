import React from "react";
import Game from "./Game";

function App(props){
  return (
    <div className="container">
      <h1>WHAT UP, I'm a Tamagotchi!!!</h1>
      <img src="https://media3.giphy.com/media/rpduCvHHRDNlK/200_s.gif"></img>
      <br/><br/>
      <Game/>
    </div>
  );
}

export default App;
