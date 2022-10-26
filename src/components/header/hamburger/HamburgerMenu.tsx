import hamburgerIcon from "./white-hamburger.png"

type ToggleFunction = {
    toggleVisible:React.Dispatch<React.SetStateAction<boolean>>
}

const HamburgerMenu: React.FC<ToggleFunction> = ({toggleVisible}) => { 
   
    return(
        <img 
        className="w- h-6 hover:cursor-pointer md:hidden" 
        src={hamburgerIcon}
        onClick={()=>{toggleVisible(prev => !prev)}}
        alt="hamburger-menu"/>
    )
}

export default HamburgerMenu