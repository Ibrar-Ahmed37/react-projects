import { transactionReducer } from "./Reducers/transactionReducer";

export const rootReducer = (state,action) =>(
    {
        transactionSummary : transactionReducer(state.transactionSummary,action)
    }
)