
import React, { useContext, useState, useEffect } from 'react';
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../context/AppContext';

const ExpenseList = () => {
	const { expenses } = useContext(AppContext);

	const [filteredExpenses, setfilteredExpenses] = useState(expenses || []);

	useEffect(() => {
		setfilteredExpenses(expenses);
	}, [expenses]);

	const handleChange = (event) => {
		const searchResults = expenses.filter((filteredExpense) =>
			filteredExpense.name.toLowerCase().includes(event.target.value)
		);
		setfilteredExpenses(searchResults);
	};

	return (
		<>
			<input
				type='text'
				class='form-control mb-2 mr-sm-2'
				placeholder='Type to search...'
				onChange={handleChange}
			/>
			<ul class='list-group mt-3 mb-3'>
				{filteredExpenses.map((expense) => (
					<ExpenseItem
						id={expense.id}
						name={expense.name}
						cost={expense.cost}
					/>
				))}
			</ul>
		</>
	);
};

export default ExpenseList;



///////ExpenseList component uses the useContext hook to access the expenses state from the AppContext. It also uses the useState hook to manage the filtered expenses list based on user input. The initial value for filteredExpenses is set to the expenses array received from the context./////


/////useEffect hook is used to update the filteredExpenses state whenever there is a change in the expenses array received from the context.////


//handleChange function is called whenever there is a change in the input field. It filters the expenses based on the input and sets the filteredExpenses state with the filtered results.//

//ExpenseList component returns an input field and a list of ExpenseItem components. The ExpenseItem components are rendered based on the filteredExpenses state.///