import hamburgerIcon from "./white-hamburger.png"
import  useToggler  from "../../../utils/useToggler"
type ToggleFunction = {
    toggleVisible:() => void
}

const HamburgerMenu: React.FC<ToggleFunction> = ({toggleVisible}) => { 
    
    return(
        <img 
        className="w- h-6 hover:cursor-pointer md:hidden" 
        src={hamburgerIcon}
        onClick={toggleVisible}
        alt="hamburger-menu"/>
    )
}

export default HamburgerMenu