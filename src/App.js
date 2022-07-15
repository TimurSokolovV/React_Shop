
function App() {
  return (
    <div className="wrapper">
      <div style={{display:'none'}} className="overlay">
        <div className="basket">
          <h2>Корзина</h2>
          <div className="basket_items">
            <div className="basket_item">
              <div className="basket_item__img" style={{backgroundImage: 'url(/img/sneakers/1.jpg)'}}></div>
              <div>
                  <h5>Мужские Кроссовки Nike blazer Mid Suede</h5>
                  <span>12 999 руб.</span>
              </div>
              <button><img className="remove_btn" width={32} height={32} src="/img/btn-remove.svg" alt="remove"/></button>
            </div>
            <div className="basket_item">
              <div className="basket_item__img" style={{backgroundImage: 'url(/img/sneakers/1.jpg)'}}></div>
              <div>
                  <h5>Мужские Кроссовки Nike blazer Mid Suede</h5>
                  <span>12 999 руб.</span>
              </div>
              <button><img className="remove_btn" width={32} height={32} src="/img/btn-remove.svg" alt="remove"/></button>
            </div>
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
      <header className="header">
        <div className="header_left">
          <img width={40} height = {40} src="/img/sneaker.png"/>
          <div>
            <h3>Sneakers Shop</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        <div className="header_right">
          <ul>
            <li>
            <img width={24} height = {24} src="/img/user.png"/>
              <span>1205 руб.</span>
            </li>
            <li>
            <img width={24} height = {24} src="/img/buy.png"/>
            </li>
          </ul>
        </div>
      </header>
      <main className="main">
        <div className="main_header">
          <h1>Все кроссовки</h1>
          <div className="search_block">
              <img src="/img/search.svg" alt="search"/>
              <input placeholder="Поиск..."/>
          </div>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
              <img src="/img/unliked.svg" alt="unlike"/>
            </div>
            <img width={100} height={100} src="/img/sneakers/1.jpg" alt="sneakers"/>
            <h5>Мужские Кроссовки Nike blazer Mid Suede</h5>
            <div className="card_desc">
              <div className="card_price">
                <span>Цена:</span> 
                <b>12 999 руб.</b>
              </div>
              <button><img width={11} height={11} src="/img/plus.svg" alt=""/></button>
            </div>
          </div>
          <div className="card">
            <img width={100} height={100} src="/img/sneakers/2.jpg" alt="sneakers"/>
            <h5>Мужские Кроссовки Nike blazer Mid Suede</h5>
            <div className="card_desc">
              <div className="card_price">
                <span>Цена:</span> 
                <b>12 999 руб.</b>
              </div>
              <button><img width={11} height={11} src="/img/plus.svg" alt=""/></button>
            </div>
          </div>
          <div className="card">
            <img width={100} height={100} src="/img/sneakers/3.jpg" alt="sneakers"/>
            <h5>Мужские Кроссовки Nike blazer Mid Suede</h5>
            <div className="card_desc">
              <div className="card_price">
                <span>Цена:</span> 
                <b>12 999 руб.</b>
              </div>
              <button><img width={11} height={11} src="/img/plus.svg" alt=""/></button>
            </div>
          </div>
          <div className="card">
            <img width={100} height={100} src="/img/sneakers/4.jpg" alt="sneakers"/>
            <h5>Мужские Кроссовки Nike blazer Mid Suede</h5>
            <div className="card_desc">
              <div className="card_price">
                <span>Цена:</span> 
                <b>12 999 руб.</b>
              </div>
              <button><img width={11} height={11} src="/img/plus.svg" alt=""/></button>
            </div>
          </div>
          <div className="card">
            <img width={100} height={100} src="/img/sneakers/5.jpg" alt="sneakers"/>
            <h5>Мужские Кроссовки Nike blazer Mid Suede</h5>
            <div className="card_desc">
              <div className="card_price">
                <span>Цена:</span> 
                <b>12 999 руб.</b>
              </div>
              <button><img width={11} height={11} src="/img/plus.svg" alt=""/></button>
            </div>
          </div>
          <div className="card">
            <img width={100} height={100} src="/img/sneakers/6.jpg" alt="sneakers"/>
            <h5>Мужские Кроссовки Nike blazer Mid Suede</h5>
            <div className="card_desc">
              <div className="card_price">
                <span>Цена:</span> 
                <b>12 999 руб.</b>
              </div>
              <button><img width={11} height={11} src="/img/plus.svg" alt=""/></button>
            </div>
          </div>
          <div className="card">
            <img width={100} height={100} src="/img/sneakers/7.jpg" alt="sneakers"/>
            <h5>Мужские Кроссовки Nike blazer Mid Suede</h5>
            <div className="card_desc">
              <div className="card_price">
                <span>Цена:</span> 
                <b>12 999 руб.</b>
              </div>
              <button><img width={11} height={11} src="/img/plus.svg" alt=""/></button>
            </div>
          </div>
          <div className="card">
            <img width={100} height={100} src="/img/sneakers/8.jpg" alt="sneakers"/>
            <h5>Мужские Кроссовки Nike blazer Mid Suede</h5>
            <div className="card_desc">
              <div className="card_price">
                <span>Цена:</span> 
                <b>12 999 руб.</b>
              </div>
              <button><img width={11} height={11} src="/img/plus.svg" alt=""/></button>
            </div>
          </div>
          <div className="card">
            <img width={100} height={100} src="/img/sneakers/9.jpg" alt="sneakers"/>
            <h5>Мужские Кроссовки Nike blazer Mid Suede</h5>
            <div className="card_desc">
              <div className="card_price">
                <span>Цена:</span> 
                <b>12 999 руб.</b>
              </div>
              <button><img width={11} height={11} src="/img/plus.svg" alt=""/></button>
            </div>
          </div>
          <div className="card">
            <img width={100} height={100} src="/img/sneakers/10.jpg" alt="sneakers"/>
            <h5>Мужские Кроссовки Nike blazer Mid Suede</h5>
            <div className="card_desc">
              <div className="card_price">
                <span>Цена:</span> 
                <b>12 999 руб.</b>
              </div>
              <button><img width={11} height={11} src="/img/plus.svg" alt=""/></button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
