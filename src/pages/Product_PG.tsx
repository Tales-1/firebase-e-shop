import BreadCrumbs from "utils/BreadCrumbs"
import { useAppSelector, useAppDispatch } from "redux/store/hooks"
import { selectCurrentItem } from "redux/features/dataSlice"
import { addToCart, increment, decrement } from "redux/features/cartSlice"
import { showCart } from "redux/features/screenSlice"
import Button from "components/misc/Button"
import { useState } from "react"
import Minus from "images/collapse-minus-icon.png"
import Plus from "images/expand-plus-icon.png"
import { AnimatePresence, motion } from "framer-motion"
interface ProductObject { 
    id?:string,
    name?:string,
    type?:string,
    price?:number,
    url?:string[]
    description?:string,
    qty?:number
}



const ProductPg:React.FC = () => {
    const currentItem:ProductObject= useAppSelector(selectCurrentItem)
    const dispatch = useAppDispatch()
    const [cartItem,setCartItem] = useState({...currentItem,qty:1})
    const {url, name, description, price} = currentItem

    function changeQty(e:React.MouseEvent){
        if(e.currentTarget.id === "increment"){
           setCartItem(prev =>{
            let copy = {...prev, qty:cartItem.qty + 1}
            return copy
           })
        } else if (e.currentTarget.id ==="decrement"){
            setCartItem(prev =>{
                let copy = {...prev, qty:cartItem.qty - 1}
                return copy
             })
        }
    }
    const variant = {
        hidden:{
            opacity:0,
            
        },
        show:{
            opacity:1,
            transition:{
                duration:.5,
                delay:0.1,
               
            }
        }
    }

    const img = {
        hidden:{
            opacity:0,
            x:-100
        },
        show:{
            opacity:1,
            x:0,
            transition:{
                delay:0.5,
                duration:.6
            }
        },
    }

    const text = {
        hidden:{
            opacity:0,
            x:100,
        },
        show:{
            opacity:1,
            x:0,
            transition:{
                delay:0.5,
                duration:.6
            }
        }
    }

    return(
        <div 
            className="w-full"
            
            >
            <BreadCrumbs  />
                <AnimatePresence>
                <motion.article 
                    className="flex flex-col w-11/12 mx-auto mt-3 gap-3 px-6 py-5 mb-16 md:flex-row lg:gap-8 md:justify-center border-2"
                    variants={variant}
                    initial="hidden"
                    animate="show"
                    exit={{y:"2000px"}}
                    >

                    <motion.div 
                        className="flex w-full lg-2:w-1/2 items-start"
                        variants={img}
                        >
                        <img src={url![0]} alt="current item" className="object-contain w-full aspect-square"/>
                    </motion.div>

                    <motion.div 
                        className="flex flex-col gap-3 lg:items-start lg:gap-10 lg-2:w-1/3"
                        variants={text}
                        >
                        <h1 className="text-2xl lg:text-4xl font-bold font-serif text-center md:text-start">{name}</h1>
                        <span className="text-xl lg:text-2xl font-bold text-center md:text-start">£{price}</span>  

                        <div className="grid gap-5 font-sans-serif mx-auto md:mx-0 md:mr-auto mt-3">
                            <h3 className="lg:text-lg text-center md:text-start">Select Size</h3>         
                            <div className="flex flex-wrap flex-row gap-3">
                                <Button styles="py-1 px-2 border-2 border-blue-card rounded-md">Small</Button>
                                <Button styles="p-1 px-2 border-2 border-blue-card rounded-md">Medium</Button>
                                <Button styles="p-1 px-2 border-2 border-blue-card rounded-md">Large</Button>
                                <Button styles="p-1 px-2 border-2 border-blue-card rounded-md">XL</Button>
                                <Button styles="p-1 px-2 border-2 border-blue-card rounded-md">XXL</Button>
                            </div>
                        </div>

                        <div className="flex flex-col gap-6 w-full items-center my-6 md:flex-row md:gap-4">
                            <div className="flex gap-2 w-1/3 md:w-1/5 justify-center">
                                <button className="w-6" onClick={(e)=>changeQty(e)} id="decrement"><img src={Minus} alt="minus button" /></button>
                                <input 
                                        type="number" 
                                        name="quantity" 
                                        id="quantityInput" 
                                        className="shadow-card w-1/2 p-2 border-2 border-black rounded-md text-center" 
                                        value={cartItem.qty}
                                        onChange={(e) => {
                                        setCartItem((prev) => {
                                            let copy = {...prev, qty:parseFloat(e.target.value)}
                                            return copy
                                        })
                                    }}
                                />
                                <button className="w-6" onClick={(e)=>changeQty(e)} id="increment"><img src={Plus} alt="plus button" /></button>
                            </div>
                            <Button 
                                    styles="w-full md:w-3/4 bg-red p-3 text-xl lg:text-2xl text-white font-bold" 
                                    func={()=>{
                                        dispatch(addToCart(cartItem))
                                        dispatch(showCart())
                                        setCartItem({...currentItem,qty:1})
                                                }}>
                                        ADD TO CART
                            </Button>
                                {/* <p className="aspect-square w-13 bg-blue-400">Fav</p> */}
                        </div>
                                            

                                            
                        <div className="grid gap-3 mt-4 font-sans-serif">
                            <h2 className="text-xl">Description:</h2>
                            <p>{description}</p>
                        </div>
                    </motion.div>
                </motion.article>
                </AnimatePresence>
            
        </div>
    )
}

export default ProductPg