import {useState} from "react"
import HamburgerMenu from "./HamburgerMenu"
import SlidingMenu from "./SlidingMenu"



const HamburgerNav:React.FC = () => { 
    const [visible,setVisible] = useState(false)
    const translateClass = visible ? "translate-x-0" : "-translate-x-full"

    
    return(
        <div className="pl-4 z-20">
            <HamburgerMenu toggleVisible={setVisible} />
            <SlidingMenu translate={translateClass} setVisible={setVisible} />
        </div>
    )
}

export default HamburgerNav