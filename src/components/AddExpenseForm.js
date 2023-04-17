import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { v4 as uuidv4 } from 'uuid';

const AddExpenseForm = (props) => {
	const { dispatch } = useContext(AppContext);

	const [name, setName] = useState('');
	const [cost, setCost] = useState('');

	const onSubmit = (event) => {
		event.preventDefault();
		const expense = {
			id: uuidv4(),
			name,
			cost: parseInt(cost),
		};

		dispatch({
			type: 'ADD_EXPENSE',
			payload: expense,
		});

		setName('');
		setCost('');
	};

	return (
		<form onSubmit={onSubmit}>
			<div class='row'>
				<div class='col-sm col-lg-4'>
					<label for='name'>Name</label>
					<input
						required='required'
						type='text'
						class='form-control'
						id='name'
						value={name}
						onChange={(event) => setName(event.target.value)}
					/>
				</div>
				<div class='col-sm col-lg-4'>
					<label for='cost'>Cost</label>
					<input
						required='required'
						type='number'
						class='form-control'
						id='cost'
						value={cost}
						onChange={(event) => setCost(event.target.value)}
					/>
				</div>
			</div>
			<div class='row mt-3'>
				<div class='col-sm'>
					<button type='submit' class='btn btn-primary'>
						Save
					</button>
				</div>
			</div>
		</form>
	);
};

export default AddExpenseForm;


////functional component that represents a form used to add an expense. It imports the useContext hook and useState hook from  and the v4 function from the uuid library.///


///////This is a functional component in React that represents a form used to add an expense. It imports the useContext hook and useState hook from the React library and the v4 function from the uuid library.



////////This is a functional component in React that represents a form used to add an expense. It imports the useContext hook and useState hook from the React library and the v4 function from the uuid library.


///////AppContext from a context file, which is used to update the state of the application. In this component, it extracts the dispatch function from the AppContext using the useContext hook./////



///////component, there are two state variables name and cost, which are set using the useState hook. These variables represent the name and cost of the expense to be added.////



///////event.preventDefault(). It then creates a new expense object with a randomly generated ID using the uuidv4() function, and sets the name and cost values to the corresponding state variables.////


/////The name and cost state variables are then reset to empty strings using the setName and setCost functions respectively./////



//////render function returns a form with two input fields for name and cost and a submit button. When the user enters values into the input fields and clicks the submit button, the onSubmit function is called.///