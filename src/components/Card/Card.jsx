import React from "react";
import { Link } from "react-router-dom";
import dog from "../../assets/images/dog-image-beni.jpeg";
import style from "../Card/Card.module.css";

export const Card = ({
	nombre = "Benito",
	img = dog,
	temperamento = "Juguetón, Travieso, Dormilón",
}) => {
	return (
		<div className={style.card__container}>
			<p className={style.card__name}>{nombre}</p>
			<img src={img} alt='dog' className={style.card__images} />
			<div className={style.card__description}>
				{/* <p>Juguetón</p>
        <p>Travieso</p>
        <p>Dormilón</p> */}
				<p>{temperamento}</p>
			</div>
			<button className={style.card__button}>
				<Link to='/dog'>Conocer</Link>
			</button>
		</div>
	);
};
