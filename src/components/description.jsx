"use client"
import data from "../app/data.json"

function Description() {
  return (
    <div className="info">
          <h4 className="nome"><b>Sinopse do filme</b></h4>
          <p className="desc">{data.sinopse}</p>
          <br></br>
          <h4 className="nome"><b>Data de lançamento</b></h4>
          <p className="desc">{data.dataLancamento}</p>
          <br></br>
          <h4 className="nome"><b>Direção</b></h4>
          <p className="desc">{data.direcao}</p>
    </div>
    
  );
}
export default Description;