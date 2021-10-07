import Card from '../UI/Card';
import classes from './Main.module.css';

const Main = (props) => {
	const smartObjects = props.selectedRoom.smartObjects;
	console.log(smartObjects);
	return (
		<main className={classes.main}>
			<div className={classes.wrapper}>
				{smartObjects?.lamps.map((smartObject) => {
					console.log(smartObject);
					return (
						<Card
							key={smartObject.name}
							object={smartObject}
							type="lamp"
						>
							{smartObject.name}
						</Card>
					);
				})}
				<Card
					key={smartObjects?.temp}
					temperature={smartObjects?.temp}
					type="temp"
				>
					{smartObjects?.temp}
				</Card>
				<Card onClick={props.addEquip} />
			</div>
		</main>
	);
};

export default Main;
