import axios from "axios"
import { actionType } from "./ActionType"


export const buyLaptop = () => { return { type: actionType.BUY_LAPTOP } }
export const buyMobile = () => { return { type: actionType.BUY_MOBILE } }
export const fetchUserRequest = () => { return { type: actionType.FETCH_USER_REQUEST } }
export const fetchUserResponse = (userData) => { return { type: actionType.FETCH_USER_RESPONSE,payload:userData } }

export const cacheUser = (users) => { return { type: actionType.STORE_CACHE_USER,payload:users} }

export const fetchAllData_Users = () => {
    return function(dispatch) {
        dispatch(fetchUserRequest());
        axios.get("http://localhost:8082/restApp/BioDataServices/getAllUsers").then(response => { dispatch(fetchUserResponse(response));})
    }
};

//For saga Test
export const addUser = (data) => { return { type: actionType.ADD_USER,payload:data} }
