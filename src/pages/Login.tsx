import {useState, useEffect} from "react"
import { Link, useNavigate, useLocation } from "react-router-dom"
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../firebase"
import { useAuthState } from "react-firebase-hooks/auth"

const Login:React.FC = () =>{
        const [email, setEmail] = useState("")
        const [password,setPassword] = useState("")
        const [user, loading, error] = useAuthState(auth)
        const inputStyles = "border-2 border-black p-2"
        const navigate = useNavigate()
        const {pathname} = useLocation()
        const path = pathname.split("/")[1]
        console.log(path)

        useEffect(()=>{
            if (loading) {
                // trigger loading screen
                return
            }
            if (user) navigate("/dashboard")
        },[user,loading])
    
        
    return(
        <div className="flex justify-center h-screen bg-dark md:items-center">
            <div className="bg-white p-3 max-w-md w-full max-h-login grid items-center shadow-md h-full">
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
                    <button
                    className="bg-blue-card text-white font-bold p-2 rounded-2xl hover:opacity-70"
                    onClick={() => logInWithEmailAndPassword(email, password)}
                    >
                    Login
                    </button>
                    <button className="bg-red text-white font-bold p-2 rounded-2xl hover:opacity-70" onClick={signInWithGoogle}>
                    Login with Google
                    </button>
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