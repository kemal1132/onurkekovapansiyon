import {useSelector} from "react-redux";
import LanguageSelector from "../Redux/Reducers&Selectors/LanguageSelector";
import icon from "../Assets/Icon.png";
const Navbar = ()=>(
    <div id="navBar">
        <img src={icon} alt="OnurPension" id="icon"></img>
        {`${useSelector(LanguageSelector)}`}
    </div>
);

export default Navbar;