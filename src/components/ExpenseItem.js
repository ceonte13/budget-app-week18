import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
	const { dispatch } = useContext(AppContext);

	const handleDeleteExpense = () => {
		dispatch({
			type: 'DELETE_EXPENSE',
			payload: props.id,
		});
	};

	return (
		<li class='list-group-item d-flex justify-content-between align-items-center'>
			{props.name}
			<div>
				<span class='badge badge-primary badge-pill mr-3'>£{props.cost}</span>
				<TiDelete size='1.5em' onClick={handleDeleteExpense} />
			</div>
		</li>
	);
};

export default ExpenseItem;



/////useContext hook to access the dispatch function from the AppContext context. This allows the component to dispatch actions to the global state of the application.////


////// handleDeleteExpense function is called when the user clicks on the delete icon (<TiDelete>), which is an icon from the react-icons/ti package. This function dispatches a DELETE_EXPENSE action to the global state, passing in the id of the expense to be deleted as the payload.///