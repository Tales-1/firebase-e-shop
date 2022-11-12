
import Logo from "../../../components/header/icons/mibby-logo-black.png"
import { selectCart, selectTotal } from "../../../redux/features/cartSlice"
import { useAppSelector } from "../../../redux/store/hooks"
import { useState,useEffect } from "react"
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom"
import { selectViewport } from "../../../redux/features/screenSlice"

const Checkout:React.FC = () => { 
    const viewport = useAppSelector(selectViewport)
    const { mobile, tablet, desktop } = viewport
    const cart = useAppSelector(selectCart)
    const total = useAppSelector(selectTotal)
    const [visible,setVisible] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()
    const displayCart = cart.map((item, i)=>{
       return ( 
       <li className="flex gap-2" key={i}>
           <div className="w-[4rem] aspect-square bg-sauvignon-cr border-[1px] border-gray grid">
                <img src={item.url?.[0]} alt="product image" className="w-9/12 aspect-square object-cover m-auto" />
            </div>
           <p className="w-1/2">{item.name}</p>
           <span className="1/4">{item.price}</span>
        </li>
        )
    })  
    useEffect(()=>{
        if(location.pathname ==="/checkout"){
            navigate("/checkout/information")
        }
    },[])
    return(
        <div className="flex flex-col lg:flex-row h-full w-5/6 max-w-[95rem] mx-auto lg:mx-0 lg:ml-auto">
            <section className="flex flex-col gap-4 h-full w-3/4">
                <img src={Logo} alt="logo" className="w-36 lg:w-52"/>
                {(mobile || tablet) && 
                    <div className="w-full p-2">
                        <p className="flex justify-around bg-gray-100 cursor-pointer" onClick={()=>{setVisible(prev => !prev)}}>
                            Show Order Summary
                            <span>£{total}</span>
                        </p>

                        <div className="flex flex-col gap-2 mt-1">
                            <ul className={`${visible ? "flex" : "hidden" } flex-col gap-4 transition-all duration-300 origin-top`}>
                                {displayCart}
                            </ul>
                            
                        </div> 

                    </div>}
                <Outlet />
            </section>

            {desktop && 
                    <aside className="pt-[5rem] col-start-2 bg-orange w-full bg-sauvignon-cr pr-24">
                        <ul className="flex flex-col gap-3 w-full max-w-md mx-auto">
                            {displayCart}
                            <li>SUBTOTAL <span>{total}</span></li>
                            <li className="flex gap-2 items-center">Total <small>(incl VAT)</small><span className="ml-auto text-3xl">£{total}</span></li>
                        </ul>
                        
                     </aside> }
        </div>
        
    )
}

export default Checkout