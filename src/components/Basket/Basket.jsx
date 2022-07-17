import style from './Basket.module.scss'
import BasketElem from './BasketElem/BasketElem'


const Basket = ({onBasketClose, items = []}) => {
    const mapToItems = items.map( item => {
      return (
        <BasketElem name ={item.name} price ={item.price} image ={item.image}/>
      )
    })
    return(
      <div className={style.overlay}>
        <div className={style.basket}>
          <div className={style.basket_title}>
            <h2>Корзина</h2>
            <img onClick={onBasketClose} src="/img/btn-remove.svg" alt="" />
          </div>
          <div className={style.basket_items}>
            {mapToItems}
          </div>
          <ul>
            <li>
              <span>Итого:</span>
              <div></div>
              <b>21 498 руб.</b>
            </li>
            <li>
              <span>Налог 13%:</span>
              <div></div>
              <b>1040 руб.</b>
            </li>
            <button>Оформить заказ</button>
          </ul>
        </div>
      </div>
    )
}

export default Basket