"use client"
import Row from "../components/row"
import Screen from "../components/screen"
import React, { useEffect, useState } from "react";

function Theater({count, increasePrice,decreasePrice}) {
  let theater = []
  for(let i = 0; i < 8; i++) {
    if (i < 7) {
      theater.push({
          id: i,
          row: <Row number="8" rownumber={i} count={count} increasePrice={increasePrice} decreasePrice={decreasePrice}/>
      })}
    else{
      theater.push({
        id: i,
        row: <Row number="4" rownumber={i} count={count} increasePrice={increasePrice} decreasePrice={decreasePrice}/>
      })}
  }
  const [items, setItems] = useState(theater);
  return (
    <div className="theater">
        <ul>
        {items && items.map((item) => <li key={item.id}>{item.row}</li>)}
        </ul>
        <br></br>
        <Screen/>
    </div>
    
  );
}
export default Theater;