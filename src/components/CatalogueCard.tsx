import { Link } from "react-router-dom"
import { useContext } from "react"
import Button from "../components/Button"
import { useAppSelector } from "../redux/store/hooks"
import { selectOverlay } from "../redux/features/screenSlice"

// ERROR ON CONTEXT OBJECT
type ContextObject = any

type CardProps = {
    url:string
    src:string
    name:string
}

const CatalogueCard:React.FC<CardProps> = ({url,src,name}) => { 
    const overlayStyles = useAppSelector(selectOverlay)
    let nameArray = name.split("")
    let displayName = nameArray.map((letter)=>{
        return <span className="block text-center text-3xl lg-2:text-4xl">{letter.toUpperCase()}</span>
    })
    return( 
                <Link to={url} className="w-full md:w-[26rem] lg-2:w-full">
                    <div className="relative bg-blue-header flex flex-col w-full items-center shadow-2xl transition-all duration-300 hover:scale-105 rounded-2xl overflow-hidden">
                        <div className={`relative ${overlayStyles} before:bg-black w-full ml-auto`}>
                            <img src={src} alt="clothes" className={`aspect-square object-cover ml-auto w-full`}/>
                        </div>
                        <div className="flex flex-col absolute justify-center items-center h-full w-full">
                            
                            <h2 className="text-white text-5xl font-serif tracking-wider lg-2:text-6xl">{name}</h2>
                        </div>
                    </div>
                </Link>
    )
}

export default CatalogueCard