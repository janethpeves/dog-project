import React from 'react'
import style from "./SearchBar.module.css"

export const SearchBar = () => {
  return (
    <div className={style.search__container}>
        <input type="text" placeholder='¡Escribe tu texto aquí!' className={style.input__item}/>
        <button className={style.button__item}>Click</button>
    </div>
  )
}
