import React from "react";
import colorPieza from "../lib/colorPieza";
import "./Panel.css"; 

const Panel = ({ array }) => {
  return (
    <div className="panel-container">
      {array.map((row, rowIndex) => (
        <div className="panel-row" key={rowIndex}>
          {row.map((cell, colIndex) => (
            <div className={`panel-cell ${colorPieza(cell)}`} key={colIndex}>
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
Explicación:
Lo que hace Panel y Pieza:
Panel.jsx:

Muestra el tablero principal del juego (modelos.matriz).
Usa map para recorrer las filas y celdas del tablero, pintándolas según su valor:
0: Celda vacía (sin contenido).
1: Bordes (border-cell).
Otros valores: Representan posibles piezas que se colocarán en el tablero.


*/
export default Panel;
