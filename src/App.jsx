import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Partidas from "./components/Partidas";
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import modelos from "./lib/modelos";
import Juego from "./views/Juego";
import Inicio from './components/Inicio';
import Ranking from "./components/Ranking"; // Importamos el nuevo componente de Ranking

function App() {
  console.log("Modelos cargados:", modelos);
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/partidas" element={<Partidas />} />
            <Route path="/ranking" element={<Ranking partidas={[]} />} />{" "}
            {/* Nueva ruta para el ranking */}
            <Route path="/juego" element={<Juego />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}


export default App
