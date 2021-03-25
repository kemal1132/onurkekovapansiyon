import {useSelector, useDispatch} from "react-redux";
import {NavLink} from "react-router-dom";

import LanguageSelector from "../Redux/Reducers&Selectors/LanguageSelector";
import getLanguageText from "../UsefulMethods/GetLanguageText";
import getLanguageAction from "../Redux/Actions/LanguageAction";
import {Turkish, English} from "../Constants/Languages";

import icon from "../Assets/Icon.png";
import EnglishFlag from "../Assets/EnglishFlag.png";
import TurkishFlag from "../Assets/TurkishFlag.png";

const Navbar = ()=>{
    const dispatch = useDispatch();
    return <div id="navBar">
        <img src={icon} alt="OnurPension" id="icon"></img>
        <NavLink to="/Reservation">{`${getLanguageText(useSelector(LanguageSelector),  "Reservation")}`}</NavLink>
        <NavLink to="/Rooms">{`${getLanguageText(useSelector(LanguageSelector),  "Rooms")}`}</NavLink>
        <NavLink to="/Restaurant">{`${getLanguageText(useSelector(LanguageSelector),  "Restaurant")}`}</NavLink>
        <NavLink to="/Environment">{`${getLanguageText(useSelector(LanguageSelector),  "Environment")}`}</NavLink>
        <NavLink to="/Map">{`${getLanguageText(useSelector(LanguageSelector),  "Map")}`}</NavLink>
        <NavLink to="/ContactUs">{`${getLanguageText(useSelector(LanguageSelector),  "ContactUs")}`}</NavLink>
        <img src={EnglishFlag} alt="English" id="englishFlag" onClick={()=>(dispatch(getLanguageAction(English)))}></img>
        <img src={TurkishFlag} alt="Turkish" id="turkishFlag" onClick={()=>(dispatch(getLanguageAction(Turkish)))}></img>
    </div>
};

export default Navbar;