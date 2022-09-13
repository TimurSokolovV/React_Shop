import React from "react";
import axios from "axios";
import Basket from "./components/Basket/Basket";
import Header from "./components/Header/Header";
import Favorite from "./components/Favorite/Favorite";
import MainPage from "./components/Main/MainPage";
import AppContext from "./context";




function App() {
  const [basketOpened, setBasketOpened] = React.useState(false)
  const [favoriteOpened, setFavoriteOpened] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(true)
  const [card, setCard] = React.useState([])
  const [basketItems, setBasketItems] = React.useState([])
  const [favorites, setFavorites] = React.useState([])
  
  React.useEffect(() => { 
    async function fetchData() {
        try{
          setIsLoading(true)
          const [resFavorite, resBasket, resCard] = await Promise.all([
            axios.get('https://62d2fa9681cb1ecafa68c713.mockapi.io/favorites'),
            axios.get('https://62d2fa9681cb1ecafa68c713.mockapi.io/basket'),
            axios.get('https://62d2fa9681cb1ecafa68c713.mockapi.io/items')
          ])
          setIsLoading(false)
            setBasketItems(resBasket.data)
            setFavorites(resFavorite.data)
            setCard(resCard.data)
        }
        catch{
          alert('Что то пошло не так при запросе данных')
        }
      } 
      fetchData()
  },[])


  const addToBasket = (cardData) => { //Добавить в корзину и на сервак(пропс отправился в Card)
    if(basketItems.some(item => item.currId === cardData.currId)){
    axios.delete(`https://62d2fa9681cb1ecafa68c713.mockapi.io/basket/${cardData.id}`)
    setBasketItems(prev => prev.filter(item => item.currId !== cardData.currId))
    }
    else{
    axios.post(`https://62d2fa9681cb1ecafa68c713.mockapi.io/basket`, cardData)
    setBasketItems(prev => [...prev, cardData])
    }
  }

  const onRemoveBasket = (currId, id) => { // Удалить из корзины (пропс отправился в Basket)
    axios.delete(`https://62d2fa9681cb1ecafa68c713.mockapi.io/basket/${id}`)
    setBasketItems(prev => prev.filter(item => item.currId !== currId))// Фильтер, верни мне все items чей id не равен тому id что я сюда передаю по клику
  }
  
  const addToFavorites = (favoritesData) => { // Передаю объект с свойствами в карточках
    if(favorites.find(item => item.id === favoritesData.id)){ // Если текущее состояние в котором я ищу id равно тому же id что я передаю в объекте 
      axios.delete(`https://62d2fa9681cb1ecafa68c713.mockapi.io/favorites/${favoritesData.id}`).then(res => { //То отправь запрос на сервер и удали объект с этим id
        const deleteItem = res.data 
        setFavorites(prev => prev.filter(item => item.id !== deleteItem.id )) 
       // И фильтер верни мне в новое состояние объект чей id не равен тому что я передаю в эту функцию
      }) 
    }
    else{ // Иначе
      axios.post('https://62d2fa9681cb1ecafa68c713.mockapi.io/favorites', favoritesData).then(responce => {
        const resData = responce.data
        // создай на сервере новый объект со значениями что я передаю в функуцию
        setFavorites(prev => [...prev, resData])
       // И возьми старое состояние, оператором спред создай копию и добавь в конец объект то что передается в аргументы функции
      })  
    }
  }

  const isCardAdded = (currId) => {
    return basketItems.some(obj => obj.currId === currId)
  }

  
  return (
    <AppContext.Provider value={{basketItems, setBasketItems, favorites, card, isCardAdded, setBasketOpened}}>
      <div className="wrapper">
        {basketOpened && <Basket  
        onRemove = {onRemoveBasket}
        />}
        <Header onFavoriteClose ={() => setFavoriteOpened(false)} onFavoriteOpen ={ () => setFavoriteOpened(true)} onBasketOpen = {() => setBasketOpened(true)}/>
        <main className="main">
          {favoriteOpened?
            <Favorite onFavorite ={addToFavorites} onClose ={() => setFavoriteOpened(false)}/>
            :
            <MainPage
              addToBasket ={addToBasket}
              addToFavorites ={addToFavorites}
              isLoading ={isLoading}
            />
          }
        </main>
      </div>
    </AppContext.Provider>
  );
}

export default App;




