import style from './Search.module.scss'

const Search = (props) => {

    const onInputChange = (e) => {
        const inputValue = e.target.value
        props.setInput(inputValue)
    }

    return(
        <div className={style.search_block}>
            <img src="/img/search.svg" alt="search"/>
            <input onChange={onInputChange} value ={props.value} placeholder="Поиск..."/>
        </div>
    )
}

export default Search 