import { useState } from 'react';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesChart from './ExpensesChart';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

function Expenses({ items }) {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    // 큰거온다
    setFilteredYear(selectedYear);
  };

  const filteredItems = items.filter(
    (expense) => expense.date.getFullYear() === Number(filteredYear)
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredItems} />
      <ExpensesList items={filteredItems} />
    </Card>
  );
}

export default Expenses;
