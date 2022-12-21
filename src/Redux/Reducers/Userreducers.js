import { actionType } from "../Actions/ActionType";

const intialState = {
    users: [],
    responseMessage: '',
    isLoading: false
}

const Userreducers = (state = intialState, action) => {
    switch (action.type) {
       /*  case actionType.FETCH_USER_REQUEST:
            return { ...state, isLoading: true } */
       /*  case actionType.FETCH_USER_RESPONSE:
            return { isLoading: false, users: action.payload.data.data, responseMessage: action.payload.data.message } */
            case 'GET_ALL_USERS_SUCESS':
              return { isLoading: false, users: action.data.data, responseMessage: action.data.message } 
            case 'GET_ALL_USERS_FAILED':
              return { isLoading: false, users:[], responseMessage: action.data.message } 
            case 'ADDUSERS_SUCESS':
              {
                let user =[...state.users]; //previous Users
                user.push(action.data.data);
                return { isLoading: false, users: user, responseMessage: action.data.message } 
              }
            case 'ADDUSERS_FAIL':
              return { ...state,responseMessage: action.data.message } 
        default:
            return state;
    }
}

const CacheUserReducer = (state =[], action) => {
    switch (action.type) {
      /* case actionType.STORE_CACHE_USER:
        return action.payload; */
       case 'STORE_CACHE_USERS_SUCESS':
        return action.data; 
       case 'STORE_CACHE_USERS_FAILED':
        return action.message; 
      default:
        return state;
    }
  };

export {Userreducers,CacheUserReducer};