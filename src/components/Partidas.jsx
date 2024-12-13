import React, { useState } from "react";
import "./Partidas.css";


const Partidas = () => {
  const [arrayPrueba, setArrayPrueba] = useState([
    { nick: "Jugador1", puntos: 150, fecha: "2024-12-01" },
    { nick: "Jugador2", puntos: 200, fecha: "2024-12-02" },
    { nick: "Jugador3", puntos: 100, fecha: "2024-12-03" },
  ]);

  const ordenarPor = (campo) => {
    const arrayOrdenado = [...arrayPrueba].sort((a, b) =>
      a[campo] > b[campo] ? 1 : -1
    );
    setArrayPrueba(arrayOrdenado);
  };

  return (
    <div>
      <h2 className="mt-5">Listado de Partidas</h2>
      <table className="table table-dark table-hover table-bordered custom-table">
        <thead>
          <tr>
            <th>
              <button
                className="btn btn-primary m-3"
                onClick={() => ordenarPor("nick")}
              >
                Nick
              </button>
            </th>
            <th>
              <button
                className="btn btn-primary m-3"
                onClick={() => ordenarPor("puntos")}
              >
                Puntos
              </button>
            </th>
            <th>
              <button
                className="btn btn-primary m-3"
                onClick={() => ordenarPor("fecha")}
              >
                Fecha
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {arrayPrueba.map((partida, index) => (
            <tr key={index}>
              <td>{partida.nick}</td>
              <td>{partida.puntos}</td>
              <td>{partida.fecha}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button className="btn btn-primary btn-agregar">Agregar Partida</button>
      </div>
    </div>
  );
};

export default Partidas;
