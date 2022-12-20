//import {createStore } from "redux";
const { createStore, combineReducers,applyMiddleware} = require('redux');
const reduxLogger = require('redux-logger').default;
const intialState = { noOfLaptops: 100,noOfMobiles:1000 }
const actionType = {
                            BUY_LAPTOP: 'BUY_LAPTOP',
                            BUY_MOBILE: 'BUY_MOBILE' 
                   }



//Actions
const buyLaptop = () => { return { type: actionType.BUY_LAPTOP } }
const buyMobile = () => { return { type: actionType.BUY_MOBILE } }




//Reducers
const lapTopreducer = (state = intialState, action) => {
    switch (action.type) {

        case actionType.BUY_LAPTOP:
            return { noOfLaptops: state.noOfLaptops - 1 }
        default:
            return state;
    }
}

const mobileReducer = (state = intialState, action) => {
    switch (action.type) {

        case actionType.BUY_MOBILE:
            return { noOfMobiles: state.noOfMobiles - 1 }
        default:
            return state;
    }
}




const rootReducers =combineReducers({lapTopreducer,mobileReducer});

//Stores
//const store = createStore(lapTopreducer);
//reducer with middle ware
const store = createStore(rootReducers,applyMiddleware(reduxLogger));
//console.log(store)
store.subscribe(() => { console.log(store.getState()) });
store.dispatch(buyLaptop());
store.dispatch(buyMobile());