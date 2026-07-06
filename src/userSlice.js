import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    fullName:"null",
    balance: 0,
    mobile: null
};

 const userSlice= createSlice({
    name:"user",
    initialState,
    reducers:{
        updateFullName(state,action){
            state.fullName=action.payload

        },
          updateMobile(state,action){
            state.mobile=action.payload
            
        },
          deposit(state,action){
            state.balance +=action.payload
            
        },
          withdraw(state,action){
            state.balance -=action.payload
            
        },
        reset(state){
            state.fullName=""
            state.balance=0
            state.mobile=null
        }
    }

            
        })
        // console.log("userSlice:",userSlice)
 export default userSlice.reducer
 export const{updateFullName,updateMobile,deposit,withdraw,reset}=userSlice.actions
