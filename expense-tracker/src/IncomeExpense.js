import React, { useContext } from 'react'
import { Mycontext } from './Mycontext'

export const IncomeExpense = () => {
    const {state,dispatch} = useContext(Mycontext);
    const  {income,expenses} = state.transactionSummary;
  return (
    <div className='income-expense-section'>
    <div className='income-section'>
        <span className='income-heading'>INCOME</span>
        <span className='income-price'>{income} $</span>
    </div>
   <div className='income-section'>
        <span className='income-heading'>EXPENSE</span>
            <span className='expense-price'>- {expenses} $</span>
    </div>
    </div>
  )
}
