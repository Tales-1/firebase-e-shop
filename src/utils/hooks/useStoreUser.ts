import { selectUser, storeUser } from "../../redux/features/userSlice";
import { useAppDispatch, useAppSelector } from "../../redux/store/hooks";

interface User { 
    uid:string
    name:string
    authProvider:string,
    email:string
}
const useStoreUser = ( userObj?:any ) => {
    const user = useAppSelector(selectUser)
    let isLoggedIn = user ? true : false
    const dispatch = useAppDispatch()
    function executeDispatch(){
        dispatch(storeUser(userObj))
    }

    return {executeDispatch, isLoggedIn }
}

export default useStoreUser