import {Turkish} from "../Constants/Languages";
import TurkishText from "../Constants/Turkish";
import EnglishText from "../Constants/English";

/** A method that gets strings depending on language provided, check languages from Constants/Languages. Provide the key of the text as a second field as string
 * @param language language constant from languages file
 * @param {string} textFieldID key of the text
 * @returns {string} value of the key given language
 * 
 * @example <Navlink id="ReservationLink">{getLanguageText(useSelector(languageSelector), "Reservation")}<\Navlink> 
 */
const getLanguageText = (language, textFieldID)=>{
    let languageText = [EnglishText, TurkishText]
    switch(language){
        case Turkish:
            return languageText[1][textFieldID];
        default:
            return languageText[0][textFieldID];
    }
};

export default  getLanguageText;