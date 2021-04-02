import language from "./LanguageReducer";
import reservation from "./ReservationReducer";
import {combineReducers} from "redux";

export default combineReducers({language, reservation});