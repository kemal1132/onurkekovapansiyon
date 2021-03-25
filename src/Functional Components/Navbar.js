import {useSelector} from "react-redux";
import LanguageSelector from "../Redux/Reducers&Selectors/LanguageSelector";
import icon from "../Assets/Icon.png";
import getLanguageText from "../UsefulMethods/GetLanguageText";
import {NavLink} from "react-router-dom";
const Navbar = ()=>(
    <div id="navBar">
        <img src={icon} alt="OnurPension" id="icon"></img>
        <NavLink to="/Reservation">{`${getLanguageText(useSelector(LanguageSelector),  "Reservation")}`}</NavLink>
        
    </div>
);

export default Navbar;