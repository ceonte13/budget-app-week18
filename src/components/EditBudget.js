import React, { useState } from 'react';

const EditBudget = (props) => {
	const [value, setValue] = useState(props.budget);
	return (
		<>
			<input
				required='required'
				type='number'
				class='form-control mr-3'
				id='name'
				value={value}
				onChange={(event) => setValue(event.target.value)}
			/>
			<button
				type='button'
				class='btn btn-primary'
				onClick={() => props.handleSaveClick(value)}
			>
				Save
			</button>
		</>
	);
};

export default EditBudget;





///////The input element is of type "number" and has the class "form-control mr-3". Its "value" property is set to the "value" state variable, and its "onChange" event listener updates the "value" state whenever the input is changed.//////

//////The button element has the class "btn btn-primary". It has an "onClick" event listener that calls the "handleSaveClick" function passed in through props and passes in the current "value" state variable as an argument. The button text reads "Save".////