import React, { useState } from "react"
import { Link } from "react-router-dom"
import emptyShoppingBag from "../icons/bag-empty.png"
import fullShoppingBag from "../icons/bag-fill.png"

const ShoppingBag: React.FC = () => { 
    const [isEmpty,setIsEmpty] = useState(false)
    
    // function fillCart(){
    //     setIsEmpty(prevEmpty => !prevEmpty)
    // }
     const shoppingBag = !isEmpty ? emptyShoppingBag : fullShoppingBag

    return(
        <Link to="/checkout">
            <img 
            src={shoppingBag} 
            className="w-7 align-middle hover:cursor-pointer md:w-7 xl:w-10"
            alt={"shopping bag"} />
        </Link>
    )
}


export default ShoppingBag