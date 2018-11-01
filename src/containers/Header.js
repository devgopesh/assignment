import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
	return (
		<div>
			<nav>
				<div className="nav-wrapper">
				 <NavLink to='/' className="brand-logo">Profile</NavLink>
				  <ul id="nav-mobile" className="right hide-on-med-and-down">
				    <li><NavLink to='/posts'>Posts</NavLink></li>
				    <li><NavLink to='/messages'>Messages</NavLink></li>				
				  </ul>
				</div>
			</nav>
		</div>
	);
};

export default Header;