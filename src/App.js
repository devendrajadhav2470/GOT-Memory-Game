import React, { useState, useEffect } from "react";
import { Card } from "./components";
import khaliseeImage from "./images/khalisee.jpg";
import aryaImage from "./images/arya.jpg";
import hodorImage from "./images/hodor.jpg";
import jofferyImage from "./images/joffery.jpg";
import jonsnowImage from "./images/jonsnow.jpg";
import littlefingerImage from "./images/littlefinger-dies-game-thrones.jpg";
import tyrionImage from "./images/tyrioin.avif";
import houndImage from "./images/hound.jpg";
import ramsayImage from "./images/ramsay.jpg";
import tywinImage from "./images/tywin.jpg";
import sansaImage from "./images/sansa.jpg";
import "./app.css";

// okay now what, what do i do?
// let us think about that as well alright

function App() {
  const [arr, setarr] = useState([
    { id: 0, im: khaliseeImage, cap: "The Mother Of Dragons" },
    { id: 1, im: aryaImage, cap: "A girl with no name" },
    { id: 2, im: hodorImage, cap: "hold the door" },
    { id: 3, im: jofferyImage, cap: "A piece of shit" },
    { id: 4, im: jonsnowImage, cap: "The bastard" },
    { id: 5, im: littlefingerImage, cap: "Little Finger" },
    { id: 6, im: tyrionImage, cap: "He drinks and he knows things" },
    { id: 7, im: houndImage, cap: "The Hound" },
    { id: 8, im: tywinImage, cap: "Tywin Lannister" },
    { id: 9, im: sansaImage, cap: "Sansa!" },
    { id: 10, im: ramsayImage, cap: "nice guy ramsay" },
  ]);
  const [prev, setprev] = useState("-1");
  const [scr, setScr] = useState(0);
  const [highscr, setHighscr] = useState(0);
  const [clicked, setClicked] = useState([]);
  function handleScore(id) {
    console.log(clicked);
    if (clicked.includes(id)) {
      setScr(0);
      setClicked([]);
    } else {
      let temp = [...clicked];
      temp.push(id);
      setClicked(temp);
      setHighscr(Math.max(scr + 1, highscr));
      setScr(scr + 1);
    }
  }
  function handleClick(id) {
    // i have to randomize the array
    handleScore(id);
    const cur = [];
    for (let i = 0; i < 11; i++) cur[i] = 0;
    for (const ele of arr) {
      let cnt = 0;
      for (let i = 0; i < 11; i++) if (!cur[i]) cnt++;
      let pos = Math.floor(Math.random() * cnt);
      let tmp = 0;
      for (let i = 0; i < 11; i++) {
        if (!cur[i]) tmp++;
        if (tmp - 1 == pos) {
          cur[i] = ele;
          break;
        }
      }
    }
    setarr(cur);
  }
  return (
    <div className="App">
      <div className="heading">
        <div className="h2">
          <div className="logo">GOT Memory Game</div>
          <div className="instruction">
            Get points by clicking on an image but don't click on any more than
            once!
          </div>
        </div>
        <div className="scoreboard">
          <div>Score:{scr}</div> <div>High Score:{highscr}</div>
        </div>
      </div>
      <div className="gallery">
        <div className="first">
          <Card
            image={arr[0].im}
            caption={arr[0].cap}
            id={arr[0].id}
            onClick={handleClick}
          />
        </div>
        <div>
          <Card
            image={arr[1].im}
            caption={arr[1].cap}
            id={arr[1].id}
            onClick={handleClick}
          />
        </div>
        <div>
          <Card
            image={arr[2].im}
            caption={arr[2].cap}
            id={arr[2].id}
            onClick={handleClick}
          />
        </div>
        <div>
          <Card
            image={arr[3].im}
            caption={arr[3].cap}
            id={arr[3].id}
            onClick={handleClick}
          />
        </div>
        <div>
          <Card
            image={arr[4].im}
            caption={arr[4].cap}
            id={arr[4].id}
            onClick={handleClick}
          />
        </div>
        <div>
          <Card
            image={arr[5].im}
            caption={arr[5].cap}
            id={arr[5].id}
            onClick={handleClick}
          />
        </div>
        <div>
          <Card
            image={arr[6].im}
            caption={arr[6].cap}
            id={arr[6].id}
            onClick={handleClick}
          />
        </div>
        <div>
          <Card
            image={arr[7].im}
            caption={arr[7].cap}
            id={arr[7].id}
            onClick={handleClick}
          />
        </div>
        <div>
          <Card
            image={arr[8].im}
            caption={arr[8].cap}
            id={arr[8].id}
            onClick={handleClick}
          />
        </div>
        <div>
          <Card
            image={arr[9].im}
            caption={arr[9].cap}
            id={arr[9].id}
            onClick={handleClick}
          />
        </div>
        <div>
          <Card
            image={arr[10].im}
            caption={arr[10].cap}
            id={arr[10].id}
            onClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
}
// alright now what do we do ?
// i need to now think about the previous one ??
// yep i need now the previous one ??

export default App;
