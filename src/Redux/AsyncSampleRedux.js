const { createStore, combineReducers, applyMiddleware } = require('redux');
const thunk = require('redux-thunk').default;
const axios = require('axios');

//ActionTypes
const actionType = {
    FETCH_USER_REQUEST: 'FETCH_USER_REQUEST',
    FETCH_USER_RESPONSE: 'FETCH_USER_SUCCESS',
}


//Inital States
const intialState = {
    users: [],
    responseMessage: '',
    isLoading: false
}


//Actions
const fetchUserRequest = () => { return { type: actionType.FETCH_USER_REQUEST } }
const fetchUserResponse = (userData) => { return { type: actionType.FETCH_USER_RESPONSE,payload:userData } }


//Reducers
const userReducer = (state = intialState, action) => {
    switch (action.type) {
        case actionType.FETCH_USER_REQUEST:
            return { ...state, isLoading: true }
        case actionType.FETCH_USER_RESPONSE:
            return { isLoading: false, users: action.payload.data.data, responseMessage: action.payload.data.message }
        default:
            return state;
    }
}


const fetchAllData_Users = () => {
    return function(dispatch) {
        dispatch(fetchUserRequest());
        axios.get("http://localhost:8082/restApp/BioDataServices/getAllUsers").then(response => { dispatch(fetchUserResponse(response));})
    }
};

//Stores
const store = createStore(userReducer,applyMiddleware(thunk));
//console.log(store)
store.subscribe(() => { console.log(store.getState()) });
store.dispatch(fetchAllData_Users());