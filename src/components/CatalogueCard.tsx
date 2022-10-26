import { Link } from "react-router-dom"
import { Context } from "../context/ThemeContext"
import { useContext } from "react"
import Button from "../components/Button"

type CardProps = { 
    url:string
    name:string
    src:string
}

type ContextObject = any


const CatalogueCard:React.FC<CardProps> = ({url,src,name}) => { 
    const {overlayStyles} = useContext<ContextObject>(Context)
    return( 
                <div className={`relative ${overlayStyles} flex flex-col w-full items-center shadow-2xl transition-all duration-300 hover:scale-105 rounded-3xl overflow-hidden`}>
                    <img src={src} alt="clothes" className="w-full aspect-square object-cover"/>
                    <div className="absolute inset-0 flex flex-col gap-14 justify-center items-center">
                        <h2 className="text-5xl lg-2:text-6xl text-white">{name}</h2>
                        <Link to={url}>
                            <Button styles="text-white text-lg md:text-3xl lg:text-xl lg-2:text-2xl lg:border-4 border-white border-2 p-2 hover:bg-white hover:text-black">SHOP NOW</Button>
                        </Link>
                    </div>
                </div>
    )
}

export default CatalogueCard