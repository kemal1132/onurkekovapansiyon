import TurkishText from "./Turkish"
import EnglishText from "./English"

export const Turkish="Turkish";
export const English="English";
const languages = {} //Turkish: TurkishText, English: EnglishText
languages[Turkish] = TurkishText;
languages[English] = EnglishText;

export default Object.freeze(languages);
