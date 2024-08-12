import React, { useState } from "react";
import "./App.css"
function App() {
  const [balance, setBalance] = useState(0);
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Credit");
  const [des, setDes]= useState("");
  const [transactions, setTransactions] = useState([]);

  const handleAmountChange = (e) => setAmount(e.target.value);
  const handleDesChange = (e)=> setDes(e.target.value);
  const handleCategoryChange = (e) => setCategory(e.target.value);

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
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={amount}
          onChange={handleAmountChange}
          placeholder="Enter amount"
        />
        <input
          type="text"
          value={des}
          onChange={handleDesChange}
          placeholder="Enter Descrition"
        />

        <select value={category} onChange={handleCategoryChange}>
          <option value="Debit">Debit</option>
          <option value="Credit">Credit</option>
        </select>
        <button type="submit">Add Transaction</button>
      </form>
      <div>
        <h3>Transaction History:</h3>
        <ul>
            {transactions.map((transaction) => (
              <li
                key={transaction.id}
                className={transaction.category.toLowerCase()}
              >
                <div>
                  <span>{transaction.category} of Rs: {transaction.amount}</span>
                  <small>  {transaction.des}</small>
                  <br />
                  <small>{transaction.date} at {transaction.time}</small>
                </div>
              </li>
            ))}
          </ul>
  
      </div>
    </div>
  );  
}
export default App;
