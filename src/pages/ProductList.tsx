import { useParams, useLocation } from "react-router-dom"
import { ReactNode, useContext, useEffect, useState } from "react"
import ProductCard from "../components/ProductCard"
import SpinnerL from "../utils/SpinnerL"
import BreadCrumbs from "../utils/BreadCrumbs"
import { selectError, selectStatus, selectFiltered, fetchData, filter} from "../redux/features/dataSlice"
import { useAppDispatch, useAppSelector } from "../redux/store/hooks"

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
        if(status === "idle"){
            dispatch(fetchData())
        } else if(status === "fulfilled"){
            dispatch(filter(params))
        }
    },[status,dispatch,params])
    
    console.log("rendered")
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
        <div className="container h-screen min-w-full mt-10">
            <BreadCrumbs pathObj={{path:pathname, name:params}} />
            <h2 className="text-4xl py-6 w-full text-center lg:text-5xl font-serif">{params?.toUpperCase()}</h2>
            <main className="flex flex-col lg:flex-row">
                
                <div className="bg-white mt-5 flex flex-col gap-10 justify-center items-center py-5 md:w-10/12 md:mx-auto md:flex-row md:flex-wrap lg:items-start lg-2:w-8/12  lg:ml-auto lg:mr-20">
                    {status === "loading" ? <SpinnerL /> :  displayItems }    
                </div>
            </main>
        </div>
        
    )
}

export default ProductList