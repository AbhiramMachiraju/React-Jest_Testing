import { actionType } from "../Actions/ActionType";

const intialState = {
    users: [],
    responseMessage: '',
    isLoading: false
}

const Userreducers = (state = intialState, action) => {
    switch (action.type) {
        case actionType.FETCH_USER_REQUEST:
            return { ...state, isLoading: true }
        case actionType.FETCH_USER_RESPONSE:
            return { isLoading: false, users: action.payload.data.data, responseMessage: action.payload.data.message }
        default:
            return state;
    }
}

const CacheUserReducer = (state =[], action) => {
    switch (action.type) {
      case actionType.STORE_CACHE_USER:
        return action.payload;
      default:
        return state;
    }
  };

export {Userreducers,CacheUserReducer};