import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

function NewExpense(props) {
	const [showForm, setShowForm] = useState(false);
	const saveExpensedataHandler = (enteredData) => {
		// Generate id & Date to Obj
		enteredData = {
			...enteredData,
			date: new Date(enteredData.date),
			id: Math.floor(Math.random() * 100 + 1),
		};
		props.onSave(enteredData);
	};
	const toggleForm = () => setShowForm((prev) => !prev);
	return (
		<div className="new-expense">
			{!showForm && <button onClick={toggleForm}>Add New Expense </button>}
			{showForm && (
				<ExpenseForm onCancel={toggleForm} onSaveExpensedatatitle={saveExpensedataHandler} />
			)}
		</div>
	);
}

export default NewExpense;
