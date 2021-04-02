import {updateReservationInfo} from "../../Constants/ActionTypes";
import InitialState from "../../Constants/InitialState";

/** Redux Reducer for language variable
 * @param {Object} state A state parameter that includes language:{string}
 * @param {string} action takes changeLanguage Action from Constants/ActionTypes 
 * @returns {Object} new state
 *
 */

const reservation = (state=InitialState.reservation, action) => {
    if (action.type === updateReservationInfo) {
        const finalState={...state,...action.payload};
        return finalState;
    }else{
        return state;
    }
}

export default reservation;