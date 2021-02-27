import {useSelector} from "react-redux";
import LanguageSelector from "../Redux/Reducers&Selectors/LanguageSelector";

const Navbar = ()=>(<div>{`${useSelector(LanguageSelector)}`}</div>);

export default Navbar;