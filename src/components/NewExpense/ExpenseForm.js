import React, {useState} from 'react'
import './ExpenseForm.css'
function ExpenseForm(props) {
    const [entertedTitle, setEnteredTitle] = useState('');
    const [entertedAmount, setEnteredAmount] = useState('')
    const [entertedDate, setEnteredDate] = useState('')
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    }

    const amountChangeHandler = (event) => { 
        setEnteredAmount(event.target.value)
    }

    const dateChangeHandler = (event) => { 
        setEnteredDate(event.target.value)
    }

    const submitHandler = (event) => {
         event.preventDefault()
        const expenseData = {
            title: entertedTitle,
            amount: entertedAmount,
            date: new Date(entertedDate),
        }
        
       props.onSaveExpenseData(expenseData)
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
    }
    

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={entertedTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
                  <input type="number" min='0.01' step='0.01'
                      value={entertedAmount} onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min='2020-01-01' max='2025-12-31' value={entertedDate} onChange={dateChangeHandler}/>
        </div> 
          </div>
          <div className='new-expense__actions'>
              <button type='submit'>Add Expense</button>
          </div>
    </form>
  )
}

export default ExpenseForm