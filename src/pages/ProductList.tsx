import { useParams, useLocation } from "react-router-dom"
import { ReactNode, useContext, useEffect, useState } from "react"
import ProductCard from "../components/ProductCard"
import kurtaOne from "../images/Kurta-9.jpeg"
import SpinnerL from "../utils/SpinnerL"
import BreadCrumbs from "../utils/BreadCrumbs"
import { selectData, selectError, selectStatus, selectFiltered, fetchData, filter} from "../redux/features/dataSlice"
import {useAppDispatch, useAppSelector } from "../redux/store/hooks"

interface ProductObject { 
    id?:string,
    name?:string,
    type?:string,
    price?:number,
    description?:string,
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
    
    const displayItems:ReactNode = filteredArray.map((product,i)=>{
            const { name,price,id,url } = product
            return (<ProductCard 
                        key={i}
                        name={name}
                        price={price} 
                        urls={url![0]}
                        id={id}
                    />)
        
    })

    return(
        <div className="container h-screen min-w-full">
            <BreadCrumbs pathObj={{path:pathname, name:params}} />
            <h2 className="text-4xl py-6 w-full text-center lg:text-5xl font-serif">{params?.toUpperCase()}</h2>
            <div className="bg-white mt-5 flex flex-col gap-10 justify-center items-center py-5 overflow-scroll md:overflow-none md:w-9/12 md:mx-auto lg:flex-row lg:flex-wrap lg:items-start lg-2:w-8/12 lg-2:justify-start lg:ml-auto lg:mr-0">
                {status === "loading" ? <SpinnerL /> :  displayItems }    
            </div>
            
        </div>
        
    )
}

export default ProductList