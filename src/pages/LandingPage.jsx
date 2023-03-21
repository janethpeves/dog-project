import React from 'react'
import style from "./LandingPage.module.css"
import titleImg from "../assets/images/dont-shop-title.png"
import dogImg from "../assets/images/image-dog-hand.png"

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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur asperiores similique recusandae, et nostrum est! Quae fugit impedit at tenetur!
          </p>
          <button className={style.information__button}>Ingresar</button>
        </div>
      </div>

    </div>
  )
}
