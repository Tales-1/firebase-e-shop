import Button from "components/misc/Button"
import priceTag from "../header/icons/red-label-two.png"
import { Link, useLocation } from "react-router-dom"
import { useAppDispatch } from "redux/store/hooks"
import { findCurrent } from "redux/features/dataSlice"
import ProductModal from "./ProductModal"
import {useState} from "react"

type Props = {
    name:string | undefined
    price:number | undefined
    urls?:string[] | undefined
    id?:string | undefined
}


const ProductCard:React.FC<Props> = ({name,price,urls,id}) => { 
    const { pathname } = useLocation()
    const dispatch = useAppDispatch()
    const [visible, setVisible] = useState(false)
    return(
        <article className="min-h-card w-full max-w-[17rem] rounded-lg flex flex-col items-center gap-2 hover:scale-105 transition-all">
            <div className="grid relative shadow-lg h-full w-full">
                <Link to={`${pathname}/${name?.split(" ").join("-")}`} className="row-start-1 col-start-1" onClick={()=>dispatch(findCurrent(id))}>
                    <img className="rounded-md max-h-card h-full w-full object-cover" src={urls?.[0]} alt="item" />
                </Link>

                <Button 
                    styles="bg-blue-card text-white p-3 text-sm mt-3 mt-auto row-start-1 col-start-1 tracking-widest font-bold"
                    func={ () => setVisible(true) }
                    >
                    ADD TO CART
                </Button>
                {visible ? <ProductModal item={{name,price,urls}} /> : null}
                
                <div className="absolute grid row-start-1 col-start-1 text-lg w-fit h-fit -right-10">
                   <img className="w-24 row-start-1 col-start-1 rotate-" src={priceTag} alt="price tag" />
                    <p className="row-start-1 col-start-1 mt-8 ml-4 rotate-[41deg] text-white font-bold">£{price}</p>
                </div>
            </div>
            <h3 className="text-lg md:text-xl font-bold font-serif">{name}</h3>
            
        </article>
    )
}

export default ProductCard