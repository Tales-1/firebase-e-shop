import profileIcon from "../icons/profile-icon.png"
import { Link } from "react-router-dom"

const Profile:React.FC = () => { 
    return (
        <Link to="/profile"><img 
            src={profileIcon} 
            className="w-8 mr-3 xl:w-12 xl:mr-5 hover:cursor-pointer"
            alt="profile icon"
            />
        </Link>
    )
}


export default Profile