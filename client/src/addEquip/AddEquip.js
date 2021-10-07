import Modal from '../UI/Modal';
import classes from './AddEquip.module.css';

const AddEquip = (props) => {
	return (
		<Modal onClose={props.onClose}>
			<div>
				<h2>Add new smart equipment</h2>
			</div>

			<div className={classes.actions}>
				<button className={classes.button}>Add</button>
				<button className={classes.alternative} onClick={props.onClose}>
					Close
				</button>
			</div>
		</Modal>
	);
};

export default AddEquip;
