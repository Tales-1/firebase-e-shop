import { useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, useOutletContext } from "react-router-dom";
import { auth, db, logout } from "../../../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import Button from "components/Button";
import { Outlet } from "react-router-dom";
import useNotification from "utils/hooks/useNotification";
import DashboardMenu from "./DashboardMenu";
import Spinner from "components/Spinner";
import { removeUser } from "redux/features/userSlice"
import { useAppDispatch } from "redux/store/hooks"

type ContextType = string

const Dashboard:React.FC = () => {
    const [user, loading ] = useAuthState(auth);
    const [name, setName] = useState("");
    const styles = "col-start-1 col-span-3 row-start-3 lg:col-start-2 lg:col-span-2 lg:row-start-2 lg:row-span-2"
    const navigate = useNavigate();
    const notification = useNotification("Successfully Logged out.")
    const dispatch = useAppDispatch()

    const fetchUserName = async () => {
        try {
            const q = query(collection(db,"users"), where("uid","==",user?.uid))
            const doc = await getDocs(q)
            const data = doc.docs[0].data()
            setName(data.name)
         } catch (err) {
            console.error(err)
            alert("An error occured while fetching user data");
        }
    }
    
    useEffect(()=>{
        if(loading) return
        if(!user) return navigate("/profile/login")
        fetchUserName()
    },[user,loading])
    
    if(name === ""){
        return <Spinner styles="w-screen h-screen grid items-center justify-items-center z-50"/>
    }
    return (
        <div className="w-screen h-screen grid items-center justify-center grid-cols-3 grid-rows-4">
            <h1 className="text-center text-xl lg:text-3xl font-bold font-serif tracking-wide col-start-2">Welcome {name}!</h1>
            <DashboardMenu styles="justify-self-center items-center justify-center row-start-2 col-start-1 col-span-3 lg:col-start-1 lg:row-span-2 lg:col-span-1"/>
            
            {/* <div>email: {user?.email}</div> */}
            <Button styles="p-2 row-start-4 col-start-2" func={()=>{
                logout()
                dispatch(removeUser())
                notification()
                }}>Logout</Button>
                
            <Outlet context={styles}/>
        </div>
    )
}

export function useStyles() {
    return useOutletContext<ContextType>()
}
export default Dashboard