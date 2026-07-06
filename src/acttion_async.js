export const fetchUserrequest = () => ({type: "fetch_user_request"})
export const fetchUserSuccess = (user) => ({type: "fetch_user_success", payload: user})
export const fetchUserFailure = (error) => ({type: "fetch_user_failure", payload: error})

export const fetch = (userId) => async (dispatch,getState)=>{
    dispatch(fetchUserrequest()); 
    try {
        const result= await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
      const data = await result.json();
        dispatch(fetchUserSuccess(data));
    } catch (error) {
        dispatch(fetchUserFailure(error.message));
       
    }
};
