import React from "react";
import style from './Card.module.scss'
import ContentLoader from "react-content-loader"
import AppContext from "../../context";





const Card = ({name, price, image, onPlus, onFavorite, favorited = false,id, currId, isLoading}) => {
  const {isCardAdded} = React.useContext(AppContext)
  const [like, setLike] = React.useState(favorited)

  const onClickAdd = () => {
    onPlus({name, price, image, id, currId})
  }

  const onClickFavorite = () => {
    setLike(!like)
    onFavorite({name, price, image, id, currId})
  }
  
    return(
      
      <div className={style.card}>
        {isLoading? 
        <ContentLoader 
          speed={1}
          width={150}
          height={187}
          viewBox="0 0 150 187"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" rx="10" ry="10" width="150" height="91" /> 
          <rect x="0" y="103" rx="5" ry="5" width="150" height="15" /> 
          <rect x="0" y="129" rx="5" ry="5" width="100" height="15" /> 
          <rect x="2" y="160" rx="5" ry="5" width="80" height="24" /> 
          <rect x="118" y="153" rx="10" ry="10" width="32" height="32" />
        </ContentLoader>
      :
        <>
          <div className={style.favorite} onClick={onClickFavorite}>
            <img src={like? '/img/liked.svg': '/img/unliked.svg'} alt="unlike"/>
          </div>
          <img width={100} height={100} src= {image} alt="sneakers"/>
          <h5>{name}</h5>
          <div className={style.card_desc}>
            <div className={style.card_price}>
              <span>Цена:</span> 
              <b>{price} руб.</b>
            </div>
            <img onClick={onClickAdd} width={32} height={32} src = {isCardAdded(currId) ? '/img/btn-checked.svg': '/img/btn-plus.svg'} alt="add card"/>
          </div>
        </>}
      </div>
    )
}

export default Card