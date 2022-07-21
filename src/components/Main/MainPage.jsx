import Search from '../Search/Search'
import style from './MainPage.module.scss'

const MainPage = ({inputValue, updateText, cards}) => {
    return(
    <>
        <div className= {style.main_header}>
            <h1>{inputValue?`Поиск... "${inputValue}"`: 'Все кроссовки'}</h1>
            <Search value = {inputValue} input = {updateText}/>
        </div>
        <div className= {style.cards}>
            {cards}
        </div>
    </>
    )
}

export default MainPage