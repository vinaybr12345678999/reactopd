import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  transactions: []
};

const trnSlice = createSlice({
  name: "tnxs",
  initialState,
  reducers: {
    addtnx(state, action) {
      state.transactions.push(action.payload);
    },

    removetnx(state, action) {
      state.transactions.splice(action.payload, 1);
    },

    clearAll(state) {
      state.transactions = [];
    }
  }
});

export default trnSlice.reducer;
export const { addtnx, removetnx, clearAll } = trnSlice.actions;