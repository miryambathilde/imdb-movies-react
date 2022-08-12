import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './home.scss';
import MovieList from '../../components/movieList/MovieList';
import ReactCarousel from "../../components/Carousel/Carousel";

const Home = () => {

	return (
		<div>
			<ReactCarousel />
			<MovieList />
		</div>

	);
};

export default Home;
