"use client"
import data from "../app/data.json"

function Botao({preco}) {
  var price = preco;

  function handleClick() {
    if (preco == 0) {
      alert("ERRO: Selecione pelo menos uma cadeira")
    }
    else {
      alert("Compra realizada!")
      window.location.reload(); 
    }
  }

  return (
    <div className="fundo">
      <button className="botao" onClick={handleClick}>
        <h1 className="thintext">Comprar</h1>
        <h3 className="price">R$ {price},00</h3>
      </button>
    </div>
    
  );
}
export default Botao;