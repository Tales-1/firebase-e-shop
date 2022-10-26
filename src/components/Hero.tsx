import { Link } from "react-router-dom"
import Button from "./Button"

const Hero:React.FC = () => {
    return (
        <div className="text-center row-start-1 col-start-1 w-3/5 md:9/10 flex flex-col gap-5 md:gap-9 z-10 xl:px-20 justify-self-center xl:justify-self-start my-auto xl:mt-28 xl:text-start items-center xl:items-start">
            <h1 className="text-5xl leading-tight md:text-8xl xl:text-8.5xl text-white font-serif">Traditional and Modern Styles To Suit All
                <span className="block text-2xl xl:text-4.5xl mt-5">Browse through our collection</span>
            </h1>
            <Link to="/collection"><Button styles="text-white text-lg md:p-5 md:text-2xl bg-red p-3 xl:text-2xl xl:mt-10 font-extrabold mx-auto">SHOP NOW</Button></Link>
        </div>
    )
}

export default Hero