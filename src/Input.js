
const Input = ({setAmount, setDes, setCategory, handleSubmit, amount, des, category})=>{

    const handleAmountChange = (e) => setAmount(e.target.value);
    const handleDesChange = (e)=> setDes(e.target.value);
    const handleCategoryChange = (e) => setCategory(e.target.value);

    return (
        <div>
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
            
        </div>
    );
};

export default Input;