import { Link } from "react-router-dom"
import { useAppSelector } from "redux/store/hooks"
import { selectOverlay, selectViewport } from "redux/features/screenSlice"
import { motion } from "framer-motion"

type CardProps = {
    url:string
    src:string
    name:string
    style?:string
    cardNo:number
}

const CatalogueCard:React.FC<CardProps> = ({url,src,style,name, cardNo}) => { 
    const viewport = useAppSelector(selectViewport)
    const { desktop,mobile } = viewport
    const initial = {
        mobileX: cardNo === 1 ? -70 : cardNo === 3 ? 70 : 0,
        mobileY: cardNo === 2 ? 70 : 0,
        desktopX:-70
    }

    const {mobileX, mobileY, desktopX } = initial
    const overlayStyles = useAppSelector(selectOverlay)
    return(     
                <motion.div 
                    className={`w-full ${style} relative`}
                    initial={{
                        opacity:0,
                        x:desktop ? desktopX : mobileX,
                        y:desktop ? 0 : mobileY
                    }}
                    whileInView={{opacity:1, x:0, y:0, transition:{duration:0.5, delay:desktop ? 0.2 : 0.4}}}
                    viewport={{once:true, amount:desktop ? 0.75 : 0.4}}
                    >
                    <Link to={url}>
                        <div className="relative bg-blue-header flex flex-col w-full items-center transition-all duration-300 hover:scale-105">
                            <div className={`relative w-full ml-auto ${overlayStyles} before:bg-black `}>
                                <img src={src} alt="clothes" className={`aspect-square lg-2:aspect-[2.5/1] object-cover w-full`}/>
                            </div>
                            <div className="flex flex-col absolute justify-center items-center h-full w-full">

                                <h2 className="text-white text-3xl font-serif tracking-wider lg-2:text-6xl">{name}</h2>
                            </div> 
                        </div>
                    </Link>
                </motion.div>
    )
}

export default CatalogueCard