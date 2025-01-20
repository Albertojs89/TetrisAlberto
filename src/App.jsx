import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Partidas from "./components/Partidas";
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<h1>Bienvenido a Tetris</h1>} />
            <Route path="/partidas" element={<Partidas />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App
