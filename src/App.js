import React, { version } from "react";
import axios from "axios";
import Basket from "./components/Basket/Basket";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Favorite from "./components/Favorite/Favorite";
import MainPage from "./components/Main/MainPage";




function App() {
  const [basketOpened, setBasketOpened] = React.useState(false)
  const [favoriteOpened, setFavoriteOpened] = React.useState(false)
  const [items, setItems] = React.useState([])
  const [BasketItems, setBasketItems] = React.useState([])
  const [favorites, setFavorites] = React.useState([])
  const [inputValue, setInputValue] = React.useState('')
  

  React.useEffect(() => {
      axios.get('https://62d2fa9681cb1ecafa68c713.mockapi.io/items').then(responce => {
        setItems(responce.data)
      })
      axios.get('https://62d2fa9681cb1ecafa68c713.mockapi.io/basket').then(responce => {
        setBasketItems(responce.data)
      })
      axios.get('https://62d2fa9681cb1ecafa68c713.mockapi.io/favorites').then(responce => {
        setFavorites(responce.data)
      })
  },[])


  const addToBasket = (data) => { //Добавить в корзину и на сервак(пропс отправился в Card)
    axios.post('https://62d2fa9681cb1ecafa68c713.mockapi.io/basket', data).then(res => {
      const basketData = res.data
      setBasketItems(prev => [...prev, basketData])
    })
    
  }

  const onRemoveBasket = (id) => { // Удалить из корзины (пропс отправился в Basket)
    axios.delete(`https://62d2fa9681cb1ecafa68c713.mockapi.io/basket/${id}`)
    setBasketItems(prev => prev.filter(item => item.id !== id))// Фильтер, верни мне все items чей id не равен тому id что я сюда передаю по клику
  }
  const addToFavorites = (favoritesData) => {
    axios.post('https://62d2fa9681cb1ecafa68c713.mockapi.io/favorites', favoritesData).then(res => {
      // const data = res.data.find(item => item.id !== favoritesData.id)
      const data = res.data
      setFavorites(prev => [...prev, data])
    })
    
  }
  const removeFavorites = (data) => {
    axios.delete(`https://62d2fa9681cb1ecafa68c713.mockapi.io/favorites/`).then(res => {
      const favData = res.data.find(item => item.id === data.id)
    })
    
  }
  
  function updateText(text) {
    setInputValue(text);
  }


  const cards = () => items.filter(item => item.name.toLowerCase().includes(inputValue.toLowerCase())).map( card => { 
          return (
            <Card 
            name = {card.name}
            key={card.id}
            id ={card.id}
            price = {card.price}
            imageUrl = {card.image}
            onPlus = {addToBasket}
            onFavorite = {addToFavorites}
            removeFavorite ={removeFavorites}
            />
          )
      })
      
  return (
    <div className="wrapper">
       {basketOpened && <Basket 
       items={BasketItems} 
       onBasketClose = {() => setBasketOpened(false)} 
       onRemove = {onRemoveBasket}
       />}
      <Header onFavoriteClose ={() => setFavoriteOpened(false)} onFavoriteOpen ={ () => setFavoriteOpened(true)} onBasketOpen = {() => setBasketOpened(true)}/>
      <main className="main">
        {favoriteOpened?
          <Favorite onFavorite ={addToFavorites} onClose ={() => setFavoriteOpened(false)} favorites ={favorites}/>
           :
          <MainPage
            inputValue ={inputValue}
            updateText ={updateText}
            cards ={cards()}
          />
        }
      </main>
    </div>
  );
}

export default App;





// [
//   {"name": 'Кроссовки Nike Dunk Low Retro SE', price: 16587, image: '/img/sneakers/1.jpg', id: '1'},
//   {"name": 'Мужские кроссовки Nike Dunk Scrap', price: 17490, image: '/img/sneakers/2.jpg', id: '2'},
//   {"name": 'Кроссовки PUMA RS-X Pop', price: 11990, image: '/img/sneakers/3.jpg', id: '3'},
//   {"name": 'Мужские кроссовки Nike Air Force 1 `07 LV8 2', price: 15690, image: '/img/sneakers/4.jpg', id: '4'},
//   {"name": 'Мужские кроссовки PUMA CA Pro Classic ', price: 10990, image: '/img/sneakers/5.jpg', id: '5'},
//   {"name": 'Кроссовки adidas Originals Matchbreak Super', price: 8490, image: '/img/sneakers/6.jpg', id: '6'},
//   {"name": 'Кроссовки adidas Originals Matchbreak Super', price: 16587, image: '/img/sneakers/7.jpg', id: '7'},
//   {"name": 'Кроссовки Nike SB Zoom Blazer Mid PRM ', price: 10490, image: '/img/sneakers/8.jpg', id: '8'},
//   {"name": 'Женские кроссовки New Balance 996', price: 11990, image: '/img/sneakers/9.jpg', id: '9'},
//   {"name": 'Женские кроссовки adidas Originals Astir W', price: 17600, image: '/img/sneakers/10.jpg', id: '10'},
// ]