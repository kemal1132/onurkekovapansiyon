import {changeLanguage} from "../../Constants/ActionTypes";
import InitialState from "../../Constants/InitialState";

/** Redux Reducer for language variable
 * @param {Object} state A state parameter that includes language:{string}
 * @param {string} action takes changeLanguage Action from Constants/ActionTypes 
 * @returns {Object} new state
 *
 */

const language = (state=InitialState.language, action) => {
    if (action.type === changeLanguage) {
        state=action.payload;
        return state;
    }else{
        return state;
    }
}

export default language;