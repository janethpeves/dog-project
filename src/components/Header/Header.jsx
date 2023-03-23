import React from 'react'
import style from "./Header.module.css"
import logo from "../../assets/images/dont-shop-title.png"

export const Header = () => {
  return (
    <div className={style.header__container}>
        <img src={logo} alt="logo" className={style.logo__img}/>
        <button className='information__button'>Ingresar</button>
    </div>
  )
}
