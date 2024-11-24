"use client"
import Seat from "../components/seat";
import React, { useEffect, useState } from "react";

function Row({number, rownumber, count, increasePrice,decreasePrice}) {
  let row = []
  if (number != 8) {
    for(let i = 56; i < 60; i++) {
      row.push({
        id: i,
        seat: <Seat seatnumber={i} count={count} increasePrice={increasePrice} decreasePrice={decreasePrice}/>,
      })
    }
  }
  else {
    for(let i = (rownumber*7+1)+(rownumber-1); i <= (rownumber+1)*number-1; i++) {
      if (i < 10) {
        let is = i.toString()
        var str = "0" + is;
        row.push({
          id: i,
          seat: <Seat seatnumber={str} count={count} increasePrice={increasePrice} decreasePrice={decreasePrice}/>
        })}
      else {
        row.push({
          id: i,
          seat: <Seat seatnumber={i} count={count} increasePrice={increasePrice} decreasePrice={decreasePrice}/>
        })
      }
      
    }}
  const [items, setItems] = useState(row);
  return (
    <div className="row">
      <ul>
        {items && items.map((item) => <li key={item.id}>{item.seat}</li>)}
      </ul>
    </div>
  );
}
export default Row;