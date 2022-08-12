import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../card/Card";
import "./MovieList.scss";

const MovieList = () => {

	const API_URL_TYPE = process.env.REACT_APP_API_URL_TYPE;
	const [ movieList, setMovieList ] = useState([]);
	const { type } = useParams();

	useEffect(() => {
		getData();
	}, [ type ]);

	// useParams - type - popular
	const getData = () => {
		fetch(API_URL_TYPE)
			.then(res => res.json())
			.then(data => setMovieList(data.results));
	};


	return (
		<div>
			<div className="movie__list">
				<h2 className="list__title">{ (type ? type : "Popular").toUpperCase() }</h2>
				<div className="list__cards">
					{/* COMPONENT CARD */ }
					{
						movieList.map(movie => (
							<Card movie={ movie } />
						))
					}
				</div>
			</div>
		</div>
	);
};

export default MovieList;
