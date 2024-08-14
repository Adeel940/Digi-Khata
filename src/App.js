import React, { useState } from "react";
import Input from "./Input";
import TransactionHistoryDisplay from "./DisplayTransactionHistory";
import "./App.css"
function App() {
  const [balance, setBalance] = useState(0);
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Credit");
  const [des, setDes]= useState("");
  const [transactions, setTransactions] = useState([]);
  
  const handleSubmit = (e) => {
    e.preventDefault();

    const parsedAmount = parseFloat(amount);
    if (isNaN(parsedAmount)) {
      alert("Please enter a valid number.");
      return;
    }

    let newBalance = balance;
    if (category === "Debit") {
      newBalance -= parsedAmount;
    } else {

      newBalance += parsedAmount;
    }

    setBalance(newBalance);

    const now = new Date();
    const formattedDate = now.toLocaleDateString();
    const formattedTime = now.toLocaleTimeString();

    const newTransaction = {
      id: Date.now(),
      amount: parsedAmount,
      des: des,
      category: category,
      date: formattedDate,
      time: formattedTime,
    };
    setTransactions([...transactions, newTransaction]);
    setAmount("");
    setDes("");
  };

  return (
    <div className="container">
      <h1>Digi Khata</h1>
      <h2>Current Balance in Rs: {balance}</h2>

      <Input setAmount={setAmount} setDes={setDes} setCategory={setCategory}
      handleSubmit={handleSubmit} amount={amount} des={des} category={category}
      />
      <div>
        <h3>Transaction History:</h3>
      <TransactionHistoryDisplay transactions={transactions}/>
      </div>
    </div>
  );  
}
export default App;