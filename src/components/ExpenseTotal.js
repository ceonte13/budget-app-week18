
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseTotal = () => {
	const { expenses } = useContext(AppContext);

	const total = expenses.reduce((total, item) => {
		return (total += item.cost);
	}, 0);

	return (
		<div class='alert alert-primary p-4'>
			<span>Spent so far: ${total}</span>
		</div>
	);
};

export default ExpenseTotal;



//////It uses the useContext hook to access the AppContext, which is a React Context API that stores the application's state. The AppContext contains an array of expenses///.


/////uses the reduce() method to sum up the cost of all expenses in the array. It starts with an initial value of zero and iterates over each item in the expenses array, adding the cost of each item to the total.///



////returns a div element that displays the total amount spent so far. The amount is displayed in a span element inside an alert element with the class "alert-primary". The dollar sign ($) is concatenated with the total value/////