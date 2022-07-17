import React from "react";
import Basket from "./components/Basket/Basket";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";



function App() {
  const [basketOpened, setBasketOpened] = React.useState(false)
  const [items, setItems] = React.useState([])
  const [BasketItems, setBasketItems] = React.useState([])
  React.useEffect(() => {
      fetch('https://62d2fa9681cb1ecafa68c713.mockapi.io/items')
      .then(responce => responce.json())
      .then(json => {
        setItems(json)
      })
  },[])



  return (
    <div className="wrapper">
       {basketOpened && <Basket items={BasketItems} onBasketClose = {() => setBasketOpened(false)}/>}
      <Header onBasketOpen = {() => setBasketOpened(true)}/>
      <main className="main">
        <div className="main_header">
          <h1>Все кроссовки</h1>
          <Search/>
        </div>
        <div className="cards">
        {items.map( card => {
            return (
              <Card 
              name = {card.name} 
              price = {card.price}
              key = {card.id}
              imageUrl = {card.image}
              onPlus = {(obj) => console.log(obj)}
              />
            )
        })}
        </div>
      </main>
    </div>
  );
}

export default App;
