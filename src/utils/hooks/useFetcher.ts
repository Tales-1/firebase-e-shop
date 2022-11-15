import { useAppDispatch, useAppSelector } from "../../redux/store/hooks"
import { selectStatus, fetchData } from "../../redux/features/dataSlice"

const useFetcher = () => {
    const dispatch = useAppDispatch()
    const status = useAppSelector(selectStatus)
    function fetch(){
        dispatch(fetchData())
    }
    
    return {status, fetch,dispatch}
}

export default useFetcher