import Header from "components/header/Header"
import SlidingCartMenu from "components/cart/SlidingCartMenu"
import { Outlet, useLocation } from "react-router-dom"
import Footer from "components/Footer"
import LandingPage from "./LandingPg"


const ParentRoute:React.FC = () => {
    const location = useLocation()
    return(
        <div 
            className="h-full"
            >
            <Header />
            <SlidingCartMenu />
            {location.pathname === "/" && <LandingPage />}
            <Outlet />
            <Footer />
            
        </div>
    )
}

export default ParentRoute