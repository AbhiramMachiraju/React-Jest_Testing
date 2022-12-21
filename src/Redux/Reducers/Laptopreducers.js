import { actionType } from "../Actions/ActionType";

const intialState = { noOfLaptops: 100}

 const Laptopreducers = (state = intialState, action) => {
    switch (action.type) {

        /* case actionType.BUY_LAPTOP:
            return { noOfLaptops: state.noOfLaptops - 1 } */
        case 'BUY_LAPTOP_SUCCESS': // for SagaTest
            return { noOfLaptops: state.noOfLaptops - 1 }
        default:
            return state;
    }
}

export default Laptopreducers;