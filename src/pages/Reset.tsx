import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth, sendPasswordReset } from "../firebase";

const Reset:React.FC = () => {
    const [email, setEmail] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    const {pathname} = useLocation()
    const path = pathname.split("/")[1]

    useEffect(() => {
        if (loading) return;
        if (user) navigate("/dashboard");
      }, [user, loading]);
      
    return(
        <div className="flex justify-center h-screen bg-dark md:items-center">
            <div className="bg-white p-6 max-w-md w-full h-fit grid items-center shadow-md rounded-md">
                <div className="flex flex-col gap-4 w-11/12 mx-auto">
                <h1 className="text-start font-sans-serif text-xl">Forgot Password</h1>
                    <form className="flex flex-col gap-5">
                        <input
                            type="text"
                            className="border-2 border-black p-2 rounded-md"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="E-mail Address"
                        />
                    </form>
                <div className="text-center mt-3">
                    <button
                        className="p-3 bg-blue-card font-bold text-white rounded-md"
                        onClick={() => sendPasswordReset(email)}>
                        Send password reset email
                     </button>
                </div>
                <div className="text-center">
                <Link to={`/${path}/register`} className="hover:opacity-80 underline"> Don't have an account? Register now.</Link>
                </div>
            </div>
      </div>
    </div>
    )
}


export default Reset