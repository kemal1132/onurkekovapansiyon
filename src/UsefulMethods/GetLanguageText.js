import languagesText, {Turkish, English} from "../Constants/Languages";


/** A method that gets strings depending on language provided, check languages from Constants/Languages. Provide the key of the text as a second field as string
 * @param language language constant from languages file
 * @param {string} textFieldID key of the text
 * @returns {string} value of the key given language
 * 
 * @example <Navlink id="ReservationLink">{getLanguageText(useSelector(languageSelector), "Reservation")}<\Navlink> 
 */
const getLanguageText = (language, textFieldID)=>{
    switch(language){
        case Turkish:
            return languagesText[Turkish][textFieldID];
        default:
            return languagesText[English][textFieldID];
    }
};

export default  getLanguageText;