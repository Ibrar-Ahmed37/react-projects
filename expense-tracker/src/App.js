import "./App.css";
import { Balance } from "./Balance";
import { Header } from "./Header";
import { IncomeExpense } from "./IncomeExpense";
import { MyContextProvider } from "./Mycontext";
import { TransactionHistory } from "./TransactionHistory";

function App() {
  return (
    <MyContextProvider>
    <div className="app-container">
          <Header />
          <Balance />
          <IncomeExpense />
          <TransactionHistory />
    </div>
    </MyContextProvider>
  );
}

export default App;
