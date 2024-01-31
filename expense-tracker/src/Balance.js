import React, { useContext } from 'react'
import { Mycontext } from './Mycontext';

export const Balance = () => {
    const {state} = useContext(Mycontext);
    const {income,expenses} = state.transactionSummary;
    const result = income-expenses;
  return (
    <div className='balance-section'>
        <span className='heading'> Your Balance </span>
        <span className='price-tag'>$ {result}</span>
    </div>
  )
}
