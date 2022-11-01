import kurtaOne from "../images/Kurta-1.jpeg"
import { useAppSelector, useAppDispatch } from "../redux/store/hooks"
import { selectCart, selectTotal, removeFromCart } from "../redux/features/cartSlice"
import Button from "../components/Button"
const Checkout:React.FC = () =>{
    const cartItems = useAppSelector(selectCart)
    const total = useAppSelector(selectTotal)
    const dispatch = useAppDispatch()

    const gridStyles = `grid-rows-[repeat(${cartItems.length},minmax(0,1fr))]`

    const displayCart = cartItems.map((item,i)=>{
        return(<li className="grid grid-rows-2 grid-cols-4 gap-3" key={i}>
                        <img src={item.url![0]} alt="" className="row-start-1 row-span-2 object-cover" />
                        <h2>{item.name}</h2>
                        <span className="row-start-2 col-start-2">{item.price}</span>
                        <span className="row-start-2 col-start-3">Qty</span>
                        <Button styles="row-start-2 col-start-4 place-self-start" func={()=>dispatch(removeFromCart(item))}>Delete item</Button>
                    </li>)
    })

    return(
        <div className="w-full mt-12 flex flex-col items-center gap-12 bg-dark h-screen">
            <main className="w-11/12 flex flex-col gap-5 lg-2:flex-row items-center justify-center">
                <ul className={`grid gap-3 ${gridStyles} overflow-scroll max-w-3xl  bg-white mt-6 p-6`}>
                       {cartItems.length === 0 ? "Cart is empty" : displayCart}
                </ul>

                { cartItems.length !== 0 ? 
                    <article className="flex flex-col items-center gap-3 shadow-lg p-5 lg-2:self-start w-1/3 bg-white mt-6">
                        <h2 className="text-3xl">Order Summary</h2>
                        <p className="text-xl">Total: £{total}</p>
                        <Button styles="text-lg bg-red text-white p-2 font-bold">Checkout Now</Button>
                    </article> 
                :  null }
                
            </main>
        </div>
    )
}

export default Checkout