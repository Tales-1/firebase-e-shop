import { useParams } from "react-router-dom"
import { Context } from "../context/ThemeContext"
import { ReactElement, ReactNode, useContext, useEffect, useState } from "react"
import ProductCard from "../components/ProductCard"
import kurtaOne from "../images/Kurta-9.jpeg"
import SpinnerL from "../utils/SpinnerL"

interface ProductObject { 
    id?:string,
    name?:string,
    type?:string,
    price?:number,
    description?:string,
}
const ProductList:React.FC = () =>{
    const { productData } = useContext(Context)
    const [loading,setLoading] = useState(true)
    const [storeProds,setStoreProds] = useState<ProductObject[] | null>()

    const params = useParams()

    const displayProds:ReactNode = productData == null ? [] : storeProds?.map((product,i)=>{
        const {name,price,description} = product
        return (<ProductCard 
                    key={i}
                    name={name}
                    description={description}
                    price={price}
                    img={kurtaOne}
                />)
    })

    useEffect(()=>{
        if(productData !== undefined) {
            // const filteredArray:object[] = []
            //filter not working here for some reason
            const filteredArray = productData.filter((product)=>{
                if(product.type !== params.name) return false
                return product
            })
            setStoreProds(filteredArray)
    }

    setTimeout(()=>setLoading(false),500)
    },[productData])
  
      
    
    return(
        <div className="container bg-sauvignon-cr h-screen font-serif min-w-full">
            <h2 className="text-center text-4xl py-3 my-3 w-full">{params.name?.toUpperCase()}</h2>
            <div className="bg-white pt-34 flex flex-col gap-7 items-center justify-center py-5 overflow-scroll">
             {loading ? <SpinnerL /> : displayProds }    
            </div>
        </div>
        
    )
}

export default ProductList