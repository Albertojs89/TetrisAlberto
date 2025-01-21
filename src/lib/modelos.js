const modelos = {
  matriz: [
    // Matriz inicial del tablero (12x20 con bordes)
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  ],
  piezas: [
    
    {
      nombre: "T",
      matriz: [
        [
          [0, 3, 0],
          [3, 3, 3],
        ],
        [
          [3, 0],
          [3, 3],
          [3, 0],
        ],
        [
          [3, 3, 3],
          [0, 3, 0],
        ],
        [
          [0, 3],
          [3, 3],
          [0, 3],
        ],
      ],
    },
    {
      nombre: "L",
      matriz: [
        [
          [0, 0, 4],
          [4, 4, 4],
        ],
        [
          [4, 0],
          [4, 0],
          [4, 4],
        ],
        [
          [4, 4, 4],
          [4, 0, 0],
        ],
        [
          [4, 4],
          [0, 4],
          [0, 4],
        ],
      ],
    },
    {
      nombre: "Z",
      matriz: [
        [
          [5, 5, 0],
          [0, 5, 5],
        ],
        [
          [0, 5],
          [5, 5],
          [5, 0],
        ],
      ],
    },
    {
      nombre: "S",
      matriz: [
        [
          [0, 6, 6],
          [6, 6, 0],
        ],
        [
          [6, 0],
          [6, 6],
          [0, 6],
        ],
      ],
    },
    {
      nombre: "O",
      matriz: [
        [
          [7, 7],
          [7, 7],
        ],
      ],
    },
    {
      nombre: "I",
      matriz: [[[8], [8], [8], [8]], [[8, 8, 8, 8]]],
    },
  ],
};

/*
matriz (el tablero):

Es un array bidimensional que representa el tablero de juego (con 22 filas y 12 columnas).
Cada número en la matriz indica el contenido de la celda:
0: Célula vacía.
1: Bordes del tablero (se renderizan con una clase específica border-cell).

piezas(piezas del tetris)
Es un array de objetos, donde cada objeto representa una pieza del Tetris.
Cada pieza tiene:
Un nombre (nombre: como "Ele").
Variantes de rotación (matriz: un array de matrices)
*/
export default modelos;
