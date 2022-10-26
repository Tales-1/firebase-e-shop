import { useParams, Outlet } from "react-router-dom"
import { Context } from "../context/ThemeContext"
import { ReactNode, useContext, useEffect, useState } from "react"
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
    const { productData, loading } = useContext(Context)
    const [storeProds,setStoreProds] = useState<ProductObject[] | null>()

    const params = useParams()
    
    const displayProds:ReactNode = productData == null ? [] : storeProds?.map((product,i)=>{
        const {name,price} = product
        return (<ProductCard 
                    key={i}
                    name={name}
                    price={price}
                    img={kurtaOne}
                />)
    })

    useEffect(()=>{
        if(productData !== undefined) {
            // const filteredArray:object[] = []
            const filteredArray = productData.filter((product)=>{
                if(product.type !== params.name) return false
                return product
            })
            console.log("rendered")
            setStoreProds(filteredArray)
    }
    
    },[params,productData])
  
      
    
    return(
        <div className="container h-screen min-w-full">
            <nav className="w-full flex p-5 bg-sauvignon-cr"></nav>
            <h2 className="text-4xl py-6 w-full text-center lg:text-5xl font-serif">{params.name?.toUpperCase()}</h2>
            <div className="bg-white mt-5 flex flex-col gap-10 justify-center items-center py-5 overflow-scroll md:overflow-none md:w-9/12 md:mx-auto lg:flex-row lg:flex-wrap lg:items-start lg-2:w-8/12 lg-2:justify-start lg:ml-auto lg:mr-0">
                {loading ? <SpinnerL /> : displayProds }    
            </div>
            
        </div>
        
    )
}

export default ProductList