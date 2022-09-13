import React from 'react'
import AppContext from '../../context'
import style from './Info.module.scss'


const Info = ({image,title,description}) => {
    const {setBasketOpened} = React.useContext(AppContext)
    return (
        <div className={style.info}>
            <img width={150} src= {image} alt="empty" />
            <h2 className= {style.title}>{title}</h2>
            <p className={style.desc}>{description}</p>
            <button onClick={() => setBasketOpened(false)} className={style.btn}>Вернуться назад</button>
        </div>
    )

}

export default Info