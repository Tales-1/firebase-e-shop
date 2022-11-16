import { useLocation, useParams, } from "react-router-dom"
import { ReactNode, useEffect } from "react"
import ProductCard from "components/products/ProductCard"
import Spinner from "utils/Spinner"
import BreadCrumbs from "utils/BreadCrumbs"
import { selectStatus, selectFiltered, filter } from "redux/features/dataSlice"
import { useAppDispatch, useAppSelector } from "redux/store/hooks"
import Underline from "images/PngItem_1128059.png"
import SortItems from "components/products/SortProducts"
import { motion } from "framer-motion"


interface ProductObject { 
    id?:string,
    name?:string,
    type?:string,
    price?:number,
    description?:string
    url?:string[]
}
const ProductListPg:React.FC = () =>{
    const filteredArray = useAppSelector(selectFiltered)
    const status = useAppSelector(selectStatus)
    const params:string = useParams().name!
    const dispatch = useAppDispatch()
    
    useEffect(()=>{
        if(status === "fulfilled"){
            dispatch(filter(params))
        }
    },[status,dispatch,params])
    
    
    const displayItems:ReactNode = filteredArray.map((product:ProductObject,i)=>{
            const { name,price,id,url } = product
        
            return (<ProductCard 
                        key={i}
                        name={name}
                        price={price} 
                        urls={url}
                        id={id}
                    />)
        
    })
    
    return(
        <motion.div 
            className="container h-fit min-w-full mb-16"
            initial={{ opacity:0,y:-50}}
            animate={{ opacity:1, y:0,transition:{duration:1}}}
            
            exit={{translateX:"100%",  }}
            
        >
            <BreadCrumbs />
            <div className="mt-8 w-full grid grid-cols-3 grid-rows-2 items-center justify-center">
                <h1 className="text-4.5xl lg:text-5xl font-bold font-serif text-center row-start-1 col-start-1 col-span-3">{params?.toUpperCase()}</h1>
                <img src={Underline} alt="underline" className="w-2/5 min-w-[10rem] max-w-[14rem] row-start-2 col-start-1 col-span-3 mx-auto"/>
            </div>
           {filteredArray.length ? 
            <main className="flex flex-col lg-2:flex-row mt-6 gap-6">
            <SortItems />
                <div className="bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-stretch mx-auto justify-items-center md:flex-row md:flex-wrap gap-10 md:w-10/12 lg-2:w-8/12 lg:ml-auto lg:mr-20">
                    {status === "loading" ? <Spinner /> :  displayItems }    
                </div>
            </main> : 
                <div className="h-[50vh] w-screen bg-white grid items-center">
                    <h2 className="text-center text-2xl">Coming Soon...</h2>
                </div>
            }
        </motion.div>
        
    )
}

export default ProductListPg       