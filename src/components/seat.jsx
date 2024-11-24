"use client"
import data from "../app/data.json"
import React, { useState } from 'react';

function Seat({seatnumber, count, increasePrice,decreasePrice}) {
  var num = parseInt(seatnumber);
  const [selected, setSelected] = useState(false);

  function handleClick() {
    setSelected(!selected);
    if(selected == false){
      increasePrice(count);
    }
    else{
      decreasePrice(count);
    }
  }

  return (
    <div>
      {selected && data.assentos[num].disponivel && (
        <button className="sselected" onClick={handleClick}></button>
      )}
      {!selected && data.assentos[num].disponivel && (
        <button className="savailable" onClick={handleClick}></button>
      )}
      {!data.assentos[num].disponivel && (
        <button className="sunavailable"></button>
      )}
    </div>
    
  );
}
export default Seat;