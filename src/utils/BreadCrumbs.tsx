import { useLocation, useNavigate, Link, useNavigationType } from "react-router-dom";

type Props = {
    pathObj?: {
        path:string 
        name:string 
    }
}

interface Route {
    name:string
    path:string 
}

const BreadCrumbs:React.FC<Props> = ({pathObj}) => { 
    const navigate = useNavigate()
    const routes:Route[] = [
        {   
            name:"Home",
            path:"/"
                    },
        { 
            name:"collection",
            path:"/collection"
        },    
    ]
    if(pathObj !== undefined) {routes.push(pathObj)}
   
    const displayLinks = routes.map((route,index) => ( 
        <Link key={index} to={route.path}> - {route.name} --</Link>
    ))
    console.log(routes)
    return(
        <nav className="w-full flex p-5 bg-sauvignon-cr flex justify-center">
                {displayLinks}
        </nav>
    )
}

export default BreadCrumbs

 