import { combineReducers, createStore,applyMiddleware,compose} from "redux";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import Laptopreducers from "../Reducers/Laptopreducers";
import {Userreducers,CacheUserReducer} from "../Reducers/Userreducers";
import Mobilereducers from "../Reducers/Mobilereducers";

//Saga
import createSagaMiddleware from 'redux-saga'
import { watcherSagaFunc } from "../../Saga/sample.saga";
const sagaMiddleware=createSagaMiddleware();


const rootReducer = combineReducers({
  laptopsStore: Laptopreducers,
  mobilesStore: Mobilereducers,
  usersStore: Userreducers,
  cacheUserStore:CacheUserReducer
})


/* const store = createStore(rootReducer,compose(
  applyMiddleware(thunk,logger),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  )); */


  //Saga to Store
const store = createStore(rootReducer,compose(
  applyMiddleware(sagaMiddleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ));

  sagaMiddleware.run(watcherSagaFunc)

export default store;