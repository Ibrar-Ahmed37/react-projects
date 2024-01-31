import React, { useReducer } from "react";
import { rootReducer } from "./rootReducer";
export const Mycontext = React.createContext();

export const MyContextProvider = ({ children }) => {
  const initialState = {
    transactionSummary: {
      transactions:  [],
      income: 0,
      expenses: 0
    },
  };
  const [state, dispatch] = useReducer(rootReducer, initialState);
  return (
    <Mycontext.Provider value={{ state, dispatch }}>
      {children}
    </Mycontext.Provider>
  );
};
