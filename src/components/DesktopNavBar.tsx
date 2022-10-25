import React from "react";
import  {Link } from "react-router-dom" 
import menuNames from "./header/menuNames";
import { Context } from "../context/ThemeContext";
import { useContext } from "react"

type ContextObject = any

 const DesktopNavBar: React.FC = () => { 
    const {viewportSizes} = useContext<ContextObject>(Context)
    const {tablet,desktop} = viewportSizes
    const displayMenu:JSX.Element[] = menuNames.map((item,i) => <li className="text-base xl:text-lg xl:tracking-wide" key={i}><Link to={item.url}>{item.name}</Link></li>)

     return(
       (tablet || desktop) && 
        <div className="w-screen">
                <ul className="flex justify-center text-xs gap-16 py-4 lg-2:gap-40 ">
                    {displayMenu}
                </ul>
        </div>
     )
 }

 export default DesktopNavBar