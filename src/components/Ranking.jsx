import React, { useState, useEffect } from "react";
import "./Partidas.css"; // Reutilizamos el mismo CSS de Partidas

const Ranking = ({ partidas }) => {
  const [ranking, setRanking] = useState([]);

  useEffect(() => {
    // Ordenar las partidas por puntos en orden descendente y tomar las 5 mejores
    const mejoresPartidas = [...partidas]
      .sort((a, b) => b.puntos - a.puntos)
      .slice(0, 5);
    setRanking(mejoresPartidas);
  }, [partidas]);

  return (
    <div>
      <h2 className="mt-5">🏆 Ranking de Jugadores</h2>
      <table className="table table-dark table-hover table-bordered custom-table">
        <thead>
          <tr>
            <th>Posición</th>
            <th>Nick</th>
            <th>Puntos</th>
            <th>Fecha</th>
          </tr>
        </thead>
        <tbody>
          {ranking.map((partida, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{partida.nick}</td>
              <td>{partida.puntos}</td>
              <td>{partida.fecha}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Ranking;
