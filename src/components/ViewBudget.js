
import React from 'react';

const ViewBudget = (props) => {
	return (
		<>
			<span>Budget: ${props.budget}</span>
			<button type='button' class='btn btn-primary' onClick={props.handleEditClick}>
				Edit
			</button>
		</>
	);
};

export default ViewBudget;



/////takes in a props object that contains a budget value and a handleEditClick function, which is called when the edit button is clicked.///


//// renders a span element that displays the budget value preceded by the text "Budget:". It also renders a button element with the text "Edit" and the class "btn btn-primary". The onClick event handler is set to the handleEditClick function received in the props object.///