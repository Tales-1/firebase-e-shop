import kurtaOne from "../images/Kurta-1.jpeg"
import kurtaTwo from "../images/Kurta-2-0.jpeg"
import kurtaThree from "../images/Kurta-3.jpeg"
import CatalogueCard from "../components/CatalogueCard"
import Underline from "../images/PngItem_1128059.png"

const Catalogue:React.FC = () =>{
    
    return(
        <div className="flex flex-col items-center h-full gap-6">
            <div className="mt-16 w-full grid grid-cols-3 grid-rows-2 items-center justify-center">
                <h1 className="text-4.5xl lg:text-6xl font-serif text-center row-start-1 col-start-1 col-span-3">COLLECTION</h1>
                <img src={Underline} alt="underline" className="w-2/3 min-w-[12rem] max-w-[23rem] row-start-2 col-start-1 col-span-3 mx-auto"/>
            </div>
            <div className="flex flex-col lg-2:flex-row justify-center items-center gap-8 bg-white w-full sm:w-9/12 lg:w-10/12 p-10">
                <CatalogueCard url="/collection/kurtas" src={kurtaOne} name="Kurtas" />
                <CatalogueCard url="/collection/dresses" src={kurtaTwo} name="Dresses" />
                <CatalogueCard url="/collection/casual" src={kurtaThree} name="Casual" />
            </div>
        </div>
    )
}

export default Catalogue