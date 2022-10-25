import React, {useState,useEffect,createContext} from "react"

import useFetcher from "../useFetcher"

// TYPESCRIPT CONTEXT OBJECT ERROR WHEN PASSING IT TO HERO.TSX
interface ViewportSizes { 
    viewportSizes?:{
                mobile?:boolean
                tablet?:boolean
                desktop?:boolean
            }
}

interface ProductObject { 
    id?:string,
    name?:string,
    type?:string,
    price?:number,
    description?:string,
}

interface ContextObject extends ViewportSizes{
    innerWidth?:number
    overlayStyles?:string
    productData?:Array<ProductObject>
}




type Props = { 
    children:React.ReactNode
}


const Context = createContext<ContextObject>({})
const { Provider } = Context

const ContextProvider: React.FC<Props> = ({children}):JSX.Element => {
    const { data } = useFetcher()
    const [innerWidth,setInnerWidth] = useState(window.innerWidth)
    const [productData,setProductData] = useState<ProductObject[]>([{}])

    const overlayStyles = "before:absolute before:inset-0 before:bg-black before:opacity-40"
    useEffect(()=>{
        window.addEventListener("resize",()=>setInnerWidth(window.innerWidth))
        
        return () => {
            window.removeEventListener("resize", ()=>setInnerWidth(window.innerWidth))
        }
    },[])

    useEffect(()=>{
        setProductData(data)
       
    },[data])

    const viewportSizes = {
        mobile:innerWidth < 768,
        tablet:innerWidth > 768 && innerWidth < 1030,
        desktop:innerWidth > 1030
    }
    
    return(
        <Provider value = {{viewportSizes,innerWidth,overlayStyles,productData}}>
            {children}
        </Provider>
    )
}

export {ContextProvider, Context}
