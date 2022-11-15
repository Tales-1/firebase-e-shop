import { selectViewport } from "redux/features/screenSlice"
import { useAppSelector ,useAppDispatch} from "redux/store/hooks"
import { sortItems } from "redux/features/dataSlice"

const SortProducts:React.FC = () => { 
    const dispatch = useAppDispatch()
    const viewport = useAppSelector(selectViewport)
    const { innerWidth } = viewport
    const desktopVW = innerWidth > 1200 
    return (
        desktopVW ? 
        <aside className="w-1/5 sticky top-[30%] mx-auto h-fit">
            <ul className="grid gap-6 text-blue-header tracking-wide py-4 border-2 border-black">
                <li className="pl-4 text-xl font-bold border-b-2 border-black pb-2">
                    Sort:
                </li>
                <li className="pl-4 flex font-semibold">
                    <input type="radio" name="filter" id="l-h" className="hidden peer" />
                    <label htmlFor="l-h" className="cursor-pointer block w-full peer-checked:text-blue-header peer-checked:font-bold peer-checked:text-xl" onClick={()=>dispatch(sortItems("LOW_TO_HIGH"))}>
                        Low to High
                    </label>
                </li>
                <li className="pl-4 font-semibold">
                    <input type="radio" name="filter" id="h-l" className="hidden peer" />
                    <label htmlFor="h-l" className="cursor-pointer block w-full peer-checked:text-blue-header peer-checked:font-bold peer-checked:text-xl" onClick={()=>dispatch(sortItems("HIGH_TO_LOW"))}>
                        High to Low
                    </label>
                </li>
                <li className="pl-4 font-semibold">
                    <input type="radio" name="filter" id="a-z" className="hidden peer" />
                    <label htmlFor="a-z" className="cursor-pointer block w-full peer-checked:text-blue-header peer-checked:font-bold peer-checked:text-xl" onClick={()=>dispatch(sortItems("A_TO_Z"))}>
                        Alphabetically A-Z
                    </label>
                </li>
                <li className="pl-4 font-semibold">
                    <input type="radio" name="filter" id="z-a" className="hidden peer"/>
                    <label htmlFor="z-a"  className="cursor-pointer block w-full peer-checked:text-blue-header peer-checked:font-bold peer-checked:text-xl" onClick={()=>dispatch(sortItems("Z_TO_A"))}>
                        Alphabetically Z-A
                    </label>
                </li>
                
            </ul>
        </aside> :
            <div className="flex justify-center md:w-10/12 md:mx-auto">
                <span className="mr-2 p-2 text-gray-800">Sort by: </span>
                <select name="Select-Option" className="bg-gray-100 text-sm p-3" defaultValue="default">
                    <option value="default" disabled hidden>Select</option>
                    <option value="p-low" onClick={()=>dispatch(sortItems("LOW_TO_HIGH"))}>Price, Low-High</option>
                    <option value="p-high" onClick={()=>dispatch(sortItems("HIGH_TO_LOW"))}>Price, High-low</option>
                    <option value="a-z" onClick={()=>dispatch(sortItems("A_TO_Z"))}>Alphabetically A-Z</option>
                    <option value="z-a" onClick={()=>dispatch(sortItems("Z_TO_A"))}>Alphabetically Z-A</option>
                </select>
            </div> 
            
    
    )
}

export default SortProducts