import { useSelector } from "react-redux"

function AccountRtk(){
   const{fullName,mobile,balance}= useSelector((state)=>state.user)
//    const transactions = useSelector(
//   (state) => state.tnxs?.transactions || []
// );
const {transactions}=useSelector((state)=>state.tnxs)
  return (
    <div className="container mt-4">
        <h2 className='text-primary'>Account details</h2>
        <table className='table table-bordered'style={{width:'50%'}}>
            <thead>
                <tr>
                    <th>Field</th>
                    <th>value</th>
                </tr>
            </thead>

            <tbody>
                <tr><td>Full Name</td><td>{fullName}</td></tr>
                 <tr><td>mobile</td><td>{mobile}</td></tr>
                  <tr><td>balance</td><td>{balance}</td></tr>
            </tbody>
        </table>
        <h2 className='mt-4'>Transanctions</h2>
        <table className='table table-bordered'>
        <thead>
            <tr><th>amount</th><th>type</th><th>date</th></tr>
        </thead>
        <tbody>
  {transactions.length === 0 ? (
    <tr>
      <td colSpan="3">No transactions yet</td>
    </tr>
  ) : (
    transactions.map((tx, i) => (
      <tr key={i}>
        <td>{tx.amount}</td>
        <td>{tx.type}</td>
        <td>{tx.date}</td>
      </tr>
    ))
  )}
</tbody>
</table>
      
    </div>
  )
}

export default AccountRtk
