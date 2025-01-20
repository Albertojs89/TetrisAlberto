import React from "react";
import "./Panel.css"; 

const Panel = ({ array }) => {
  return (
    <div className="panel-container">
      {array.map((row, rowIndex) => (
        <div className="panel-row" key={rowIndex}>
          {row.map((cell, colIndex) => (
            <div
              className={`panel-cell ${cell === 1 ? "border-cell" : ""}`}
              key={colIndex}
            >
              {}
              {cell !== 0 && (
                <div className={`cell-content cell-${cell}`}></div>
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
El componente Panel renderiza un tablero en base a un array bidimensional pasado como prop (array).

Prop recibida: const Panel=({array})
-array es un prop que contiene el array bidimensional (por ejemplo, 22 filas y 12 columnas) que representa el tablero.
Este array se renderiza dinámicamente dentro del componente.

Renderizar las filas del tablero:

  {array.map((row, rowIndex) => (
  <div className="panel-row" key={rowIndex}>
    ...
  </div>
  ))}
-Se utiliza map para iterar sobre cada fila del array (row).
Por cada fila, se genera un div con la clase panel-row.
key={rowIndex} asigna un identificador único basado en el índice de la fila.

Renderizar celdas de cada fila:

    {row.map((cell, colIndex) => (
  <div
    className={`panel-cell ${cell === 1 ? "border-cell" : ""}`}
    key={colIndex}
  >
    ...
  </div>
    ))}

-Dentro de cada fila, se utiliza otro map para iterar sobre cada celda (cell).
Por cada celda:
Se genera un div con la clase panel-cell.
Si el valor de la celda es 1, se añade la clase extra border-cell.
key={colIndex} asegura un identificador único por celda.

Condicional para contenido adicional:

    {cell !== 0 && (
      <div className={`cell-content cell-${cell}`}></div>
    )}

-Si la celda no está vacía (cell !== 0):
-Se renderiza un div adicional con la clase cell-content y una clase dinámica cell-${cell}.
Esto se puede usar para estilizar diferentes tipos de contenido (por ejemplo, piezas del Tetris representadas por valores diferentes en el array).


*/
export default Panel;
