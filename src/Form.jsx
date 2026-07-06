import React,{useState} from 'react'
import {useDispatch} from 'react-redux' 
import{deposit}from './Action.js'
const Form = () => {
  const [amount, setAmount] = useState('');
  const [withdrawAmount, setWithdrawAmount] = useState('');
    const [fullName, setFullName] = useState('');
    const [mobile, setMobile] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
     e.preventDefault();
    // Handle form submission logic here
   
    dispatch(deposit(Number(amount)));
    setAmount('');
    console.log('amount:', amount);
  };
  const handleWithdraw = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // dispatch({type: "withdraw", payload: Number(withdrawAmount)});
    // setWithdrawAmount('');
    // console.log('withdrawAmount:', withdrawAmount);
      dispatch({type: "withdraw", payload: Number(withdrawAmount)});
    setWithdrawAmount('');
    console.log('withdrawAmount:', withdrawAmount);
    };
    const handleSETProfile = (e) => {
        e.preventDefault();
        dispatch({type: "set_profile", payload: {fullName, mobile}});
        setFullName('');
        setMobile('');
        console.log('fullName:', fullName);
        console.log('mobile:', mobile);
    };

  return (
    <div>
        <form onSubmit={handleSubmit}>
      <h3>Deposit</h3>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount to deposit"
      ></input>
        <button type="submit">Deposit</button>
    </form>
    <form onSubmit={handleWithdraw}>
      <h3>Withdraw</h3>
      <input
        type="number"
        value={withdrawAmount}
        onChange={(e) => setWithdrawAmount(e.target.value)}
        placeholder="Enter amount to withdraw"
      ></input>
        <button type="submit">Withdraw</button>
    </form>
        <form onSubmit={handleSETProfile}>
      <h3>Set Profile</h3>
      <input
        type="fullName"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        placeholder="Enter your full name"
      ></input>
      <input
        type="mobile"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
        placeholder="Enter your mobile number"
      ></input>
        <button type="submit">Set Profile</button>
        <button type="button" onClick={() => dispatch({type: "reset"})}>Reset</button>
    </form>
    </div>
  )
}

export default Form
