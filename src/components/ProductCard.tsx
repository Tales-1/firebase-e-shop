import Button from "../components/Button"

type Props = {
    name:string
    price:number
    description:string
    img?:string
}

const ProductCard:React.FC<Props> = ({name,price,description,img}) => { 
    return(
        <article className="flex w-10/12 min-h-card max-w-md shadow-2xl">
            <div className="w-1/2 bg-sauvignon-cr">
                <img src={img} alt="item" />
            </div>

            <div className="w-1/2 bg-blue-card flex flex-col gap-2 p-5 text-white font-sans-serif">
                <h3 className="text-xl font-bold">{name}</h3>
                <p className="font-bold">£{price}</p>
                <p className="text-sm mt-2">{description}</p>
                <Button styles="bg-white text-purple font-bold p-1 text-sm mt-3">ADD TO CART</Button>
            </div>
        </article>
    )
}

export default ProductCard