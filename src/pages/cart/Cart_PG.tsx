import { useAppSelector, useAppDispatch } from "redux/store/hooks"
import { selectCart, selectTotal } from "redux/features/cartSlice"
import { selectViewport } from "redux/features/screenSlice"
import { useNavigate } from "react-router-dom"
import CartIsEmpty from "./CartEmpty_PG"
import MobileCheckoutBar from "components/cart/MobileCheckoutBar"
import DisplayCartItems from "components/cart/DisplayCartItems"
import Button from "components/misc/Button"
import { Link } from "react-router-dom"
import Underline from "images/PngItem_1128059.png"
import { motion } from "framer-motion"
const Checkout:React.FC = () =>{
    const viewport = useAppSelector(selectViewport)
    const total = useAppSelector(selectTotal)
    const { mobile, tablet,  desktop } = viewport
    const cartItems = useAppSelector(selectCart)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const gridStyles = `grid-rows-[repeat(${cartItems.length},minmax(0,1fr))]`
    const variant = {
        hidden:{
            transform:"scale(0)"
        },
        show:{
            transform:"scale(1)",
            transition:{
                duration:.5,
                delay:0.1,
                type:"spring",
                stiffness:100
            }
        }
    }
    return(
        <motion.div 
            className="w-full bg-dark"
            variants={variant}
            initial="hidden"
            animate="show"
            >
            
            {cartItems.length === 0 ? <CartIsEmpty /> :
            <div className="w-full lg:w-3/4 lg:mx-auto flex flex-col items-center bg-white">
                <header className="w-full p-3 bg-sauvignon-cr">
                    <button onClick={()=>navigate(-1)}>Continue to shopping</button>
                </header>
                <div className="mt-8 w-full grid grid-cols-3 grid-rows-2 items-center justify-center">
                    <h1 className="font-bold text-5xl font-serif mt-4 text-center col-start-2">Shopping Cart</h1>
                    <img src={Underline} alt="underline" className="w-2/5 min-w-[10rem] max-w-[20rem] row-start-2 col-start-1 col-span-3 mx-auto"/>
                </div>
                
                <main className="flex justify-center w-11/12 lg:justify-between lg:w-10/12 gap-5 h-full my-16">
                    <ul className={`grid ${gridStyles} h-11/12 gap-4 w-1/2 bg-white rounded-md border-4 border-sauvignon-cr p-4`}>
                        <DisplayCartItems location="CART" />
                    </ul> 
            
                
                    {desktop && 
                    <div className="sticky top-[14rem] self-start ml-auto border-4 border-sauvignon-cr p-6 ">
                        <article className="flex flex-col items-center gap-4 bg-white rounded-md">
                            <h2 className="text-3xl">Order Summary</h2>
                            <p className="font-serif flex gap-2 items-center text-xl">Subtotal:<span className="text-3xl font-bold">£{total}</span></p>
                            <Link to="/checkout">
                                <Button styles="text-lg bg-red text-white p-2 font-bold animate-bounce mt-2">Checkout Now</Button>
                            </Link>
                        </article>
                    </div>}
                    
                    <div className="h-10"></div>
                </main>
                {(mobile || tablet) && <MobileCheckoutBar total={total}/>}
            </div> }
            
        </motion.div>
    )
}

export default Checkout