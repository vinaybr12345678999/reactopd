import{createStore,applyMiddleware} from "redux";
import {thunk} from "redux-thunk";

const initialState = {
    user: null,
    loading: false,
    error: null,
};

const asyncReducer = (state = initialState, action) => {
    switch (action.type) {
        case "fetch_user_request":
            return { ...state, loading: true};
        case "fetch_user_success":
            return { ...state, loading: false, user: action.payload };
        case "fetch_user_failure":
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};
    




const store = createStore(asyncReducer, applyMiddleware(thunk));

export default store;