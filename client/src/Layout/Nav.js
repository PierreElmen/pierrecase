import classes from './Nav.module.css';

const DUMMY_DATA = [
	'Kitchen',
	'Office 2',
	'Reception',
	'hallway',
	'Quiet Room',
];
const Nav = (props) => {
	function selectRoomHandler(e) {
		e.preventDefault();

		const clickedRoom = props.rooms.find((room) => {
			return room.name === e.target.innerHTML;
		});

		props.setSelectedRoom(clickedRoom);
	}

	return (
		<nav className={classes.nav}>
			<ul>
				{props.rooms.map((room) => {
					if (room.name === props.selectedRoom.name) {
						return (
							<li
								key={`room_${props.room}`}
								className={classes.selected}
							>
								{room.name}
							</li>
						);
					} else {
						return (
							<li
								key={room.name}
								room={props.room}
								onClick={selectRoomHandler}
							>
								{room.name}
							</li>
						);
					}
				})}
				{DUMMY_DATA.map((room) => (
					<li key={`room_${room}`} room={room} onClick={() => {}}>
						{room}
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Nav;
