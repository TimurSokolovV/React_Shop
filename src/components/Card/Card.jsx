import React from "react";
import style from './Card.module.scss'


const Card = ({name, price, imageUrl, onPlus}) => {
  const [add, setAdd] = React.useState(false)
  const [like, setLike] = React.useState(false)

  const onClickAdd = () => {
    onPlus({name, price, imageUrl})
    setAdd(!add)
  }

  const onClickFavorite = () => {
    setLike(!like)
  }
  // React.useEffect(() => {
  //   console.log('Состояние кнопок изменилось');
  // }, [add, like])

  
    return(
        <div className={style.card}>
            <div className={style.favorite} onClick={onClickFavorite}>
              <img src={like? '/img/liked.svg': '/img/unliked.svg'} alt="unlike"/>
            </div>
            <img width={100} height={100} src= {imageUrl} alt="sneakers"/>
            <h5>{name}</h5>
            <div className={style.card_desc}>
              <div className={style.card_price}>
                <span>Цена:</span> 
                <b>{price} руб.</b>
              </div>
              <img onClick={onClickAdd} width={32} height={32} src = {add? '/img/btn-checked.svg': '/img/btn-plus.svg'} alt="add card"/>
            </div>
        </div>
    )
}

export default Card