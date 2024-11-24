'use client'

import styles from "./page.module.css";
//importar dados do arquivo json
import data from "./data.json"
//importar componentes
import Theater from "../components/theater"
import Description from "../components/description";
import Titulo from "../components/titulo";
import Botao from "../components/botao";
import Items from "../components/items";
import { useState } from 'react';

export default function Home() {
  const [count, setCount] = useState(0);
  var preco = count;

  function increasePrice() {
    setCount(preco + 25)
    preco = preco + 25
  }
  function decreasePrice() {
    setCount(preco - 25)
    preco = preco - 25
  }

  return (
    <div className="page">
      <Titulo/>
      <div className="centro">
        <Theater count={count} increasePrice={increasePrice} decreasePrice={decreasePrice}/>
        <Description/>
      </div>
      <div className="embaixo"> 
        <Items/>
        <Botao preco={preco}/>
      </div>
    </div>
  );
}
