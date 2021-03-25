import {changeLanguage} from "../../Constants/ActionTypes";
const getLanguageAction = (Payload) => {
   
    return {
        type: changeLanguage,
        payload:Payload
    }
}

export default getLanguageAction;