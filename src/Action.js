export const deposit = (amount) => {
    return {
        type: "deposit",
        payload: amount
    }
}

export const withdraw = (amount) => {
    return {
        type: "withdraw",
        payload: amount
    }
}

// export const setProfile = (fullName, mobile) => {
//     return {
//         type: "set_profile",
//         payload: { fullName, mobile }
//     }
// }

// export const reset = () => {
//     return {
//         type: "reset"
//     }
// }

export const addTransaction = (amt, type, date) => {
    return {
        type: "add",
        payload: {amt, type, date}
    }
}