import React from 'react'
import dog from "../../assets/images/dog-image-beni.jpeg"
import style from "../Card/Card.module.css"

export const Card = () => {
  return (
    <div className={style.card__container}>
      <p className={style.card__name}>Benito</p>
      <img src={dog} alt="dog" className={style.card__images}/>
      <div className={style.card__description}>
        <p>Juguetón</p>
        <p>Travieso</p>
        <p>Dormilón</p>
      </div>
      <button className={style.card__button}>Conocer</button>
    </div>
  )
}
