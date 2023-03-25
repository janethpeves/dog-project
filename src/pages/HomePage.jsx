import React, { useState, useEffect } from "react";
import { Header } from "../components/Header/Header";
import { ListCard } from "../components/ListCard/ListCard";
import { SearchBar } from "../components/SearchBar/SearchBar";

export const HomePage = () => {
	let [dogs, setDogs] = useState([]);

	useEffect(() => {
		// Peticion -> API (Json) -> Servidor (Backend)
		// Para resolver la promesa, tengo que usar el .then( )
		// Para poder capturar los errores de una promesa .catch( )
		fetch("https://api.thedogapi.com/v1/breeds?limit=10") //Prometo que te traigo los datos
			.then((respuesta) => respuesta.json()) //Prometo que te convierto los datos
			.then((data) => setDogs(data)) //Envio la informacion convertida a mi estado
			.catch((error) => console.log(error)); //Capturo el error, si es que me fallan la promesa pipipi
	}, []);

	return (
		<>
			<Header />
			<main className='main__container'>
				<SearchBar />
				<ListCard listaPerros={dogs} />
			</main>
		</>
	);
};
