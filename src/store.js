import { createStore ,combineReducers} from "redux";

const initialState = {
    fullName: "",
    mobile: "null",
    balance: 0
}
const transInitialState = {
    transactions: [],
    nextId: 1
}

function accountReducer(state=initialState, action){
    switch(action.type){
        case  "deposit":
            return {
                ...state,balance: state.balance + action.payload
            }
            case "withdraw":
                return {
                    ...state,balance: state.balance - action.payload
                }
            case "set_profile":
                return {
                    ...state,fullName: action.payload.fullName, mobile: action.payload.mobile
                }
                 case "reset":
                    return initialState
                
            default:
                return state
    }
}
function transactionReducer(state=transInitialState, action){
    switch(action.type){
        case "add":
            return {
                ...state,
                transactions: [...state.transactions, { 
                    id: state.nextId,
                    amt: action.payload.amt,
                    type: action.payload.type,
                    date: action.payload.date

                 }],
                nextId: state.nextId + 1
            };
        default:
            return state;
    }
}
const rootReducer = combineReducers({
    account: accountReducer,
    transactions: transactionReducer
});
const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
// console.log('state:', store.getState());

// store.dispatch({type: "set_profile", payload: {fullName: "John Doe", mobile: "1234567890"}});
// store.dispatch({type: "deposit", payload: 12000});
// console.log('state:', store.getState());
// store.dispatch({type: "withdraw", payload: 500});
// // store.dispatch({type: "reset"});
// console.log('state:', store.getState());

export default store;