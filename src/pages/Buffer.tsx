import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import SpinnerL from "../utils/SpinnerL"

const Buffer:React.FC = () => {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate()
    useEffect(()=>{
        if(user) {
            navigate("/profile/dashboard")
        } else { navigate("/profile/login")}
    },[user])
    
    return (
        <div className="h-screen w-screen grid items-center justify-center">
            <SpinnerL />
        </div>  
    )
}


export default Buffer