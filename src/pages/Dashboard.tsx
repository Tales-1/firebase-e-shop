import { useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import useNotification from "../utils/useNotification";
import Button from "../components/Button";

const Dashboard:React.FC = () => {
    const [user, loading, error] = useAuthState(auth);
    const [name, setName] = useState("");
    const navigate = useNavigate();
    const notification = useNotification("Successfully Logged out.")
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
    
    return (
        <div className="w-screen h-screen grid items-center">
            <h1>Welcome {name}!</h1>
            <div>email: {user?.email}</div>
            <Button styles="p-2" func={()=>{
                logout()
                notification()
                }}>Logout</Button>
        </div>
    )
}

export default Dashboard