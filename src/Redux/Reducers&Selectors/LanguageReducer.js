import ActionTypes from "../../Constants/ActionTypes";
import InitialState from "../../Constants/InitialState";



const language = (state=InitialState.language, action) => {
    if (action.type === ActionTypes.changeLanguage) {
        state=action.payload;
        return state;
    }else{
        return state;
    }
}

export default language;