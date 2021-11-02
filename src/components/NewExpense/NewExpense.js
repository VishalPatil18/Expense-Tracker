import React from 'react';
import ExpenseForm from './ExpenseForm'
import './NewExpense.css';

function NewExpense(){
  return (
    <div className="new-expense">
      <form>
        <ExpenseForm />
      </form> 
    </div>
  );
}

export default NewExpense;