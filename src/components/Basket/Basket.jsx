import React from 'react'

import AppContext from '../../context'
import style from './Basket.module.scss'
import BasketElem from './BasketElem/BasketElem'
import Info from '../Info/Info'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'


const Basket = ({onRemove}) => {
    const {basketItems,setBasketItems,setBasketOpened} = React.useContext(AppContext)
    const [orderComplited, setOrderComplited] = useState(false)
    const [numberOfOrder, setNumberOfOrder] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const mapToItems = basketItems.map( (item) => {
      return (
        <BasketElem name ={item.name} price ={item.price} image ={item.image} key ={item.id} id ={item.id} currId = {item.currId} removeElem ={onRemove}/>
      )
    })


    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
    const onClickOrder = async () => {
      try {
        setIsLoading(true)
        const {data} = await axios.post('https://62d2fa9681cb1ecafa68c713.mockapi.io/Orders', {items:basketItems} )
          setNumberOfOrder(data.order)
        for(let i = 0; i < basketItems.length; i++){
          const item = basketItems[i]
          await axios.delete(`https://62d2fa9681cb1ecafa68c713.mockapi.io/basket/${item.id}`)
          await delay(1000) 
        }
        setBasketItems([])
        setOrderComplited(true)
      } catch (error) {
        alert('Ошибка при оформлении заказа')
      }
       setIsLoading(false)
    }

     const totalPrice = basketItems.reduce((acc, el) => el.price + acc, 0)
   

    
    
    return(
      <div className={style.overlay}>
        <div className={style.basket}>
          <div className={style.basket_title}>
            <h2>Корзина</h2>
            <img onClick={() => setBasketOpened(false)} src="/img/btn-remove.svg" alt="" />
          </div>
          <div className={style.basket_items}>
            {mapToItems.length > 0? mapToItems 
            : 
            <Info 
            image = {orderComplited ? '/img/complete-order.jpg' : '/img/empty-cart.jpg'}
            title= {orderComplited ? 'Заказ оформлен' :'Карзина пуста'}
            description= {orderComplited ? `Заказ номер #${numberOfOrder} отправлен в службу доставки` :'Добавьте в карзину хотя бы один товар'}/> }
          </div>
          {mapToItems.length > 0?    
           <ul>
                <li>
                    <span>Итого:</span>
                    <div></div>
                    <b>{totalPrice} руб.</b>
                </li>
                <li>
                    <span>Налог 13%:</span>
                    <div></div>
                    <b>{Math.round((totalPrice / 100) * 13)} руб.</b>
                </li>
                <button disabled ={isLoading} onClick={onClickOrder} >Оформить заказ</button>
            </ul>
            :
            null
          }
        
        </div>
      </div>
    )
}

export default Basket