import { useState } from "react"
import HamburgerMenu from "./HamburgerMenu"
import SlidingMenu from "./SlidingMenu"
import useToggler from "../../../utils/useToggler"


const HamburgerNav:React.FC = () => { 
    const {isVisible, toggleMenu} = useToggler()
    
    const translateClass = isVisible ? "translate-x-0" : "-translate-x-full"

  
    return(
        <div className="pl-4 z-20">
            <HamburgerMenu toggleVisible={()=>toggleMenu("OPEN")} />
            <SlidingMenu translate={translateClass} toggle={()=>toggleMenu("CLOSE")} />
        </div>
    )
}

export default HamburgerNav