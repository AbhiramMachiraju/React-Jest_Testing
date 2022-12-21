import axios from 'axios';
import {takeEvery,put,delay,takeLatest,all, call} from 'redux-saga/effects'
import { actionType } from '../Redux/Actions/ActionType'


function* buyMobileGenerator()
{
   //yield delay(4000)
   yield put({type:"BUY_MOBILE_SUCCESS"});

}


function* buyLaptopGenerator()
{
   //yield delay(4000)
   yield put({type:"BUY_LAPTOP_SUCCESS"});

}


function* fetchAllUserGenerator()
{
    try{
        let users=yield call(axios.get,"http://localhost:8082/restApp/BioDataServices/getAllUsers");
        yield put({type:"GET_ALL_USERS_SUCESS",data:users.data});

    }catch(error){
           yield put({type:"GET_ALL_USERS_FAILED",message:error.message}); 
    }
}
function* addUserGenerator({payload})
{
    try{
        let users=yield call(axios.post,"http://localhost:8082/restApp/saveBioData",payload);
        yield put({type:"ADDUSERS_SUCESS",data:users.data});

    }catch(error){
           yield put({type:"ADD_USERS_FAILED",message:error.message}); 
    }
}


function* storeCacheUserGenerator()
{
    try{
        let users=yield call(axios.get,"http://localhost:8082/restApp/BioDataServices/getAllUsers");
        yield put({type:"STORE_CACHE_USERS_SUCESS",data:users.data});

    }catch(error){
           yield put({type:"STORE_CACHE_USERS_FAILED",message:error.message}); 
    }
}



export function* watcherSagaFunc()
{
    
   //yield takeEvery(actionType.BUY_MOBILE,buyMobileGenerator);
   //yield takeLatest(actionType.BUY_MOBILE,buyMobileGenerator);
   yield all([takeLatest(actionType.BUY_MOBILE,buyMobileGenerator),takeLatest(actionType.BUY_LAPTOP,buyLaptopGenerator),
      takeLatest(actionType.FETCH_USER_RESPONSE,fetchAllUserGenerator),
      takeLatest(actionType.STORE_CACHE_USER,storeCacheUserGenerator),
      takeLatest(actionType.ADD_USER,addUserGenerator),
     ]);



}