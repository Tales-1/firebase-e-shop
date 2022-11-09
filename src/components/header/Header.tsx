import { useEffect} from "react"
import { Link } from "react-router-dom"
import MobileNavBar from "./hamburger/MobileNavBar"
import ShoppingBag from "./header-items/ShoppingBag"
import logo from "./icons/mibby-logo.png"
import Profile from "./header-items/Profile"
import SearchBar from "./header-items/SearchBar"
import { useAppDispatch, useAppSelector } from "../../redux/store/hooks"
import { selectViewport, setWidth } from "../../redux/features/screenSlice"
import DesktopNavBar from "../DesktopNavBar"


const Header: React.FC = () => {
    const viewportSizes = useAppSelector(selectViewport)
    const dispatch = useAppDispatch()
    const {mobile, tablet, desktop} = viewportSizes
    
    useEffect(()=>{
        window.addEventListener("resize",()=>dispatch(setWidth(window.innerWidth)))
        return () => {
            window.removeEventListener("resize", ()=>dispatch(setWidth(window.innerWidth)))
        }
    },[])

    // const {viewportSizes} = useContext<ContextObject>(Context)
    // const {mobile,tablet,desktop} = viewportSizes
    
    return(
        <> 
            <header className="bg-blue-header flex items-center p-5 w-full z-10 shadow-md">
                {mobile && <MobileNavBar />}
                <Link to="/" className="w-36 mx-auto md:w-40 md:mx-0 xl:w-56">
                    <img  src={logo} alt="shop logo" />
                </Link>  

                {(tablet || desktop) && <SearchBar />}

                <Profile />
                <ShoppingBag />
            </header>
            {tablet || desktop ? <DesktopNavBar /> : null}
        </>

    )
}

export default Header