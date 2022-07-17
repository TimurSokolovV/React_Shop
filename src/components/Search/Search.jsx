import style from './Search.module.scss'

const Search = () => {
    return(
        <div className={style.search_block}>
            <img src="/img/search.svg" alt="search"/>
            <input placeholder="Поиск..."/>
        </div>
    )
}

export default Search 