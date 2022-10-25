import { useParams } from "react-router-dom"
import { Context } from "../context/ThemeContext"
import { useContext } from "react"
import ProductCard from "../components/ProductCard"
import kurtaOne from "../images/Kurta-9.jpeg"
const ProductList:React.FC = () =>{
    const {data} = useContext(Context)
    const params = useParams()
    console.log(params)
    
    return(
        <div className="container bg-sauvignon-cr h-screen font-serif min-w-full">
            <h2 className="text-center text-4xl py-3 my-3 w-full">{params.name?.toUpperCase()}</h2>
            <div className="bg-white pt-34 flex flex-col gap-7 items-center justify-center py-5 overflow-scroll">
                <ProductCard name="Asian Kurta" price={10.99} description="Embroidered Kurta, With patches, Comes with XYZ, Modern Design" img={kurtaOne} />
                <ProductCard name="Asian Kurta" price={10.99} description="Embroidered Kurta, With patches, Comes with XYZ, Modern Design" img={kurtaOne} />
                <ProductCard name="Asian Kurta" price={10.99} description="Embroidered Kurta, With patches, Comes with XYZ, Modern Design" img={kurtaOne} />
                <ProductCard name="Asian Kurta" price={10.99} description="Embroidered Kurta, With patches, Comes with XYZ, Modern Design" img={kurtaOne} />
                <ProductCard name="Asian Kurta" price={10.99} description="Embroidered Kurta, With patches, Comes with XYZ, Modern Design" img={kurtaOne} />
                <ProductCard name="Asian Kurta" price={10.99} description="Embroidered Kurta, With patches, Comes with XYZ, Modern Design" img={kurtaOne} />
                <ProductCard name="Asian Kurta" price={10.99} description="Embroidered Kurta, With patches, Comes with XYZ, Modern Design" img={kurtaOne} />
            </div>
        </div>
        
    )
}

export default ProductList