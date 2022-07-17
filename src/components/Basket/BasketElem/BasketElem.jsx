import style from './BasketElem.module.scss'


const BasketElem = (props) => {
    return (
        <div className={style.basket_item}>
            <div className={style.basket_item__img} style={{backgroundImage: `url(${props.image})`}}></div>
            <div>
                <h5>{props.name}</h5>
                <span>{props.price} руб.</span>
            </div>
            <button><img className={style.remove_btn} width={32} height={32} src="/img/btn-remove.svg" alt="remove"/></button>
        </div>

    )
}

export default BasketElem