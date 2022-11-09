import { useAppSelector, useAppDispatch } from "../redux/store/hooks"
import { selectCart, selectTotal, removeFromCart, increment, decrement } from "../redux/features/cartSlice"
import { selectTranslateCart, hideCart, selectOverlay } from "../redux/features/screenSlice"
import TrashIcon from "../images/trash-bin-icon.png"
import Button from "./Button"
import Minus from "../images/collapse-minus-icon.png"
import Plus from "../images/expand-plus-icon.png"
import { useNavigate } from "react-router-dom"


const SlidingCartMenu:React.FC = () => {
    const dispatch = useAppDispatch()
    const total = useAppSelector(selectTotal)
    const cartItems = useAppSelector(selectCart)
    const translate = useAppSelector(selectTranslateCart)
    const gridStyles = `grid-rows-[repeat(${cartItems.length},minmax(0,1fr))]`
    const navigate = useNavigate()

    const displayCart = cartItems.map((item, i) => {
        return (
            <li className="grid grid-rows-3 grid-cols-4 text-base gap-3" key={i}>
                <img src={item!.url![0]} alt="cart item"  className="object-cover row-start-1 row-span-3 h-full"/>
                <h4 className="col-start-2 col-span-2">{item.name}</h4>
                <span className="row-start-2 col-start-2">{item.price}</span>
                <div className="flex col-start-3 row-start-2 gap-1 h-fit">
                    <Button styles="w-6" func={()=>dispatch(decrement(item))}><img src={Minus} alt="minus button" /></Button>
                    <span className="grid items-center underline underline-offset-4 w-1/2 text-center">{item.qty}</span>
                    <Button styles="w-6" func={()=>dispatch(increment(item))}><img src={Plus} alt="plus button" /></Button>
                </div>
                <Button styles="row-start-3 col-start-4 place-self-end font-bold text-red hover:animate-bounce" func={(()=>dispatch(removeFromCart(item)))}>
                        <img className="w-4 md:w-6" src={TrashIcon} alt="Trash Icon" />
                </Button>
            </li>
        )
    })
    return (
        <aside className={`h-full w-11/12 max-w-md fixed top-0 right-0 pr-3 
                            flex flex-col gap-6 items-center bg-white 
                            transition:all duration-500 ease-in-out ${translate} z-50 shadow-lg
                            `}>

            <h1 className="font-serif text-3xl mt-5 border-b-2 pb-3 border-gray w-11/12">Cart Items </h1>
            <Button styles="absolute top-6 right-5 font-bold" func={()=>dispatch(hideCart())}> X </Button>
            <ul className={`grid ${gridStyles} gap-3 text-xl font-sans-serif w-11/12 my-4`}>
              {displayCart}
            </ul>
            {cartItems.length !== 0 ? <footer className="grid gap-3 grid-cols-3 w-11/12 border-t-2 border-gray font-serif text-xl pt-3">
                <span className="">Subtotal</span>
                <span className="font-bold col-start-3 justify-self-end">£{total}</span>
                
                <Button 
                    styles="bg-red text-white p-2 font-extrabold tracking-widest col-span-3 text-2xl"
                    func={()=>{
                        dispatch(hideCart())
                        navigate("/checkout")
                    }}
                        >
                    View Bag
                </Button>
            </footer> : <h1>Cart is Empty</h1>}
            
            
        </aside>
    )
}


export default SlidingCartMenu