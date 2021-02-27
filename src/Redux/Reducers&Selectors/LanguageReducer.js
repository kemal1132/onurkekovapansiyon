import ActionTypes from "../../Constants/ActionTypes";

const initialState = "English"

const language = (state=initialState, action) => {
    if (action.type === ActionTypes.changeLanguage) {
        state=action.payload;
        return state;
    }else{
        return state;
    }
}

export default language;