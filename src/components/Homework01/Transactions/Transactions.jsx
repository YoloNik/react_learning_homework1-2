import React from 'react'
import s from './Transactions.module.css'

function Transactions({transactionsData}) {
	return (
		<table className={s.transactionHistory}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
		{transactionsData.map(el => {
			return <tr key={el.id}>
      <td>{el.type}</td>
      <td>{el.amount}</td>
      <td>{el.currency}</td>
    </tr>
		})}
    
  </tbody>
</table>
	)
}

export default Transactions