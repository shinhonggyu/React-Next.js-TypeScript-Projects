import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = ({ onAddExpense }) => {
  const [openAddForm, setOpenAddForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
    setOpenAddForm(false);
  };

  const addFormHandler = () => {
    setOpenAddForm(true);
  };

  const closeFormHandler = () => {
    setOpenAddForm(false);
  };

  return (
    <div className="new-expense">
      {!openAddForm ? (
        <button onClick={addFormHandler}>Add New Expense</button>
      ) : (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={closeFormHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
