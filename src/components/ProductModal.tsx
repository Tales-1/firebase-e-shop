import Button from "./Button"

type Props = {
    item:{name:string | undefined, price:number | undefined, urls:string[] | undefined}
}

const ProductModal:React.FC<Props> = ({item}) => { 
    return(
            <div className="fixed inset-0 grid justify-center items-center z-20 before:absolute before:inset-0 before:bg-black before:opacity-30 before:-z-10">
                <article className="grid grid-rows-2 grid-cols-3 gap-3 bg-white items-center">
                <img src={item.urls![0]} alt="" className="row-start-1 row-span-2 object-cover" />
                    <h2>{item.name}</h2>
                    <span className="row-start-2 col-start-2">{item.price}</span>
                    <span className="row-start-2 col-start-3">Qty</span>
                    <div className="flex flex-wrap flex-row gap-3 justify-center row-start-3 col-start-2 col-span-2">
                            <Button styles="py-1 px-2 border-2 border-blue-card rounded-xl">Small</Button>
                            <Button styles="p-1 px-2 border-2 border-blue-card rounded-xl">Medium</Button>
                            <Button styles="p-1 px-2 border-2 border-blue-card rounded-xl">Large</Button>
                            <Button styles="p-1 px-2 border-2 border-blue-card rounded-xl">XL</Button>
                            <Button styles="p-1 px-2 border-2 border-blue-card rounded-xl">XXL</Button>
                        </div>
                </article>
                    
                    {/* <Button styles="row-start-2 col-start-4 place-self-start" func={()=>dispatch(removeFromCart(item))}>Delete item</Button> */}
            </div>
    )
} 

export default ProductModal