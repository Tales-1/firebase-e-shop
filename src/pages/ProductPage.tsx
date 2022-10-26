import BreadCrumbs from "../utils/BreadCrumbs"
import { useParams,useLocation } from "react-router-dom"
import { useContext } from "react"
import { Context } from "../context/ThemeContext"


const ProductPage:React.FC = () =>{
    const params:string = useParams().name!
    const pathname:string = useLocation().pathname!
    const { productData } = useContext(Context)
    
    const currentId = useParams().id
    const currentProd = productData?.find(product => product.id === currentId)
    console.log(currentProd)
    return(
        <div className="w-full">
            <BreadCrumbs pathObj={{path:pathname, name:params}} />
            <h1 className="text-6xl">PRODUCT PAGE</h1>
        </div>
    )
}

export default ProductPage