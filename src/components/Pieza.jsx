import React from "react";
import colorPieza from "../lib/colorPieza";
import "./Pieza.css"; 

const Pieza = ({ matriz }) => {
  return (
    <div className="pieza-container">
      {matriz.map((row, rowIndex) => (
        <div className="pieza-row" key={rowIndex}>
          {row.map((cell, colIndex) => (
            <div className={`pieza-cell ${colorPieza(cell)}`} key={colIndex}>
              {cell !== 0 && (
                <div className={`cell-content ${colorPieza(cell)}`}></div>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
/*
EXPLICACION----------------------------------------------------------------
Pieza.jsx:

Similar a Panel, pero muestra matrices individuales (las piezas del Tetris).
Renderiza dinámicamente las variantes de rotación de una pieza específica usando las matrices dentro de modelos.piezas.



*/
export default Pieza;
