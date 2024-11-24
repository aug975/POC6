"use client"
import data from "../app/data.json"

function Items() {
  return (
    <div className="items">
      <div className="available"></div>
      <h4>disponível</h4>
      <div className="selected"></div>
      <h4>selecionado</h4>
      <div className="unavailable"></div>
      <h4>indisponível</h4>
    </div>
    
  );
}
export default Items;