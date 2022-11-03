import BreadCrumbs from "../utils/BreadCrumbs"
import { useParams,useLocation } from "react-router-dom"
import { useAppSelector, useAppDispatch } from "../redux/store/hooks"
import { selectCurrentItem } from "../redux/features/dataSlice"
import Button from "../components/Button"
import { addToCart, selectCart } from "../redux/features/cartSlice"
import SpinnerL from "../utils/SpinnerL"

interface ProductObject { 
    id?:string,
    name?:string,
    type?:string,
    price?:number,
    description?:string,
}



const ProductPage:React.FC = () => {
    const cart = useAppSelector(selectCart)
    const currentItem = useAppSelector(selectCurrentItem)
    const dispatch = useAppDispatch()
    const params:string = useParams().name!
    const pathname:string = useLocation().pathname!
    const {url, name, description, price} = currentItem

   console.log(cart)
    return(
        <div className="w-full">
            <BreadCrumbs pathObj={{path:pathname, name:params}} />
            
            <article className="flex flex-col w-11/12 mx-auto mt-3 gap-3 px-5 py-5 lg:flex-row lg:justify-center border-2">
                <div className="flex w-full lg-2:w-1/2">
                    <img src={url![0]} alt="current item" className="object-contain w-full aspect-square"/>
                </div>

                <div className="flex flex-col gap-3 items-center w-full lg:items-start lg:gap-10 lg-2:w-1/3">
                    <h1 className="text-2xl lg:text-4xl font-bold font-serif">{name}</h1>
                    <span className="text-xl lg:text-2xl">£{price}</span>  
                     
                    <div className="grid gap-4 font-sans-serif">
                        <h3 className="lg:text-lg">Select Size</h3>         
                        <div className="flex flex-wrap flex-row gap-3 justify-center">
                            <Button styles="py-1 px-2 border-2 border-blue-card rounded-xl">Small</Button>
                            <Button styles="p-1 px-2 border-2 border-blue-card rounded-xl">Medium</Button>
                            <Button styles="p-1 px-2 border-2 border-blue-card rounded-xl">Large</Button>
                            <Button styles="p-1 px-2 border-2 border-blue-card rounded-xl">XL</Button>
                            <Button styles="p-1 px-2 border-2 border-blue-card rounded-xl">XXL</Button>
                        </div>
                        <input type="number" name="quantity" id="quantityInput" className="p-1 shadow-card w-20"/>
                    </div>

                    
                    
                    <div className="flex flex-col lg:flex-row gap-3 w-full font-sans-serif mt-4">
                            <Button styles="w-full bg-light-p p-2 text-lg font-bold bg-sauvignon-cr" func={()=>dispatch(addToCart(currentItem))}>Add To Cart</Button>
                            <Button styles="w-full bg-light-p p-2 text-lg font-bold bg-blue-header text-white">Buy Now</Button>
                    </div>
                    <div className="grid gap-3 mt-4 font-sans-serif">
                        <h2 className="text-xl">Description:</h2>
                        <p>{description}</p>
                    </div>
                </div>
                
            </article>
            
        </div>
    )
}

export default ProductPage