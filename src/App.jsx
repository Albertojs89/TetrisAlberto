import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Partidas from "./components/Partidas";

function App() {
  

  return (
    <>
      <div>
        <a href="" target="_blank">
          <img
            src="https://th.bing.com/th/id/R.1a56719bd55538b16725160d071acacb?rik=%2fd48wcHgiwnZSA&riu=http%3a%2f%2fwww.pngmart.com%2ffiles%2f13%2fTetris-Logo-PNG-Image.png&ehk=Fa1JlyhJXr4DxFChC6ovyCgUELzDMW04KXmTn8T4l24%3d&risl=&pid=ImgRaw&r=0"
            className="logo"
            alt="Vite logo"
          />
        </a>
      </div>
      <h1>
        <a href="" className="logo">
          TETRIS
        </a>
      </h1>
      <h2>
        <a href="" className="logo">
          Alberto
        </a>
      </h2>

      <div className="App">
        <Partidas />
      </div>
    </>
  );
}

export default App
