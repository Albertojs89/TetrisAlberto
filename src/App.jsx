import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Partidas from "./components/Partidas";
import {Header} from './components/Header';

function App() {
  

  return (
    <>
      <Header />
      <div className="App">
        <Partidas />
      </div>
    </>
  );
}

export default App
