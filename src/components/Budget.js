import React, { useState, useContext } from 'react';
import ViewBudget from './ViewBudget';
import EditBudget from './EditBudget';
import { AppContext } from '../context/AppContext';

const Budget = () => {
	const { budget, dispatch } = useContext(AppContext);
	const [isEditing, setIsEditing] = useState(false);

	const handleEditClick = () => {
		setIsEditing(true);
	};

	const handleSaveClick = (value) => {
		dispatch({
			type: 'SET_BUDGET',
			payload: value,
		});
		setIsEditing(false);
	};

	return (
		<div class='alert alert-secondary p-3 d-flex align-items-center justify-content-between'>
			{isEditing ? (
				<EditBudget handleSaveClick={handleSaveClick} budget={budget} />
			) : (
				// For part 1 render component inline rather than create a seperate one
				<ViewBudget handleEditClick={handleEditClick} budget={budget} />
			)}
		</div>
	);
};

export default Budget;



/////component imports two other components: "ViewBudget" and "EditBudget", and also imports a context called "AppContext".//////

///////calls the useContext hook to retrieve the current state of the "budget" and "dispatch" properties from the AppContext////

/////seState hook to define a new state variable called "isEditing" and initializes it to "false".///

/////"handleEditClick" sets the "isEditing" state to "true" when called, while "handleSaveClick" takes a value as its argument and dispatches an action of type "SET_BUDGET" to update the state of "budget" with the new value. It then sets "isEditing" state to "false".///

/////component returns a div element with the class "alert alert-secondary p-3 d-flex align-items-center justify-content-between". The content of the div is conditionally rendered using a ternary operator based on the value of "isEditing".////