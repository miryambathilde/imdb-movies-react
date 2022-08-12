import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import Logo from '../../../src/images/IMDB_Logo.png';

const Header = () => {
	return (
		<div className="header">
			<div className="header-left">
				<Link to='/'><img className='header-icon' src={ Logo } alt="header icon" /> </Link>
				<Link to='/movies/popular'><span>Popular</span></Link>
				<Link to='/movies/top_rated'><span>Top rated</span></Link>
				<Link to='/movies/upcoming'><span>Upcoming</span></Link>
			</div>
		</div>
	);
};

export default Header;
