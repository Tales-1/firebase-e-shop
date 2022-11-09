import { Link } from "react-router-dom"
import Button from "./Button"

const Hero:React.FC = () => {
    return (
        <div className="text-center row-start-1 mx-auto col-start-1 w-3/5 md:9/10 flex flex-col gap-5 md:gap-9 xl:px-20 my-auto xl:mt-28 items-center">
            <h1 className="text-5xl sm:text-7xl leading-tight md:text-8xl xl:text-8.5xl text-white font-serif font-bold">Traditional and Modern Styles To Suit All
                <span className="block text-2xl xl:text-5xl mt-5 font-normal">Browse through our collection</span>
            </h1>
            <Link to="/collection">
                <Button 
                    styles="text-lg py-3 px-4 md:px-6 md:py-5 md:text-2xl bg-sauvignon-cr text-blue-card xl:mt-10 font-bold mx-auto hover:bg-blue-header hover:text-sauvignon-cr">
                    SHOP NOW
                </Button>
            </Link>
        </div>
    )
}

export default Hero