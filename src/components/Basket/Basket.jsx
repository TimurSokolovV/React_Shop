import style from './Basket.module.scss'
import BasketElem from './BasketElem/BasketElem'
import BasketEmpty from './BasketEmpty/BasketEmpty'


const Basket = ({onBasketClose, onRemove, items}) => {


   
    const mapToItems = items.map( (item) => {
      return (
        <BasketElem name ={item.name} price ={item.price} image ={item.imageUrl} key ={item.id} id ={item.id} removeElem ={onRemove}/>
      )
    })


    return(
      <div className={style.overlay}>
        <div className={style.basket}>
          <div className={style.basket_title}>
            <h2>Корзина</h2>
            <img onClick={(id) => onBasketClose(id)} src="/img/btn-remove.svg" alt="" />
          </div>
          <div className={style.basket_items}>
            {mapToItems.length > 0? mapToItems : <BasketEmpty out ={onBasketClose}/> }
          </div>
          {mapToItems.length > 0?    
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
            :
            null
          }
        
        </div>
      </div>
    )
}

export default Basket