"use client"
import data from "../app/data.json"

function Titulo() {
  return (
    <div className="topo">
      <h1 className="titulo">{data.titulo}</h1>
      <h2 className="horario">{data.horario}</h2>
    </div>
  );
}
export default Titulo;