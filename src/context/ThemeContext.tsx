import React, {useState,useEffect,createContext} from "react"
import dataArray from "../data"


// TYPESCRIPT CONTEXT OBJECT ERROR WHEN PASSING IT TO HERO.TSX
interface ViewportSizes { 
    viewportSizes?:{
                mobile?:boolean | undefined
                tablet?:boolean | undefined
                desktop?:boolean | undefined
            }
}

interface ContextObject extends ViewportSizes{
    innerWidth?:number
    overlayStyles?:string
    data?:Object[]
}

type Props = { 
    children:React.ReactNode
}


const Context = createContext<ContextObject>({})
const {Provider} = Context

const ContextProvider: React.FC<Props> = ({children}):JSX.Element => {
    const data = dataArray
    const [innerWidth,setInnerWidth] = useState(window.innerWidth)
    const overlayStyles = "before:absolute before:inset-0 before:bg-black before:opacity-40"
    useEffect(()=>{
        window.addEventListener("resize",()=>setInnerWidth(window.innerWidth))

        return () => {
            window.removeEventListener("resize", ()=>setInnerWidth(window.innerWidth))
        }
    },[])

    const viewportSizes = {
        mobile:innerWidth < 768,
        tablet:innerWidth > 768 && innerWidth < 1030,
        desktop:innerWidth > 1030
    }
    
    return(
        <Provider value = {{viewportSizes,innerWidth,overlayStyles,data}}>
            {children}
        </Provider>
    )
}

export {ContextProvider, Context}
