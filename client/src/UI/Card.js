import classes from './Card.module.css';
import LampIcon from '../assets/images/LampIcon';
import TempIcon from '../assets/images/TempIcon';
import PlusIcon from '../assets/images/PlusIcon';

const Card = (props) => {
	if (props.type === 'lamp' && props.object.lumen !== 0) {
		return (
			<div className={classes.card}>
				<h3>{props.object.name}</h3>
				<LampIcon />
				<div className={classes.infoWrapper}>
					<p>{`Lumens: ${props.object.lumen}`}</p>
					<p>{`Mode: ${props.object.mode}`} </p>
				</div>
			</div>
		);
	} else if (props.type === 'lamp' && props.object.lumen === 0) {
		return (
			<div className={classes.card}>
				<h3>{props.object.name}</h3>
				<LampIcon />
				<div className={classes.infoWrapper}>
					<p>Lights out</p>
				</div>
			</div>
		);
	} else if (props.type === 'temp') {
		return (
			<div className={classes.card}>
				<h3>Temperature</h3>
				<TempIcon />
				<div className={classes.infoWrapper}>
					<p>{props.temperature}°C</p>
				</div>
			</div>
		);
	} else {
		return (
			<div className={classes.plusCard} onClick={props.onClick}>
				<div className={classes.addHeight} />
				<PlusIcon className={classes.plusIcon} />
				<h3>Add</h3>
			</div>
		);
	}
};

export default Card;
