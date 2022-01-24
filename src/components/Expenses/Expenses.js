import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';

import './Expenses.css';
import Card from '../UI/Card';
import { useState } from 'react';



function Expenses(props) {
	const [filteredYear, setFilteredYear] = useState('2020');
	const filteredExpenses = props.expenses.filter(
		(expense) => expense.date.getFullYear().toString() === filteredYear
	);
	const handleFilteredYear = (year) => {
		setFilteredYear(year);
	};
	let expenseData = <p style={{textAlign: 'center', color: 'white'}} >No Expenses available for seleceted Year </p>;
	if(filteredExpenses.length) {
		expenseData = filteredExpenses.map((expense) => (
			<ExpenseItem
				key={expense.id}
				title={expense.title}
				amount={expense.amount}
				date={expense.date}
			/>
		));
	}
	return (
		<Card className="expenses">
			<ExpensesFilter
				selectedYear={filteredYear}
				onSetFilteredYear={handleFilteredYear}
			/>
			<ExpensesChart expenses={filteredExpenses}/>
			{ expenseData  }
		</Card>
	);
}

export default Expenses;
