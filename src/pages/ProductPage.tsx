import BreadCrumbs from "../utils/BreadCrumbs"
import { useParams,useLocation } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { Context } from "../context/ThemeContext"
import SpinnerL from "../utils/SpinnerL"

interface ProductObject { 
    id?:string,
    name?:string,
    type?:string,
    price?:number,
    description?:string,
}



const ProductPage:React.FC = () => {
    const { productData } = useContext(Context)
    const [loading,setLoading] = useState(true)
    const [currentProd, setCurrentProd] = useState<ProductObject | undefined>()
    const currentId:string = useParams().type!
    const params:string = useParams().name!
    const pathname:string = useLocation().pathname!
   
    useEffect(()=>{
        if(productData !== undefined) {
            const currItem = productData.find(product => product.id === currentId)
            console.log()
            setCurrentProd(currItem)
            setTimeout(()=>setLoading(false),1000)
        }
    },[productData])
   
    return(
        <div className="w-full">
            <BreadCrumbs pathObj={{path:pathname, name:params}} />
            <h1 className="text-6xl">PRODUCT PAGE</h1>
             {loading ? <SpinnerL /> : currentProd!.name }
        </div>
    )
}

export default ProductPage