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
    const { productData, loading } = useContext(Context)
    const [currentProd, setCurrentProd] = useState(124214)
    const currentId:string = useParams().type!
    const params:string = useParams().name!
    const pathname:string = useLocation().pathname!
    
    
    useEffect(()=>{
        if(productData !== undefined) {
            const currItem = productData.find(product => product.id === currentId)
            console.log(currItem)
            // setCurrentProd(currItem)
            
        }
    },[productData])
   
    return(
        <div className="w-full">
            <BreadCrumbs pathObj={{path:pathname, name:params}} />
            <h1 className="text-6xl">PRODUCT PAGE</h1>
            {/* {loading ? <SpinnerL /> : currentPro }  */}
            <p></p>
        </div>
    )
}

export default ProductPage