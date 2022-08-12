import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { HiExternalLink } from 'react-icons/hi';
import './movie.scss';

const Movie = () => {

	const API_URL_ID = process.env.REACT_APP_API_URL_ID;
	const [ currentMovie, setMovie ] = useState();
	const { id } = useParams();

	useEffect(() => {
		getData();
		window.scrollTo(0, 0);
	}, []);

	const getData = () => {
		fetch(API_URL_ID)
			.then(res => res.json())
			.then(data => setMovie(data));
	};

	return (
		<div className="movie">
			<div className="movie__intro">
				<img className="movie__backdrop" src={ `https://image.tmdb.org/t/p/original${ currentMovie ? currentMovie.backdrop_path : "" }` } />
			</div>
			<div className="movie__detail">
				<div className="movie__detailLeft">
					<div className="movie__posterBox">
						<img className="movie__poster" src={ `https://image.tmdb.org/t/p/original${ currentMovie ? currentMovie.poster_path : "" }` } />
					</div>
				</div>
				<div className="movie__detailRight">
					<div className="movie__detailRightTop">
						<div className="movie__name">{ currentMovie ? currentMovie.original_title : "" }</div>
						<div className="movie__tagline">{ currentMovie ? currentMovie.tagline : "" }</div>
						<span className="movie__rating">
							{ currentMovie ? currentMovie.vote_average : "" }
							<sup><i><FaStar /></i></sup>
							<span className="movie__voteCount">{ currentMovie ? "(" + currentMovie.vote_count + ") votes" : "" }</span>
						</span>
						<div className="movie__runtime">{ currentMovie ? currentMovie.runtime + " mins" : "" }</div>
						<div className="movie__releaseDate">{ currentMovie ? "Release date: " + currentMovie.release_date : "" }</div>
						<div className="movie__genres">
							{
								currentMovie && currentMovie.genres
									?
									currentMovie.genres.map(genre => (
										<><span className="movie__genre" id={ genre.id }>{ genre.name }</span></>
									))
									:
									""
							}
						</div>
					</div>
					<div className="movie__detailRightBottom">
						<div className="synopsisText">Synopsis</div>
						<div>{ currentMovie ? currentMovie.overview : "" }</div>
					</div>

				</div>
			</div>
			<div className="movie__links">
				<div className="movie__heading"></div>
				{
					currentMovie && currentMovie.imdb_id && <a href={ "https://www.imdb.com/title/" + currentMovie.imdb_id } target="_blank" rel="noreferrer" ><p><span className="movie__imdbButton movie__Button">More info<i><HiExternalLink /></i></span></p></a>
				}
			</div>
		</div>
	);
};

export default Movie;