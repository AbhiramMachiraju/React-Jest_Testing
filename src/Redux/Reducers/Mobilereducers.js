import { actionType } from "../Actions/ActionType";

const intialState = {noOfMobiles:1000 }

const Mobilereducers = (state = intialState, action) => {
    switch (action.type) {
        /* case actionType.BUY_MOBILE:
            return { noOfMobiles: state.noOfMobiles - 1 } */
        case 'BUY_MOBILE_SUCCESS': // for Saga test
            return { noOfMobiles: state.noOfMobiles - 1 }
        default:
            return state;
    }
}

export default Mobilereducers;