import {useState, useEffect} from "react"
import SpinnerL from "../../utils/SpinnerL"
import { Link, useNavigate, useLocation } from "react-router-dom"
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../../firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import useNotification  from "../../utils/useNotification"

import Button from "../../components/Button"

const Login:React.FC = () =>{
    const [email, setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [user, loading, error] = useAuthState(auth)
    const inputStyles = "border-2 border-black p-2 rounded-md"
    const notification = useNotification("Successfully Logged In!")
    const navigate = useNavigate()
    const {pathname} = useLocation()
    const path = pathname.split("/")[1]

    useEffect(()=>{
        if (loading) {
            // trigger loading screen
            return
        }
        if (user) {
            navigate("/profile/dashboard")
            notification()
        }
    },[user,loading])
    
    return(
        <div className="flex justify-center h-screen bg-dark md:items-center">
            {loading && <SpinnerL />}
            <div className="bg-white p-3 max-w-md w-full max-h-login grid items-center shadow-md h-full rounded-md">
                <div className="flex flex-col gap-4 w-11/12 mx-auto">
                    <h1 className="text-start font-sans-serif text-xl">Sign In</h1>
                    <form className="flex flex-col gap-4">
                    <input
                        type="text"
                        className={inputStyles}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="E-mail Address"
                        required
                    />
                    <input
                        type="password"
                        className={inputStyles}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                    />
                    
                    </form>
                    <Button
                        styles="bg-blue-card text-white font-bold p-2 rounded-md hover:opacity-70"
                        func={() => logInWithEmailAndPassword(email, password)}
                    >
                    Login
                    </Button>
                    <Button styles="bg-red text-white font-bold p-2 rounded-md hover:opacity-70" func={signInWithGoogle}>
                    Login with Google
                    </Button>

                <div className="mt-3">
                    <Link to={`/${path}/reset`}>Forgot Password?</Link>
                </div>
                <div>
                    Don't have an account? <Link to={`/${path}/register`} className="hover:text-blue-500 underline">Register</Link> now!
                </div>
                </div>
            </div>
        </div>
    )
}

export default Login