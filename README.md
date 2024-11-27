# POC 6: Aplicação de Reserva de Cadeiras de Cinema com ReactJS
### Um código que ensina e descreve o processo de construção de uma aplicação com ReactJS.

## Descrição
Este é um projeto em [ReactJS](https://react.dev/) que constrói um site de reserva de cadeiras de um cinema para um filme específico. A aplicação é dividida em componentes para fácil organização, e este README descreve o processo inteiro em detalhe.

### Criação do projeto
O primeiro passo para construir a aplicação é criar o projeto com NextJS. Para isso, é necessário a instalação de Node.js na máquina host. 
#### Instalação de Node.js
A forma mais simples de instalar Node.js é com o [instalador disponível no site](https://nodejs.org/en/download/prebuilt-installer). A página permite a escolha do sistema operacional e facilita o processo.
Outra forma é com package managers do sistema operacional. [Esta página](https://nodejs.org/en/download/package-manager) detalha a sequência de comandos para instalar o pacote, e permite escolha do sistema operacional para mostrar o processo em cada um.
#### Criar a aplicação
Com o node instalado, o próximo passo é abrir um terminal na pasta onde a aplicação será criada. No terminal, deve-se executar o seguinte comando:
```
npx create-next-app@latest nome-do-projeto
```
Pode-se substituir "nome-do-projeto" com o nome desejado. 

>[!NOTE]
> O terminal irá mostrar diversas perguntas com opções para o projeto sendo criado. A sequência de respostas utilizadas neste projeto foi:
>
> √ Would you like to use TypeScript? ... <ins>No</ins> / Yes
>
> √ Would you like to use ESLint? ... No / <ins>Yes</ins>
>
> √ Would you like to use Tailwind CSS? ... <ins>No</ins> / Yes
>
> √ Would you like your code inside a `src/` directory? ... No / <ins>Yes</ins>
>
> √ Would you like to use App Router? (recommended) ... No / <ins>Yes</ins>
>
> √ Would you like to use Turbopack for next dev? ... <ins>No</ins> / Yes
>
> √ Would you like to customize the import alias (@/* by default)? ... <ins>No</ins> / Yes 

O terminal irá então instalar dependências necessárias e criar a pasta do projeto.
A estrutura do projeto está essencialmente construída, mas para organização posterior, deve-se criar uma pasta para os componentes que serão utilizados no projeto. Isto será descrito na seção de Estrutura do Projeto.

### Estrutura do projeto
Há pastas e documentos necessários para o funcionamento do site na pasta exterior. A pasta .next, que só aparece quando o site é executado, contém os arquivos e módulos necessários para funcionamento do [Next.js](https://nextjs.org/docs), que é uma framework que traz vários elementos que facilitam o funcionamento do React e desenvolvimento com suas partes. A pasta node_modules, que é necessária mas deve ser criada com a execução de um comando específico, contém os pacotes de [Node.js](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs) utilizados no projeto. A pasta public contém arquivos gráficos utilizados pelo React. Os arquivos na pasta externa são utilizados pelo [ESLint](https://eslint.org/) contido no projeto, no processo de commit para o GitHub, pelo compilador, o Next, e também há os arquivos package que contém informações sobre o site e sua versão.

O projeto ou site em si estará contido na pasta [src](/POC6/src) do repositório. Esta pasta contém todas as subpastas de estrutura do projeto. Dentro da pasta [app](/src/app) está o site em si.

> [!WARNING]
> Neste ponto, dentro da pasta src, deve-se criar a pasta de componentes como pasta irmã da pasta app. Isso pode ser feito simplesmente criando uma pasta chamada "components" dentro da pasta src.
> Nesta pasta [components](/POC6/src/components) estará os componentes utilizados no projeto.

### O aplicativo
Em aplicativos padrões construídos desta forma, haverá 4 arquivos na pasta raíz app. 

Um deles será o arquivo [page.js](/POC6/src/app/page.js), que contém o código que constrói a página principal ou home. page.js importa todos os elementos necessários e constrói o HTML no retorno de uma função que exporta a estrutura.

Outro arquivo será chamado [layout.js](/POC6/src/app/layout.js), e contém o código universal de estrutura HTML que é aplicado a todas as páginas do site. Ele também contém as linhas de metadata do site. Todo o HTML construído nos arquivos page.js será inserido dentro da parte central do HTML universal deste arquivo, na seção de código {children}.
```javascript
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
```

Haverá dois arquivos de tipo CSS. Um deles, [globals.css](src/app/globals.css), contém o código CSS universal do site, que será aplicado a todas as páginas. Este arquivo é normalmente utilizado para criar as variáveis universais de CSS que serão utilizadas nas páginas.
O outro arquivo, [page.module.css](src/app/page.module.css), contém o CSS que será aplicado somente à página home.

### Planejamento
Primeiramente, deve-se planejar como será o aplicativo e como será organizado. 

Ele deve ter uma seção com todas as cadeiras do cinema, que mostra quais cadeiras estão disponíveis ou indisponíveis. Essa seção deve mostrar em qual direção está a tela do cinema, para facilitar reservas, e cadeiras disponíveis devem poder ser escolhidas para a reserva. Essa seção também deve ter uma legenda que explica qual cor da cadeira no UI significa qual nível de disponibilidade.

![image](/readme/planning1.png)

O aplicativo também deve ter uma seção com as informações sobre o filme da reserva, com título, horário, sinopse, data de lançamento, e diretor.

![image](/readme/planning2.png)

Finalmente, para possibilitar a compra da reserva, deve ter um botão de compra que mostra o preço total da reserva dependendo das cadeiras escolhidas.

![image](/readme/planning3.png)

A estrutura final do site será a seguinte:

![image](/readme/planning.png)

Com o a imagem do site planejada, deve-se planejar a programação do aplicativo. Considerando que o aplicativo deve ser dinâmico para qualquer filme que for ser utilizado com o código, ele irá puxar todos os dados sobre o filme de um arquivo data.json no diretório app. Assim, as informações do filme podem ser editadas dentro deste json e o render final irá mudar de acordo. 

Para organização do código, cada parte do site será divida em um componente. 

>[!NOTE]
> Componentes
>
> Estes são arquivos .js ou .jsx que contém, em essência, seções de código que serão utilizadas repetidamente no projeto. Em vez de repetir o código cada vez, podemos condensar o código em um componente nestes arquivos. Assim, podemos importar e facilmente chamar os componentes quando necessário. Normalmente, para melhor organização, são colocados em uma subpasta própria na pasta src.

Todos os componentes serão então organizados dentro da página principal, no arquivo page.js, para construir o site final.

#### Planejamento de Componentes
O primeiro passo será separar cada seção do site em um componente. O título com o horário do filme pode ser um componente chamado Titulo, que será colocado no topo da página. A descrição do filme com todas as informações pode ser um componente chamado Description, que estará no lado direito da tela. A legenda de cores pode ser um componente chamado Items, colocado embaixo do cinema. O botão de compra pode ser um componente chamado Botao, no lado inferior da tela. Finalmente, o cinema com todas as cadeiras e a tela pode ser um componente chamado Theater, no lado esquerdo da tela.

##### O componente Theater
Para facilitar a programação do componente de cinema, será mais fácil separar as partes internas do cinema em componentes menores também. Estes componentes menores serão chamados dentro do componente de cinema. A tela, por exemplo, será um componente menor chamado Screen.
O cinema no total tem 60 cadeiras. Cada cadeira deve processar cliques e mudar de cor de acordo com seu status e disponibilidade. Portanto, pode-se criar um componente cadeira (Seat) que processa tudo isso, e pode ser facilmente colocado no cinema. No entanto, em vez do cinema conter 60 componentes de cadeira, será mais fácil criar um componente para linhas de cadeira, que dinamicamente enche de cadeiras (Row). Com isso, simplesmente enchemos o cinema com algumas Rows de cadeiras.

### Criando os componentes
Para criar um componente que será utilizado no projeto, deve-se primeiro criar seu arquivo no diretório de componentes. Normalmente, este diretório components fica na pasta src, sendo uma subpasta irmã da subpasta app.

>[!NOTE]
> Normalmente, componentes em React possuem em seu código um pouco de JavaScript e um pouco de HTML interno no retorno da função de exportação. No entanto, essa combinação só funcionará totalmente se o arquivo for criado com uma extensão .jsx. A extensão normal de JS (.js) não suporta de forma geral o HTML interno utilizado em React. Portanto, criamos nosso arquivo com um nome do tipo "exemplo.jsx".

Para o código interno em si, há uma estrutura padrão para componentes em React.
```javascript
    "use client"
    function Componente() {
      return (
        
      );
    }
    export default Componente;
```
Introduzir o código com "use client" instrui nosso React a rodar o código no cliente acessando o servidor. Quando nosso código precisa de assistência server-side (e o servidor está configurado apropriadamente) podemos utilizar no lugar "use server". No entanto, isto normalmente não é necessário com componentes simples.

> [!WARNING]
> A linha "use client" sempre deve estar no topo do arquivo, na primeira linha, para que o interpretador saiba que todo o código deve ser executado daquela forma. Mesmo se houverem imports no código, este devem estar abaixo desta linha. Se esta instrução não for seguida, normalmente, o React/Next não irá compilar o código e retornará um build error. 

A função principal, a qual podemos dar qualquer nome apropriado, sempre terá uma seção de retorno (return) dentro da qual iremos incluir o HTML que queremos construir com esse componente. Por padrão, toda vez que o componente for referenciado, ele irá retornar a estrutura HTML dentro de sua seção return. Este retorno pode ser aninhado ou condicional, contanto que esteja na função.

Finalmente, é necessário marcar qual função do arquivo será exportada quando o componente for referenciado. O arquivo que criamos pode ter múltiplas funções, mas a função principal, que retorna a estrutura HTML que queremos exportar, deve ser marcada como a padrão com a linha "export default (nome da função)".

#### Utilizando os componentes
Podemos chamar componentes dentro dos arquivos de página (page.js) ou de outros componentes do nosso aplicativo. Primeiro, devemos importar o componente (com o nome da função que exportamos) no nosso código. Normalmente, utiliza-se o [diretório relativo](https://www.lenovo.com/us/en/glossary/relative-path/) e não o absoluto. 
```javascript
// Supondo que a funcao que exportamos se chamava Componente()
import Componente from '../components/componente';
```
Com o componente importado, simplesmente precisamos referenciar o componente com seu nome.
```javascript
import Component from '../components/component';

export default function Home() {
  return (
    <div>
      <Component/>
    </div>
  );
}
```
Com isso, o código que o componente retorna será inserido no local do código onde o referenciamos. Se nosso componente tem parâmetros, podemos incluir seus valores na referência.
```javascript
  return (
    <div>
      <Component parametro1="literalmente" parametro2="1984"/>
    </div>
  );
```

#### Criando o Titulo
O primeiro componente simples de implementar será o componente Titulo. Ele deve ter um header com o título, que irá puxar do json, e um header menor com o horário, que também irá puxar do json. Tudo isso dentro de uma div chamada topo, que irá organizar os elementos posteriormente. Primeiramente, devemos criar o arquivo titulo.jsx na pasta components. Posteriormente, importamos o json no arquivo e implementamos o código planejado:
```javascript
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
```
#### Criando o Description
O segundo componente simples de implementar será o componente Description. Ele deve ter 3 headers pequenos e parágrafos com as informações puxadas do json. Tudo isso dentro de uma div maior chamada info, que será utilizada depois para organizar os elementos. Portanto, deve se criar o arquivo, importar o json, e implementar o código:
```javascript
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
```
#### Criando o Theater
O terceiro componente será o do cinema inteiro. Ele deve conter 8 componentes Row (que será criado posteriormente) com 7 dessas linhas tendo 8 cadeiras cada, e a última tendo 4 cadeiras. Ele também deve conter a tela do cinema, o componente Screen (que será criado posteriormente). O jeito mais fácil seria inserir 8 componentes de linhas de cadeiras, e a tela. No entanto, para manter o código dinâmico, pode-se programar um loop que cria dinamicamente as linhas de cadeiras. Primeiramente, deverá existir um array chamado theater que irá conter todas as linhas de cadeiras.
```javascript
let theater = []
  for(let i = 0; i < 8; i++) {
    if (i < 7) {
      theater.push({
          id: i,
          row: <Row number="8" rownumber={i}/>
      })}
    else{
      theater.push({
        id: i,
        row: <Row number="4" rownumber={i}/>
      })}
  }
```
Considerando que o componente que será criado de Rows irá aceitar dois parâmetros (número de cadeiras na linha "number", número da linha "rownumber"), criamos cada Row com 8 cadeiras exceto na última linha, em que criamos uma Row com 4 cadeiras. Devido à forma como o array será processado para ser renderizado, deve-se também incluir o id de linha de cadeira. Agora, o array deve ser transformado em uma lista não ordenada no HTML da página, para renderizar cada linha. Isto pode ser feito com o método de array map, que irá mapear cada linha junto com seu id único que foi criado anteriormente. Para garantir que o array será renderizado continuamente na página, deve-se usar a funcionalidade de useState do React. Este método permite que se defina um estado para algo que pode ser alterado de forma dinâmica no código. 
```javascript
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
```
O array theater é definido como um estado, e o map atualiza o array com os ids únicos (algo necessário no React para renderizar listas desta forma). O componente Screen é também incluído no fim da renderização. Como utilizamos componentes externos Row e Screen, devemos importar seus arquivos no início deste arquivo. Mesmo se não foram criados ainda, pode-se simplesmente referenciar o arquivo onde será criado, mas o React não irá funcionar até todos os componentes serem criados. Deve-se também importar useState com o React em si para que useState funcione no código.
```javascript
"use client"
import Row from "../components/row"
import Screen from "../components/screen"
import React, { useEffect, useState } from "react";

function Theater() {
  let theater = []
  for(let i = 0; i < 8; i++) {
    if (i < 7) {
      theater.push({
          id: i,
          row: <Row number="8" rownumber={i}/>
      })}
    else{
      theater.push({
        id: i,
        row: <Row number="4" rownumber={i}/>
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
```
#### Criando o Screen
Deve-se agora criar os componentes importados no Theater. Um deles é o da tela, Screen, que deve conter uma div cinza indicando a tela, e um texto acima dela. Tudo isso dentro de uma div com uma classe "center" que irã ser utilizada para centralizar componentes.
```javascript
"use client"
import data from "../app/data.json"

function Screen() {
  return (
    <div className="center">
      <h4>tela</h4>
      <div className="screen"></div>
    </div>
    
  );
}
export default Screen;
```
#### Criando o Row
O outro componente importado é o da linha de cadeiras, Row, que deve criar também dinamicamente cada cadeira da linha baseado no parâmetro number com que é criado.
```javascript
let row = []
  if (number != 8) {
    for(let i = 56; i < 60; i++) {
      row.push({
        id: i,
        seat: <Seat seatnumber={i}/>,
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
          seat: <Seat seatnumber={str}/>
        })}
      else {
        row.push({
          id: i,
          seat: <Seat seatnumber={i}/>
        })
      }
```
De forma semelhante ao componente de theater, cria-se dinamicamente os componentes de cadeira. Há algumas condições e cálculos de indíce para garantir que as cadeiras serão criadas em ordem. Supondo que o componente de cadeira que será criado, Seat, receberá um parâmetro de número da cadeira "seatnumber", há também um tratamento para garantir que o número com que a cadeira será criada estará de acordo com os números de cadeiras no json.
O código final é semelhante ao do Theater, mas importa somente o useState e o componente Seat.
```javascript
"use client"
import Seat from "../components/seat";
import React, { useEffect, useState } from "react";

function Row({number, rownumber}) {
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
```
#### Criando o Seat
O componente importado em Row é o da cadeira individual, Seat. Este componente deve ser criado recebendo seu número individual de cadeira. A cadeira deve ser um botão que deve mudar de estilo dependendo de sua disponibilidade (que é puxada do json) ou se está selecionada. Para isso, pode-se usar useState para manter o estado de selecionado ou não de cada cadeira. Como em qualquer botão em JS, será criada uma função handleClick que alternará o estado de seleção da cadeira. 
```javascript
const [selected, setSelected] = useState(false);

  function handleClick() {
    setSelected(!selected);
  }
```
Finalmente, deve-se mudar a renderização dependendo do estado da cadeira:
```javascript
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
```
Com isso, cada estado de disponibilidade ou seleção da cadeira irá utilizar um estilo CSS diferente. O código final fica da seguinte forma:
```javascript
import React, { useState } from 'react';

function Seat({seatnumber}) {
  var num = parseInt(seatnumber);
  const [selected, setSelected] = useState(false);

  function handleClick() {
    setSelected(!selected);
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
```
#### Criando o Botao
O componente final é o botão de compra, que deve mostrar um header com "Comprar" e o preço total abaixo. O componente irá receber este preço como parâmetro quando for criado na página principal.
```javascript
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
```
Quando o botão é clicado, ele avalia se tem pelo menos uma cadeira selecionada, e se o preço é aceitável, informa que a compra foi sucedida e recarrega a página.

### Organizando a página principal
Agora que todos os componentes foram criados, podem ser todos importados no arquivo da página principal (page.js) e organizados no render final.
```javascript
'use client'

import styles from "./page.module.css";
import data from "./data.json"
import Theater from "../components/theater"
import Description from "../components/description";
import Titulo from "../components/titulo";
import Botao from "../components/botao";
import Items from "../components/items";

export default function Home() {
  return (
    <div className="page">
      <Titulo/>
      <div className="centro">
        <Theater count={count} increasePrice={increasePrice} decreasePrice={decreasePrice}/>
        <Description/>
      </div>
      <div className="embaixo"> 
        <Items/>
        <Botao prec={prec}/>
      </div>
    </div>
  );
}
```
Com divs de organização, todos os itens estão organizados na página. O passo final é implementar o preço, que deve mudar dinamicamente com cada cadeira selecionada e dado como parâmetro no botão de compra.

### Implementando o preço
Primeiramente, o preço deve ser uma variável que pode ser acessada tanto pelas cadeiras quanto pelo botão. Portanto, esta variável deve ser criada dentro de um elemento pai comum aos dois. Isto seria dentro da página principal. Além do mais, como será um valor que deve ser alterado dinamicamente, esta variável de preço deve ser criada com useState. 
```javascript
export default function Home() {
  const [count, setCount] = useState(0);
  var prec = count;
```
A variável count será alterada dinamicamente, e finalmente passada como "prec" para o botão. Para que o preço possa ser alterado, serão criadas duas funções que podem ser chamadas. Uma função increasePrice, que aumenta o preço de acordo com o preço por cadeira puxado do json, e uma função decreasePrice, que diminui o preço da mesma forma.
```javascript
export default function Home() {
  const [count, setCount] = useState(0);
  var prec = count;
  var price = data.preco

  function increasePrice() {
    setCount(prec + price)
    prec = prec + price
  }
  function decreasePrice() {
    setCount(prec - price)
    prec = prec - price
  }
```
Estas funções devem ser passadas para as cadeiras, para que possam ser chamadas dentro do handleClick de cada cadeira. Para isso, cada função, junto com a variável de estado count, terá que ser passada como parâmetros para o componente Theater, que passará como parâmetro para cada componente Row, que passará como parâmetro para cada cadeira.
```javascript
<div className="centro">
        <Theater count={count} increasePrice={increasePrice} decreasePrice={decreasePrice}/>
        <Description/>
      </div>
```
...
```javascript
function Theater({count, increasePrice,decreasePrice}) {
```
...
```javascript
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
```
...
```javascript
function Row({number, rownumber, count, increasePrice,decreasePrice}) {
```
...
```javascript
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
```
...
```javascript
function Seat({seatnumber, count, increasePrice,decreasePrice})
```
Dentro da cadeira, simplesmente devem ser incluidos dentro do handleClick:
```javascript
function handleClick() {
    setSelected(!selected);
    if(selected == false){
      increasePrice(count);
    }
    else{
      decreasePrice(count);
    }
  }
```
Com isso, as funções serão chamadas toda vez que as cadeiras forem clicadas, alterando o preço final, passado para o botão.

### Estilo CSS

No CSS é importante alinhar itens na tela e dentro dos componentes com flexbox.
```css
display:flex;
```
Com os itens alinhados, deve-se aplicar o estilo e as cores para cada item.
```css
.savailable {
  border-radius: 7px;
  padding-bottom: 5px;
  border-style: none;
  background-color: #000000;
  padding:15px;
  z-index: 10;
}

.sselected {
  background-color: #ff2c6c;
  border-radius: 7px;
  border-style: none;
  padding-bottom: 5px;
  padding:15px;
  z-index: 10;
}

.sunavailable {
  background-color: #a1a1a1;
  border-radius: 7px;
  border-style: none;
  padding-bottom: 5px;
  padding:15px;
  z-index: 10;
}
```
Isso foi feito com as cadeiras, o botão de compra, a legenda embaixo.
Também é importante garantir que as cores estarão visíveis em dark mode e light mode.
```css
@media (prefers-color-scheme: dark) {
  :root {
    --background: #20081c;
    --foreground: #ffffff;
  }
  h1,h2,h3,h4, p, button {
    filter: invert(100%);
  }
  .items div {
    filter:invert(100%);
  }
}
```
Finalmente, deve-se deixar o aplicativo acessível a dispositivos móveis. Para isso, torna-se a descrição invisível e organiza-se os itens em coluna quando o viewport for menor que certo ponto.
```css
@media (max-width: 600px) and (orientation: portrait){
  .info {
    display: none;
  }
  .page {
    display:flex;
    flex-direction: column;
  }
  .embaixo {
    display:flex;
    flex-direction: column;
    flex-wrap:wrap;
    margin: 5px;
    gap: 5px 5px;
  }
  .centro {
    margin-bottom: 5px;
  }
  .botao {
    margin: 5px;
  }
  .items {
    margin: 5px;
  }
  button {
    z-index: 15;
  }
}
```
Outros ajustes menores são feitos a vários itens diferentes do site para deixar a imagem organizada e centralizada quando possível.

## Linguagem
Este projeto é um aplicativo ReactJS. Portanto, utiliza uma mistura de HTML e JavaScript, com arquivos de CSS. Há arquivos adicionais que utilizam JSON.

## Como executar
Para executar este código, utilize a opção do GitHub que permite baixar o repositório em um arquivo compactado .zip.

![Imagem mostrando onde está o botão](https://img001.prntscr.com/file/img001/Hxj8w1DnRRup_A-nl7s_4w.png)

Quando o arquivo estiver baixado, extraia seu conteúdo em uma nova pasta ou uma pasta vazia. Confira que todos os itens do repositório estão na pasta resultante.

> [!TIP]
> Extrair o arquivo em uma pasta vazia ou nova garante que nenhum arquivo exterior irá impedir a execução do código ou atrapalhar seu funcionamento

Primeiro, verifique se Node.js com o [npm](https://docs.npmjs.com/about-npm) está instalado em seu computador. Pode-se verificar isto abrindo o prompt de comando e executando "npm -v". Caso não esteja instalado, [há diversos processos simples para instalar os dois](https://nodejs.org/en/download/package-manager).

Segundo, verifique que seu npm está atualizado. Pode-se atualizar o npm executando "npm install -g npm" no prompt de comando.

Agora, precisamos instalar os módulos de node necessários. Para fazer isto, abra um terminal na pasta que contém a pasta src. O jeito mais simples de fazer isso em um sistema Windows é segurar Shift e clicar com o botão direito em uma área vazia da pasta, e selecionar "Abrir janela de comando aqui". Em outros sistemas, simplesmente abra um terminal e navegue para a pasta que contém a pasta src. Depois, execute o comando "npm install" e aguarde ter certeza que o processo está concluido. O npm irá instalar todos os módulos necessários para o projeto.

Com os módulos instalados, execute no mesmo terminal o comando "npm run dev", e aguarde o terminal comunicar "Ready in (tempo)ms". Agora, o site está hosteado em um host local. O terminal mostrará a URL na linha "- Local:   http://localhost:3000". Mantenha este terminal aberto e abra um navegador, acessando a URL informada. A página do navegador irá mostrar o site, e o terminal irá mostrar erros e retornos do React enquando se navega o site.

>[!NOTE]
> A execução de "npm run dev" deve ser feita em um terminal toda vez que se for acessar o aplicativo.
