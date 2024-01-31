export const transactionReducer = (state , action) => {
  switch (action.type) {
    case "ADD_TRANSACTION": {
      let newIncome = state.income;
      let newExpense = state.expenses;
      if (action.payload.amount>=0 ){
          newIncome += Number(action.payload.amount);
          console.log('positive value added',newIncome);
      }
      else newExpense -= Number(action.payload.amount);
      let transactionId = state.transactions.length;
      console.log('******len******',transactionId);
      return {
        transactions: [
            ...state.transactions, {text:action.payload.text, amount:action.payload.amount,id: transactionId} 
        ],
        income: Number(newIncome),
        expenses: Number(newExpense)
      };
    }
    case "DELETE_TRANSACTION":{
        let id = action.payload.id;
        console.log("**ID** "+ id)
        const updatedTransactions = state.transactions.filter((transaction) =>transaction.id!== id )
        console.log('updated trans', updatedTransactions)
        return{
            ...state , transactions: updatedTransactions
        }
    }
    default:
      return state;
  }
};
