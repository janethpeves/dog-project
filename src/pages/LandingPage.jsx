import React from 'react'
import style from "./LandingPage.module.css"
import titleImg from "../assets/images/dont-shop-title.png"
import dogImg from "../assets/images/image-dog-hand.png"
import { Link } from 'react-router-dom'

export const LandingPage = () => {
  return (
    <div className={style.landing__container}>

      <div className={style.content__container}>
        <div className={style.image__container}>
          <img src={dogImg} alt="MANO CON UN PERRO" className={style.image} />
        </div>
        <div className={style.information__container}>
          <img src={titleImg} alt="IMÁGEN DE TÍTULO" className={style.information__image}/>
          <p className={style.information__text}>
          Muchos animales esperan un hogar estable mientras sobreviven como pueden, la mayoría de las veces en muy malas condiciones, por calles, en refugios y perreras.
          <br></br>
          “UN AMIGO NO SE COMPRA, NI EL AMOR TAMPOCO”
          </p>
          <Link className={style.information__button} to='/home'>Ingresar</Link>
        </div>
      </div>

    </div>
  )
}
