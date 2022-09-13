import React from 'react'
import AppContext from '../../context'
import Card from '../Card/Card'
import style from './Favorite.module.scss'

const Favorite = ({onClose, onFavorite,}) => {
    const {favorites} = React.useContext(AppContext)
    
    const favoriteCards = favorites.map(item => {
        return <Card 
            name ={item.name} 
            price ={item.price} 
            image ={item.image} 
            id = {item.id} 
            key ={item.id} 
            favorited ={true} 
            onFavorite ={onFavorite}
        />
    })
    return (
        <>  
        <div className= {style.title}>
            <img onClick={onClose} width={30} height ={30} src="/img/go_back.png" alt="back" />
            <h2 className= {style.desc}>Избранное</h2>
        </div>
        
            <div className= {style.container}>
                {favoriteCards.length > 0?  favoriteCards
                :
                <div className= {style.empty_favorite}>
                    <img width={150} height ={150} src="/img/empty-cart.jpg" alt="empty_favorite" />
                    <p>Нет закладок</p>
                </div>
                }
        </div> 
        </>
    )
}

export default Favorite


