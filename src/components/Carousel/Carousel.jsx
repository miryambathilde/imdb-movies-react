import React, { useState, useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';


const ReactCarousel = () => {

	const API_URL = process.env.REACT_APP_API_URL;
	const [ popularMovies, setPopularMovies ] = useState([]);

	//'https://api.themoviedb.org/3/movie/popular?api_key=06cc335abc6769f2ba982c824990faeb&language=en-US'
	useEffect(() => {
		fetch(`${ API_URL }/movie/popular?api_key=${ process.env.REACT_APP_API_KEY }&language=en-US`)
			.then(res => res.json())
			.then(data => setPopularMovies(data.results));
	}, []);

	return (
		<div>
			<div className="poster">
				<Carousel
					autoPlay={ true }
					showThumbs={ false }
					autoFocus={ true }
					transitionTime={ 3 }
					infiniteLoop={ true }
					showStatus={ false }
				>
					{/* map popular movies*/ }
					{
						popularMovies.map(movie => {
							return (
								<Link to={ `/movie/${ movie.id }` }>
									<div className="posterImage">
										<img src={ `https://image.tmdb.org/t/p/original/${ movie && movie.backdrop_path }` } alt={ movie.title } />
									</div>
									<div className="posterImage__overlay">
										<div className="posterImage__title">
											{ movie ? movie.original_title : '' }
										</div>
										<div className="posterImage__runtime">
											{ movie ? movie.release_date : "" }
											<span className="posterImage__rating">
												{ movie ? movie.vote_average : "" }
												<sup><i><FaStar /></i></sup>
												{ " " }
											</span>
										</div>
										<div className="posterImage__description">
											{ movie ? movie.overview : "" }
										</div>
									</div>
								</Link>
							);
						})
					}
				</Carousel>
			</div>
		</div>
	);
};

export default ReactCarousel;
