import style from './BasketEmpty.module.scss'


const BasketEmpty = (props) => {
    return (
        <div className={style.empty_basket}>
            <div className={style.empty_pic}>
                <img width={150} height={150} src="/img/empty-cart.jpg" alt="empty" />
            </div>
            <p className={style.desc}>Корзина товаров пуста. <br /> Вы что, нищеброд?</p>
            <button onClick={props.out} className={style.btn}>Вернуться назад</button>
        </div>
    )

}

export default BasketEmpty