import React, { useState } from 'react';

import './ExpenseForm.css';
function ExpenseForm(props) {
	const [formData, setFormData] = useState({
		title: '',
		amount: '',
		date: '',
	});
	const titleHandler = (event) => {
		setFormData((prevState) => {
			return { ...prevState, title: event.target.value };
		});
	};

	const amountHandler = (event) => {
		setFormData((prevState) => {
			return { ...prevState, amount: event.target.value };
		});
	};
	const dateHandler = (event) => {
		setFormData((prevState) => {
			return { ...prevState, date: event.target.value };
		});
	};
	const saveFormHandler = (event) => {
		event.preventDefault();
		// Change date to Date Obj
		props.onSaveExpensedatatitle(formData);
		// unset all value
		setFormData({
			title: '',
			amount: 0,
			date: '',
		});
	};
	return (
		<div>
			<form onSubmit={saveFormHandler}>
				<div className="new-expense__controls">
					<div className="new-expense__control">
						<label for="">Title</label>
						<input type="text" value={formData.title} onChange={titleHandler} />
					</div>
					<div className="new-expense__control">
						<label for="">Amount</label>
						<input
							type="number"
							value={formData.amount}
							onChange={amountHandler}
						/>
					</div>
					<div className="new-expense__control">
						<label for="">date</label>
						<input
							type="date"
							value={formData.date}
							min="2019-01-01"
							max="2022-12-31"
							onChange={dateHandler}
						/>
					</div>
					<div className="new-expense__actions">
						<button type="button" onClick={props.onCancel}>Cancel</button>
						<button type="submit">Add Expense</button>
					</div>
				</div>
			</form>
		</div>
	);
}

export default ExpenseForm;
