
import { useState } from 'react'
import { useDispatch } from 'react-redux'

import {updateFullName,updateMobile,deposit,withdraw,reset} from './userSlice'
import{addtnx,removetnx,clearAll} from './trnSlice'
function FormRtk(){
    const[amount,setAmount]=useState("")
        const[fullname,setFullName]=useState("")
            const[mobile,setMobile]=useState("")
            const dispatch=useDispatch()

            const handleDeposit=()=>{
             dispatch(deposit(Number(amount)))
             dispatch(addtnx({
                amount:Number(amount),
                type:"credit",
                date:new Date().toLocaleDateString(),
             }))
             setAmount("")
            }

            const handleWithdraw=()=>{
            dispatch(withdraw(Number(amount)))
             dispatch(addtnx({
                amount:Number(amount),
                type:"debit",
                date:new Date().toLocaleDateString(),
             }))
             setAmount("")
            }

            const handleUpdateName=()=>{
            dispatch(updateFullName(fullname))
           setFullName ("")
            }

             const handleMobile=()=>{
            dispatch(updateMobile(mobile))
             setMobile("")
             }

             const handleClearTransactions=()=>{
             dispatch(clearAll())
             }
             const handleReset=()=>{
                dispatch(reset())
             }
    return(
       <div className='container mt-4'>
        <h2> Account form</h2>
        <div className='row mb-4'>
            <div className='col'>
<input type='number'
className='form-control'
value={amount}
onChange={(e)=>setAmount(e.target.value)}
placeholder='enter amount'
/>

            </div>
<div className='col'>
    <button className='btn btn-primary me-2' onClick={handleDeposit}>deposit</button>
      <button className='btn btn-danger' onClick={handleWithdraw}>withdraw</button>

</div>

        </div>
        <div className='row mb-3'>
            <div className='col'>
                <input type="text"
                className='form-control'
                value={fullname}
                onChange={(e)=>setFullName(e.target.value)}
                placeholder='enter fullname'
                />

            </div>
<div className='col'>
    <button className='btn btn-primary' onClick={handleUpdateName}>Update Name</button>


</div>
        </div>
         <div className='row mb-3'>
            <div className='col'>
                <input type="number"
                className='form-control'
                value={mobile}
                onChange={(e)=>setMobile(e.target.value)}
                placeholder='enter mobile'
                />

            </div>
<div className='col'>
    <button className='btn btn-primary' onClick={handleMobile}>enterr</button>


</div>
        </div>
         <button className='btn btn-primary me-2' onClick={handleReset}>Reset</button>
      <button className='btn btn-danger' onClick={handleClearTransactions}>clear history</button>


       </div> 
    )
}

export default FormRtk
