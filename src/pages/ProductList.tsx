import { useParams, useLocation } from "react-router-dom"
import { ReactNode, useContext, useEffect, useState } from "react"
import ProductCard from "../components/ProductCard"
import SpinnerL from "../utils/SpinnerL"
import BreadCrumbs from "../utils/BreadCrumbs"
import { selectError, selectStatus, selectFiltered, fetchData, filter} from "../redux/features/dataSlice"
import { useAppDispatch, useAppSelector } from "../redux/store/hooks"
import Underline from "../images/PngItem_1128059.png"
interface ProductObject { 
    id?:string,
    name?:string,
    type?:string,
    price?:number,
    description?:string
    url?:string[]
}
const ProductList:React.FC = () =>{
    const filteredArray = useAppSelector(selectFiltered)
    const status = useAppSelector(selectStatus)
    const error = useAppSelector(selectError)
    const params:string = useParams().name!
    const dispatch = useAppDispatch()
    
    useEffect(()=>{
        if(status === "fulfilled"){
            dispatch(filter(params))
        }
    },[status,dispatch,params])
    
    const pathname = useLocation().pathname
    
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
        <div className="container h-screen min-w-full">
            <BreadCrumbs pathObj={{path:pathname, name:params}} />
            <div className="mt-8 w-full grid grid-cols-3 grid-rows-2 items-center justify-center">
                <h1 className="text-4.5xl lg:text-5xl font-serif text-center row-start-1 col-start-1 col-span-3">{params?.toUpperCase()}</h1>
                <img src={Underline} alt="underline" className="w-2/5 min-w-[10rem] max-w-[14rem] row-start-2 col-start-1 col-span-3 mx-auto"/>
            </div>
            
            <main className="flex flex-col lg:flex-row">
                <div className="bg-white mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-stretch mx-auto justify-items-center md:flex-row md:flex-wrap gap-10 py-5 md:w-10/12 lg-2:w-8/12  lg:ml-auto lg:mr-20">
                    {status === "loading" ? <SpinnerL /> :  displayItems }    
                </div>
            </main>
        </div>
        
    )
}

export default ProductList          