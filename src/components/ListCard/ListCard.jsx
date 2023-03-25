import React from "react";
import { Card } from "../Card/Card";
import style from "./ListCard.module.css";

//props

export const ListCard = ({ listaPerros }) => {
	console.log(listaPerros);

	return (
		<div className={style.list__container}>
			{listaPerros.map((item) => {
				return <Card nombre={item.name} img={item.image.url} temperamento={item.temperament} />;
			})}

			<Card />
		</div>
	);
};
