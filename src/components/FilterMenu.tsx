import { useAppSelector } from "../redux/store/hooks"
import { selectViewport } from "../redux/features/screenSlice"

const FilterMenu:React.FC = () => { 
    const viewport = useAppSelector(selectViewport)
    const {mobile,tablet,desktop} = viewport
    const styles = desktop ? "h-80" : "h-fit"

    return (
        <aside className={`w-1/4 bg-sauvignon-cr ${styles}`}>
            <div>sfaf</div>
        </aside>
    )
}


export default FilterMenu