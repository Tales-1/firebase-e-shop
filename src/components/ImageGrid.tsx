import heroImg from "../images/her-new.jpeg"
import Hero from "./Hero"
import { useAppSelector, useAppDispatch } from "../redux/store/hooks"
import { selectViewport } from "../redux/features/screenSlice"

// FIND A SOLUTION TO THE MOBILE KEY PAIRING NOT BEING READ OR UNDERSTOOD BY TYPESCRIPT AT THE MOMENT I'VE PUT DOWN ANY
// Property 'mobile' does not exist on type '{ mobile?: boolean | undefined; tablet?: boolean | undefined; desktop?: boolean | undefined; } | undefined'.ts(2339)

const ImageGrid:React.FC = () => {
    const viewportSizes = useAppSelector(selectViewport)
    
    // const imgArray = [kurtaOne,kurtaTwo]
    // const displayImages = imgArray.map((img,i)=> (
    //         <img key={i} src={img} alt="kurta" className="object-cover h-full w-full"/>
    // ))
    return (
            <div className="relative grid h-full max-w-full">
                <div className="grid row-start-1 col-start-1 bg-black overflow-hidden before:absolute before:block before:inset-0 before:bg-black before:opacity-50 -z-10">
                    <img className="object-cover h-full w-full" src={heroImg} alt="woman wearing a dress" />
                </div>      
                <Hero />
            </div>
    )
}

export default ImageGrid