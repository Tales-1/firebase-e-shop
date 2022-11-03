import {useState, useEffect} from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { Link, useNavigate } from "react-router-dom"
import { useLocation } from "react-router-dom";
import Button from "../components/Button";
import {
    auth,
    registerWithEmailAndPassword,
    signInWithGoogle,
  } from "../firebase";

const Register:React.FC = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [name,setName] = useState("")
    const [user, loading,error] = useAuthState(auth)
    const navigate = useNavigate()
    const {pathname} = useLocation()
    const path = pathname.split("/")[1]
    const inputStyles = "border-2 border-black p-2"
    const register = () => {
        registerWithEmailAndPassword(name,email,password)
    }

    useEffect(()=>{
        if(loading) return
        if(user) navigate("/dashboard")
    },[user, loading])

    return (
        <div className="flex justify-center h-screen bg-dark md:items-center">
            <div className="bg-white p-3 max-w-md w-full h-full max-h-login grid items-center shadow-md">
            <div className="flex flex-col gap-4 w-11/12 mx-auto">
            <h1 className="text-start font-sans-serif text-xl">Register</h1>
                <form className="flex flex-col gap-5">
                    <input
                    type="text"
                    className={inputStyles}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full Name"
                    required
                    />
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
                <Button styles="bg-blue-card text-white font-bold p-2 rounded-2xl hover:opacity-70" func={register}>
                        Register
                    </Button>
                    <Button
                    styles="bg-red text-white font-bold p-2 rounded-2xl hover:opacity-70"
                    func={signInWithGoogle}
                    >
                    Register with Google
                    </Button>
            <div className="text-center mt-3">
            <Link to={`/${path}`} className="hover:text-blue-500 underline">Already have an account? Login now.</Link>
            </div>
            </div>
      </div>
    </div>
    )
}


export default Register