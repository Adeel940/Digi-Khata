

const TransactionHistoryDisplay = ({transactions})=>{
     return (<ul>
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
      </ul> );

}

export default TransactionHistoryDisplay;