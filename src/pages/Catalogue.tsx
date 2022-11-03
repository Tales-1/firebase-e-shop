import kurtaOne from "../images/Kurta-1.jpeg"
import kurtaTwo from "../images/Kurta-2-0.jpeg"
import kurtaThree from "../images/Kurta-3.jpeg"
import CatalogueCard from "../components/CatalogueCard"


const Catalogue:React.FC = () =>{
    
    return(
        <div className="flex flex-col items-center h-full gap-6">
            <h1 className="text-4xl sm:text-4.5xl md:text-5xl lg:text-6xl font-serif mt-12 w-full text-center">COLLECTION</h1>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-8 bg-white w-full sm:w-9/12 lg:w-11/12 p-10">
                <CatalogueCard url="/collection/kurtas" src={kurtaOne} name="Kurtas" />
                <CatalogueCard url="/collection/dresses" src={kurtaTwo} name="Dresses" />
                <CatalogueCard url="/collection/casual" src={kurtaThree} name="Casual" />
            </div>
        </div>
    )
}

export default Catalogue