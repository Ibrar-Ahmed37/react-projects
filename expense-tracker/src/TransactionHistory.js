import React, { useContext, useState } from "react";
import { MyContextProvider, Mycontext } from "./Mycontext";

export const TransactionHistory = () => {
  const { state, dispatch } = useContext(Mycontext);
  const [amount, setAmount] = useState(0);
  const [text, setText] = useState("");
  const [isHovered, setIsHovered] = useState(null);
  const { transactions } = state.transactionSummary;
  console.log(transactions);
  const addTransaction = () => {
    console.log(text);
    console.log(amount);
    dispatch({
      type: "ADD_TRANSACTION",
      payload: { amount: amount, text: text },
    });
  };
  const deleteTransaction =  (index) => {
        dispatch({type: "DELETE_TRANSACTION", payload:{id:index}})
    }
  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };
  const textChangeHandler = (event) => {
    setText(event.target.value);
  };
  return (
    <div className="transaction-section">
      <span className="heading">History</span>
      <ul className="transaction-list">
        {transactions.map((transaction, index) => (
            <li  onMouseLeave={()=>setIsHovered(null)} onMouseOver={()=>setIsHovered(index)} key={transaction.id}  className="transaction-item ">
            <span>{transaction.text}</span>
            <span>{transaction.amount}<span onClick={()=>deleteTransaction(transaction.id)} className="delete-btn">x</span></span>
          </li>
        ))}
      </ul>

      <div className="heading">Add new Transaction</div>
      <span className="underline"></span>
      <div className="sub-heading">Text</div>
      <input
        className="transaction-input"
        value={text}
        onChange={textChangeHandler}
        placeholder="Enter text..."
      />
      <br />
      <div className="sub-heading">
        Amount <br />
        (negative- expense, posiitive -income)
      </div>
      <input
        onChange={amountChangeHandler}
        value={amount}
        className="transaction-input"
        type="number"
        placeholder="Enter amount ..."
      />
      <button className="add-btn" onClick={addTransaction}>
        Add Transaction
      </button>
    </div>
  );
};
