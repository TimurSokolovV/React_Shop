import style from './Header.module.scss'


const Header = (props) => {
    return(
        <header className={style.header}>
        <div className={style.header_left}>
          <img width={40} height = {40} src="/img/sneaker.png"/>
          <div>
            <h3>Sneakers Shop</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        <div className={style.header_right}>
          <ul>
            <li onClick={props.onBasketOpen}>
            <img width={24} height = {24} src="/img/buy.png"/>
              <span>1205 руб.</span>
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