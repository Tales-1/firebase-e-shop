import { useLocation } from "react-router-dom"
import {Route,Routes,Navigate} from "react-router-dom"
import {AnimatePresence} from "framer-motion"
//PARENT ROUTES

import ParentRoute from "pages/ParentRoute";
import Protected from "pages/Protected_PG";
import ProductList_PG from "pages/ProductList_PG";
import Checkout_PG from "pages/cart/checkout/Checkout_PG";
import Product_PG from "pages/Product_PG";
import Login_PG from "pages/profile/Login_PG";
import Cart_PG from "pages/cart/Cart_PG";
import Register_PG from "pages/profile/Register_PG";
import Reset_PG from "pages/profile/Reset_PG"
import Contact_PG from "pages/Contact_PG";
import Dashboard_PG from "pages/profile/dashboard/Dashboard_PG";

// SUB-ROUTE COMPONENTS
import Orderhistory from "pages/profile/dashboard/sub-routes/Orderhistory";
import Wishlist from "pages/profile/dashboard/sub-routes/Wishlist";
import AccountDetails from "pages/profile/dashboard/sub-routes/AccountDetails";
import Delivery from "pages/cart/checkout/sub-routes/Delivery";
import Information from "pages/cart/checkout/sub-routes/Information";
import Payment from "pages/cart/checkout/sub-routes/Payment";
import Review from "pages/cart/checkout/sub-routes/Review";
type Props = {
    isLoggedIn:boolean
}

const AnimatedRoutes:React.FC<Props> = ({isLoggedIn}) => { 
    const location = useLocation()
    
    return (
            <Routes location={location} key={location.pathname}>
                <Route path ="/" element={<ParentRoute />}>
                  <Route path="collection/:name">
                      <Route index element={<ProductList_PG />} />
                      <Route path=":type" element={<Product_PG />} />
                  </Route>
                  <Route path="contact-us" element={<Contact_PG />} />
                  <Route path="cart" element={<Cart_PG />} />
                  <Route path="profile/dashboard" element={
                        <Protected accessGranted={isLoggedIn}>
                          <Dashboard_PG />
                        </Protected>}>
                        <Route path="order-history" element={<Orderhistory />}/>
                        <Route path="wishlist" element={<Wishlist />}/>
                        <Route path="account-details" element={<AccountDetails />}/>
                  </Route>

                  <Route path ="login" element={<Login_PG />} />
                  <Route path ="register" element={<Register_PG />} />
                  <Route path ="reset" element={<Reset_PG />} />
                </Route>
                
                <Route path="/checkout" element={<Checkout_PG />}>
                  <Route path="information" element={<Information />} />
                  <Route path="delivery" element={<Delivery />}/>
                  <Route path="payment" element={<Payment />}/>
                  <Route path="review" element={<Review />}/>
                </Route>
                
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        
    )
}
export default AnimatedRoutes