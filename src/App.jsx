import { useState, useEffect } from "react";
import "./App.css";

const choices = ["rock", "paper", "scissor"];
const images = ["/rock.png","/paper.png","/scissor.png"];
function App() {
  const t = document.querySelector("#t");
  const opp = document.getElementById("opp");
  const res = document.querySelector(".result");
  let [result, SetResult] = useState("----");
  let [image, SetImage] = useState();
  useEffect(() => {
    document.title = result;
  }, [result]);

  function play(choice) {  
    if (!choices.includes(choice)) return;
    const choiceN = Math.ceil(Math.random() * choices.length)-1;
    const computerChoice = choices[choiceN];
    SetImage(image = images[choiceN])
    if (choice === computerChoice) {
      res.style.color = "white";
      t.style.color = "white";
      opp.style.borderColor = "white";
      SetResult("Draw");
    } else if (
      (choice === "rock" && computerChoice === "scissor") ||
      (choice === "paper" && computerChoice === "rock") ||
      (choice === "scissor" && computerChoice === "paper")
    ) {
      t.style.color = "#00b803c7";
      res.style.color = "#00b803c7";
      opp.style.borderColor = "#00b803c7";
      SetResult("Win");
    } else {
      res.style.color = "red";
      t.style.color = "red";
      opp.style.borderColor = "red";
      SetResult("Lose");
    }
  }

  return (
    <>
      <div id="title">
        <h1 id="t">Rock, Paper, Scissors</h1>
      </div>
      <div className="choices">
        <button className="choice" id="rock" onClick={() => play("rock")} ></button>
        <button className="choice" id="paper" onClick={() => play("paper")}></button>
        <button className="choice" id="scissor" onClick={() => play("scissor")}></button>
      </div>
      <h1 className="result">{result}</h1>
      <br />
      <div className="box">
        <img src={image} className="choice" id="opp"/>
      </div>
    </>
  );
}

export default App;
