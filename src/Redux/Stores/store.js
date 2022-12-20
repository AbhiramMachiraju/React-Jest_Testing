import { combineReducers, createStore,applyMiddleware,compose} from "redux";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import Laptopreducers from "../Reducers/Laptopreducers";
import {Userreducers,CacheUserReducer} from "../Reducers/Userreducers";
import Mobilereducers from "../Reducers/Mobilereducers";


const rootReducer = combineReducers({
  laptopsStore: Laptopreducers,
  mobilesStore: Mobilereducers,
  usersStore: Userreducers,
  cacheUserStore:CacheUserReducer
})


const store = createStore(rootReducer,compose(
  applyMiddleware(thunk,logger),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ));

export default store;