import { Link } from "react-router-dom"

const Information:React.FC = () => {
    return ( 
        <div className="mt-2 grid gap-5 w-full justify-items-center">
                    <h2 className="lg:justify-self-start">Delivery Address</h2>
                    <form className="grid gap-3 w-11/12 max-w-[34rem] rows-9 grid-cols-2 lg:mr-auto">
                        <select name="Countries">
                            <option>England</option>
                            <option>Wales</option>
                            <option>Scotland</option>
                            <option>Northern Ireland</option>
                        </select>
                        <input type="text" className="border-2 border-gray-600 p-2 col-span-2 md:col-start-1 md:col-span-1 md:row-start-2" placeholder="First Name" required/>
                        <input type="text" className="border-2 border-gray-600 p-2 col-span-2 md:col-start-2 md:col-span-1 md:row-start-2" placeholder="Last Name" required/>
                        <input type="text" className="border-2 border-gray-600 p-2 col-span-2" placeholder="Address" required />
                        <input type="text" className="border-2 border-gray-600 p-2 col-span-2" placeholder="Apartment, suite, etc. (optional)"/>
                        <input type="text" className="border-2 border-gray-600 p-2 col-span-2" placeholder="Town or City" required/>
                        <input type="text" className="border-2 border-gray-600 p-2 col-span-2" placeholder="Postcode" required/>
                        <input type="text" className="border-2 border-gray-600 p-2 col-span-2" placeholder="Phone (optional)"/>
                        
                        <button className="bg-blue-header justify-self-center md:justify-self-end p-3 text-white font-bold col-start-1 col-span-2">
                            <Link to="/checkout/delivery"> Continue to Delivery</Link>
                        </button>
                    </form>
            </div>
    )
}

export default Information