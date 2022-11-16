import { useLocation, useParams, } from "react-router-dom"
import { ReactNode, useEffect } from "react"
import ProductCard from "components/products/ProductCard"
import Spinner from "components/Spinner"
import BreadCrumbs from "utils/BreadCrumbs"
import { selectStatus, selectFiltered, filter } from "redux/features/dataSlice"
import { useAppDispatch, useAppSelector } from "redux/store/hooks"
import Underline from "images/PngItem_1128059.png"
import SortItems from "components/products/SortProducts"
import { motion } from "framer-motion"
import textBr from "images/text-br.png"

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
            exit={{translateX:"100%" }}>
            <BreadCrumbs />
            <div className="mt-8 w-full grid grid-cols-3 grid-rows-1 items-center justify-center">
                <motion.h1
                     className="text-4.5xl lg:text-5xl font-bold font-serif text-center row-start-1 col-start-1 col-span-3"
                     initial={{y:-30, opacity:0}}
                     animate={{y:0, opacity:1,transition:{duration:0.5, delay:0.7}}}
                     >
                        {params?.toUpperCase()}
                </motion.h1>
                <motion.img 
                    src={textBr} 
                    alt="underline" 
                    className="w-1/5 min-w-[16rem] relative top-[1.3rem] h-[3.5rem] row-start-1 col-start-1 col-span-3 mx-auto -z-10"
                    initial={{scaleX:0}}
                    animate={{scaleX:1, originX:0, transition:{duration:.5,delay:0.4}}}

                    />
            </div>

           {filteredArray.length ? 
            <main className="flex flex-col mt-14 gap-6">
            <SortItems />
                <div className="mt-8 bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-stretch mx-auto justify-items-center md:flex-row md:flex-wrap gap-10 md:w-10/12">
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