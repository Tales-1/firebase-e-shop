import kurtaOne from "../images/Kurta-3.jpeg"
import kurtaTwo from "../images/Kurta-5-1.jpeg"
import kurtaThree from "../images/Kurta-11-1.jpeg"
import kurtaFour from "../images/Kurta-7-1.jpeg"
import {useContext} from "react"
import { Context } from "../context/ThemeContext"
import Hero from "./Hero"

// FIND A SOLUTION TO THE MOBILE KEY PAIRING NOT BEING READ OR UNDERSTOOD BY TYPESCRIPT AT THE MOMENT I'VE PUT DOWN ANY
// Property 'mobile' does not exist on type '{ mobile?: boolean | undefined; tablet?: boolean | undefined; desktop?: boolean | undefined; } | undefined'.ts(2339)

const ImageGrid:React.FC = () => {
    const {viewportSizes} = useContext(Context)
    const {mobile}:any= viewportSizes
    const gridStyles = mobile ? "grid-cols-2 grid-rows-2" : "grid-cols-3"
    const imgArray = [kurtaOne,kurtaTwo,kurtaThree]
    const displayImages = imgArray.map((img,i)=> (
            <img key={i} src={img} alt="kurta" className="object-cover h-full w-full"/>
    ))
    return (
            <div className="relative grid before:absolute before:block before:inset-0 before:bg-black before:opacity-40 h-full max-w-full">
                <div className={`grid ${gridStyles} row-start-1 col-start-1 bg-black overflow-hidden`}>
                    {displayImages}
                    {(mobile && <img src={kurtaFour} alt="kurta" className="object-cover h-full w-full" />)}
                </div>      
                <Hero />
            </div>
    )
}

export default ImageGrid