import { useEffect} from "react"
import { Link } from "react-router-dom"
import MobileNavBar from "./header-items/hamburger/MobileNavBar"
import CartBtn from "./header-items/CartBtn"
import logo from "./icons/newww.jpeg"
import ProfileBtn from "./header-items/ProfileBtn"
import SearchBar from "./header-items/SearchBar"
import { useAppDispatch, useAppSelector } from "redux/store/hooks"
import { selectViewport, setWidth } from "redux/features/screenSlice"
import DesktopNavBar from "./DesktopNavBar"


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
            <header className="bg-blue-header flex items-center p-5 w-full z-10 shadow-md sticky top-0">
                {mobile && <MobileNavBar />}
                <Link to="/" className="w-24 md:28 mx-auto md:mx-0">
                    <img  src={logo} alt="shop logo" />
                </Link>  

                {(tablet || desktop) && <SearchBar />}

                <ProfileBtn />
                <CartBtn />
            </header>
            <DesktopNavBar />
        </>

    )
}

export default Header