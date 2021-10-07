import React, { useState, useEffect } from 'react';
import AddEquip from './addEquip/AddEquip';
import Header from './Layout/Header';
import Main from './Layout/Main';

const App = () => {
	const [addEquipIsShown, setAddEquipIsShown] = useState(false);

	const [api, setApi] = useState({});
	const [selectedRoom, setSelectedRoom] = useState({});

	const showAddEquipHandler = () => {
		setAddEquipIsShown(true);
	};

	const hideAddEquipHandler = () => {
		setAddEquipIsShown(false);
	};

	useEffect(() => {
		fetch('http://localhost:3000/offices')
			.then((res) => res.json())
			.then((json) => {
				setApi({
					isLoaded: true,
					items: json,
				});
				setSelectedRoom(json.data[0].offices[0].rooms[0]);
			});
	}, []);

	if (!api.isLoaded) {
		return <p>Loading..</p>;
	} else {
		const office = api.items.data[0].offices[0];
		return (
			<React.Fragment>
				{addEquipIsShown && <AddEquip onClose={hideAddEquipHandler} />}
				<Header
					office={office}
					selectedRoom={selectedRoom}
					setSelectedRoom={setSelectedRoom}
				/>
				<Main
					selectedRoom={selectedRoom}
					addEquip={showAddEquipHandler}
				/>
			</React.Fragment>
		);
	}
};

export default App;
