import ImageGrid from "../components/ImageGrid"
import Header from "../components/header/Header"
import SlidingCartMenu from "../components/SlidingCartMenu"
import { Outlet, useLocation } from "react-router-dom"
const Home:React.FC = () => {
    const location = useLocation()
    return(
        <div className="h-[89vh] lg-2:h-[82vh]">
            <Header />
            <SlidingCartMenu />
            {location.pathname === "/" && <ImageGrid />}
            <Outlet />
        </div>
    )
}

export default Home