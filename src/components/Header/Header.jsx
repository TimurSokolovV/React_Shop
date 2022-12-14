import React from 'react'
import AppContext from '../../context'
import style from './Header.module.scss'


const Header = (props) => {
  const {basketItems} = React.useContext(AppContext)
  const totalPrice = basketItems.reduce((acc, el) => {
    return el.price + acc
  }, 0)
    return(
        <header className={style.header}>
        <div onClick={props.onFavoriteClose} className={style.header_left}>
          <img width={40} height = {40} src="/img/sneaker.png"/>
          <div>
            <h3>Sneakers Shop</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        <div className={style.header_right}>
          <ul>
            <li>
            <img onClick={props.onFavoriteOpen} width={20} height = {20} src="/img/love.png"/>
            </li>
            <li onClick={props.onBasketOpen}>
            <img width={24} height = {24} src="/img/buy.png"/>
              <span>{totalPrice} руб</span>
            </li>
            <li>
            <img width={24} height = {24} src="/img/user.png"/>
            </li>
          </ul>
        </div>
      </header>
    )
}
export default Header