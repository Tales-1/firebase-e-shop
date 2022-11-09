import { useAppSelector, useAppDispatch } from "../redux/store/hooks"
import { selectCart, selectTotal, removeFromCart } from "../redux/features/cartSlice"
import { increment, decrement } from "../redux/features/cartSlice"
import { useNavigate } from "react-router-dom"
import Button from "../components/Button"
import TrashIcon from "../images/trash-bin-icon.png"
import Minus from "../images/collapse-minus-icon.png"
import Plus from "../images/expand-plus-icon.png"
import CartIsEmpty from "../components/CartIsEmpty"


const Checkout:React.FC = () =>{
    const cartItems = useAppSelector(selectCart)
    const total = useAppSelector(selectTotal)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    // function selectRandomItems(){
    //     let items = []
    //     for (let i=0; i < 8; i++){
    //         let randomIndex = Math.floor(Math.random() * 10) +1
    //         items.push(productItems[randomIndex])
    //     }
    //     let displayItems = items.map((item)=>{
    //         return (
    //             <li>
    //                 <img src={item.url![0]} alt="" />
    //             </li>
    //         )
    //     })
    //     return displayItems
    // }
    
    const gridStyles = `grid-rows-[repeat(${cartItems.length},minmax(0,1fr))]`

    const displayCart = cartItems.map((item,i)=>{
        return(<li className="flex flex-col justify-center items-center md:items-start md:grid md:grid-rows-2 md:grid-cols-4 gap-3 border-b-2 pb-3 tracking-wider" key={i}>
                    <h2 className="font-bold font-serif text-lg lg:text-xl">{item.name}</h2>
                    <img src={item.url![0]} alt="" className="row-start-1 row-span-2 object-cover w-28" />
                    <label htmlFor="qty"></label>
                    <div className="flex gap-1 md:row-start-1 md:col-start-4 3/4 h-fit">
                        <Button styles="w-6" func={()=>dispatch(decrement(item))}><img src={Minus} alt="" /></Button>
                        <span className="grid items-center underline underline-offset-4 w-1/2 text-center text-lg lg:text-xl">{item.qty}</span>
                        <Button styles="w-6" func={()=>dispatch(increment(item))}><img src={Plus} alt="" /></Button>
                    </div>
                    <span className="md:row-start-1 md:col-start-5">£{item!.price! * item!.qty!}</span>
                    <Button styles="row-start-2 md:col-start-5 place-self-end font-bold text-red hover:animate-bounce" func={()=>dispatch(removeFromCart(item))}>
                        <img className="w-4 md:w-6" src={TrashIcon} alt="Trash Icon" />
                    </Button>
                </li>)
    })

    return(
        <div className="w-full flex flex-col items-center">
            
            {cartItems.length === 0 ? <CartIsEmpty /> :
            <>
                <header className="w-full p-3 bg-sauvignon-cr">
                    <button onClick={()=>navigate(-1)}>Continue to shopping</button>
                </header>
                <h1 className="font-bold text-5xl font-serif mt-4 mb-6 text-center">Shopping Cart</h1>
                <main className="w-11/12 lg:w-7/12 flex flex-col gap-5 items-center justify-center h-full">
                    <ul className={`grid ${gridStyles} h-11/12 gap-4 w-full bg-white mt-6 p-6 rounded-md`}>
                        {displayCart}
                    </ul> 
            
                
                    <article className="flex flex-col items-end gap-4 w-2/3 lg-2:w-1/4 bg-white mt-6 rounded-md self-end">
                        <h2 className="text-3xl text-end">Order Summary</h2>
                        <p className="font-serif flex gap-2 items-center text-xl">Subtotal:<span className="text-3xl font-bold">£{total}</span></p>
                        <Button styles="text-lg bg-red text-white p-2 font-bold animate-bounce mt-2">Checkout Now</Button>
                    </article> 
                </main>
            </> }
            
        </div>
    )
}

export default Checkout