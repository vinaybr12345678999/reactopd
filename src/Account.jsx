import React from 'react'
import{useSelector} from 'react-redux'
const Account = () => {
    let data = useSelector((state) => {
        return state.account
    });
    console.log('data:', data);
  let {transactions} = useSelector((state) => {
        return state.transactions
    });
    console.log('transactions:', transactions);
  return (
    <div>
      <h2>Account</h2>
      <table border="1 px solid black">
        <thead>
            <tr>
                <th>field</th>
                <th>value</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Full Name</td>
                <td>{data.fullName}</td>
            </tr>
            <tr>
                <td>Mobile</td>
                <td>{data.mobile}</td>
            </tr>
            <tr>
                <td>Balance</td>
                <td>${data.balance.toFixed(2)}</td>
            </tr>
            <tr>
                <td>Account Type</td>
                <td>{data.accountType}</td>
            </tr>
        </tbody>
      </table>
      <h2>Transactions</h2>
      <table border="1 px solid black">
        <thead>
            <tr>
                <th>Amount</th>
                <th>Type</th>
                <th>Date</th>
            </tr>
        </thead>
        <tbody>
            
           {transactions.length === 0 ? (
                <tr>
                    <td colSpan="3">
                        No transactions found.
                        </td>
                </tr>
           ) : 
          (transactions.map((t,i) => (
                <tr key={i}>
                    <td>{t.amt}</td>
                    <td>{t.type}</td>
                    <td>{t.date}</td>
                </tr>
            )))}
            </tbody>
      </table>
    </div>
  )
}

export default Account
