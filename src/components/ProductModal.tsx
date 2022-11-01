import Button from "./Button"

type Props = {
    item:{name:string | undefined, price:number | undefined, urls:string | undefined}
}

const ProductModal:React.FC<Props> = ({item}) => { 

    return(
        <div className="inset-0 bg-dark">
            <article className="grid grid-rows-2 grid-cols-4 gap-3 fixed z-10 ">
                    <img src={item.urls} alt="" className="row-start-1 row-span-2 object-cover" />
                    <h2>{item.name}</h2>
                    <span className="row-start-2 col-start-2">{item.price}</span>
                    <span className="row-start-2 col-start-3">Qty</span>
                    {/* <Button styles="row-start-2 col-start-4 place-self-start" func={()=>dispatch(removeFromCart(item))}>Delete item</Button> */}
            </article>
        </div>
    )
} 

export default ProductModal