import React, { useState, useEffect } from "react";
import Panel from "../components/Panel";
import Pieza from "../components/Pieza";
import modelos from "../lib/modelos";
import "./Juego.css";

const Juego = () => {
  const [arrayCasillas, setArrayCasillas] = useState(modelos.matriz);

  // Estado para la pieza activa y su posición
  const [piezaActiva, setPiezaActiva] = useState(null);
  const [posicionPieza, setPosicionPieza] = useState({ x: 4, y: 0 });

  // Función para generar una nueva pieza aleatoria
  const generarPiezaNueva = () => {
    const piezas = modelos.piezas;
    const piezaAleatoria = piezas[Math.floor(Math.random() * piezas.length)];
    setPiezaActiva(piezaAleatoria);
    setPosicionPieza({ x: 4, y: 0 }); // Posición inicial
  };

  // Insertar la pieza activa en la matriz del tablero
  const actualizarTablero = () => {
    if (!piezaActiva) return;

    // Crear una copia de la matriz del tablero
    const nuevoTablero = arrayCasillas.map((fila) => [...fila]);

    // Obtener la forma de la pieza (siempre tomamos la variante 0 por ahora)
    const formaPieza = piezaActiva.matriz[0];

    // Insertar la pieza en la posición actual
    for (let row = 0; row < formaPieza.length; row++) {
      for (let col = 0; col < formaPieza[row].length; col++) {
        if (formaPieza[row][col] !== 0) {
          // Si no es un espacio vacío
          const nuevaX = posicionPieza.x + col;
          const nuevaY = posicionPieza.y + row;
          if (nuevoTablero[nuevaY] && nuevoTablero[nuevaY][nuevaX] === 0) {
            nuevoTablero[nuevaY][nuevaX] = formaPieza[row][col]; // Coloca la pieza en la matriz
          }
        }
      }
    }

    // Actualizar el estado con la nueva matriz
    setArrayCasillas(nuevoTablero);
  };

  // Efecto para actualizar el tablero cada vez que cambia la pieza activa o su posición
  useEffect(() => {
    actualizarTablero();
  }, [piezaActiva, posicionPieza]);

  // Generamos una pieza al iniciar el juego
  useEffect(() => {
    generarPiezaNueva();
  }, []);

  return (
    //Vista del panel de juego----->
    <div className="juego-container">
      <h2 className="text-center">¡Start!</h2>
      <Panel array={arrayCasillas} />


      {/* Vista de la pieza activa */}
      {piezaActiva && (
        <div className="pieza-activa-container">
          <h3 className="text-center">Pieza Activa</h3>
          <Pieza matriz={piezaActiva.matriz[0]} />
        </div>
      )}

      {/* Vista de piezas (mantiene el diseño anterior) */}
=======
    {/* Vista de las piezas */}
main
      <h3 className="text-center mt-4">Vista de Piezas</h3>
      <div className="piezas-grid">
        {modelos.piezas.map((pieza, index) => (
          <div key={index} className="pieza-container">
            <h4 className="text-center">{pieza.nombre}</h4>
            {pieza.matriz.map((variante, varianteIndex) => (
              <div key={varianteIndex} className="variante-pieza">
                <Pieza matriz={variante} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

/*
Flujo completo
modelos.piezas.map:

Recorre todas las piezas del Tetris.
Por cada pieza:
Renderiza un contenedor (pieza-container) con:
Nombre de la pieza.
Sus variantes.
pieza.matriz.map:

Por cada variante de rotación de la pieza:
Renderiza un contenedor (variante-pieza) con el componente Pieza.
Pieza:

Renderiza las matrices individuales como mini-tableros con filas y celdas.



Explicacion detallada de cada paso:

-Declaramos el componente juego y inicializamos un estado llamado arrayCasillas con modelos.matriz(la matriz principal del tablero Tetris). (repasar ejercicios usestate si hace falta)
Es necesario usestate porque el tablero puede cambiar durante el juego.

-Renderizar el tablero
<Panel array={arrayCasillas} />

Renderiza el componente Panel que es responsable de mostrar el tablero del juego.
Pasamos arrayCasillas como prop al componente Panel.
*recordar que este componente contiene la matriz principal del tablero (modelos.matriz) que se usa para pintar las celdas en el tablero.
Resumen:
Panel recorre arrayCasillas (la matriz) y pinta cada celda (vacía, borde o pieza) en el tablero de Tetris.
importante:
        Diferencia entre useState y props
        useState:
        Sirve para almacenar datos que pueden cambiar durante la vida del componente.
        Cambiar el estado (setArrayCasillas) provoca un re-render automático.
        props:
        Son datos que se pasan desde un componente padre (Juego) a un componente hijo (Panel).
        Son de solo lectura (inmutables) en el componente hijo.


DESGLOSE DE COMO PINTAMOS LAS PIEZAS Y RECORREMOS EL ARRAY
Desglose:
piezas-grid:

Es el contenedor principal donde organizamos todas las piezas.
Sus estilos (en CSS) aseguran que las piezas estén alineadas y separadas visualmente.
modelos.piezas.map:

Usamos el método .map() para recorrer el array modelos.piezas.
Por cada pieza del array:
Creamos un contenedor individual (pieza-container) que agrupa el nombre de la pieza y sus variantes.
index:

Es el índice actual del array (cada pieza tiene un índice único).
Lo usamos para asignar la prop key al contenedor. Esto ayuda a React a identificar los elementos únicos y manejar el renderizado eficientemente.

Desglose:
pieza-container:

Es el contenedor individual para cada pieza del Tetris (por ejemplo, "Ele", "T", etc.).
Contiene:
Un encabezado (h4) con el nombre de la pieza.
Una lista de sus variantes de rotación.
pieza.nombre:

Muestra el nombre de la pieza actual (por ejemplo, "Ele", "T").
Viene del objeto pieza que estamos recorriendo en modelos.piezas.
pieza.matriz.map:

Iteramos sobre las variantes de rotación de la pieza actual (cada matriz dentro de pieza.matriz).
variante: Representa una matriz específica de esa pieza (por ejemplo, un ángulo de rotación).
variante-pieza:

Contenedor para una variante de la pieza.
Cada variante se renderiza de forma independiente dentro del componente Pieza
*/
export default Juego;
