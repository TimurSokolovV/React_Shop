import React from 'react'
import AppContext from '../../context'
import Card from '../Card/Card'
import Search from '../Search/Search'
import style from './MainPage.module.scss'

const MainPage = ({addToBasket, addToFavorites, isLoading}) => {
    const [input, setInput] = React.useState('')
    const {favorites, card} = React.useContext(AppContext)
    
    const mapToCard = () => {
        const filterCard = card.filter(item => 
            item.name.toLowerCase().includes(input.toLowerCase()))

        return (isLoading? [...Array(10)] : filterCard).map((el, index) => {
                return (
                    <Card 
                    isLoading = {isLoading}
                    {...el}
                    key = {index}
                    onPlus = {addToBasket}
                    onFavorite = {addToFavorites}
                    favorited = {favorites.some(item => Number(item.id) === Number(el.id))}
                    />
                )
            })   
    }

     


    return(
    <>
        <div className= {style.main_header}>
            <h1>{input?`Поиск... "${input}"`: 'Все кроссовки'}</h1>
            <Search setInput ={setInput} value ={input}/>
        </div>
        <div className= {style.cards}>
            {mapToCard()}
        </div>
    </>
    )
}

export default MainPage