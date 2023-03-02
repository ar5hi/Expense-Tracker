import React, { useState } from 'react';

import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY = [
  {
    id: 'e1',
    title: 'Laptop',
    amount: 994.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e2',
    title: 'Refrigerator',
    amount: 799.49,
    date: new Date(2020, 5, 12),
  },
  {
    id: 'e3',
    title: 'Car Repair',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'Table',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: 'e2',
    title: 'Tv',
    amount: 499.49,
    date: new Date(2021, 3, 29),
  },
]


const App = () => {
  
  const [expenses, setExpenses] = useState(DUMMY)
  
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
    return[expense, ...prevExpenses]
  })
}

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
