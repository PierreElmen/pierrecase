import React from 'react';
import Logo from '../assets/images/Logo';
import classes from './Header.module.css';
import Nav from './Nav';

const Header = (props) => {
	return (
		<React.Fragment>
			<header className={classes.header}>
				<h1 className={classes.headerH1}>{props.office.name}</h1>
				<Logo />
			</header>
			<h2>rooms</h2>
			<Nav
				rooms={props.office.rooms}
				selectedRoom={props.selectedRoom}
				setSelectedRoom={props.setSelectedRoom}
			/>
		</React.Fragment>
	);
};

export default Header;
