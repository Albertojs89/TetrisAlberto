import React, { useState } from "react";
import Panel from "../components/Panel";
import modelos from "../lib/modelos";
import "./Juego.css";
const Juego = () => {
  // Inicializar estado con la matriz principal de `modelos`
  const [arrayCasillas, setArrayCasillas] = useState(modelos.matriz);

  return (
    <div className="juego-container">
      <h2 className="text-center">Start</h2>
      <Panel array={arrayCasillas} />
    </div>
  );
};
/*
Explicación:
Estado arrayCasillas:
Usamos useState para inicializar el tablero con modelos.matriz. Este estado podrá modificarse en el futuro para actualizar las casillas dinámicamente.

Prop array:
Pasamos el estado arrayCasillas como prop al componente Panel, asegurando que el tablero renderice correctamente.
*/
export default Juego;
