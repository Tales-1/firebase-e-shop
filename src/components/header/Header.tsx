import {useContext} from "react"
import { Context } from "../../context/ThemeContext"
import { Link } from "react-router-dom"
import MobileNavBar from "./hamburger/MobileNavBar"
import ShoppingBag from "./header-items/ShoppingBag"
import logo from "./icons/mibby-logo.png"
import Profile from "./header-items/Profile"
import SearchBar from "./header-items/SearchBar"

type ContextObject = any

const Header: React.FC = () => {
    
    const {viewportSizes} = useContext<ContextObject>(Context)
    const {mobile,tablet,desktop} = viewportSizes

    return(
        <div className="bg-blue-header flex items-center p-4 w-full md:p-5 xl:p-6">
            {mobile && <MobileNavBar />}

            <Link to="/" className="w-36 mx-auto md:w-40 md:mx-0 xl:w-56">
                <img  src={logo} alt="shop logo" />
            </Link>  

            {(tablet || desktop) && <SearchBar />}

            <Profile />
            <ShoppingBag />
        </div>

    )
}

export default Header