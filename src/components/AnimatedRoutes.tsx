import { Route,Routes,Navigate, useLocation } from "react-router-dom"

//PARENT ROUTES
import ParentRoute from "pages/ParentRoute"
import Protected from "pages/ProtectedPg"
import ProductListPg from "pages/ProductListPg"
import CheckoutPg from "pages/cart/checkout/CheckoutPg"
import ProductPg from "pages/ProductPg"
import LoginPg from "pages/profile/LoginPg"
import CartPg from "pages/cart/CartPg"
import RegisterPg from "pages/profile/RegisterPg"
import ResetPg from "pages/profile/ResetPg"
import ContactPg from "pages/ContactPg"
import DashboardPg from "pages/profile/dashboard/DashboardPg";

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
                      <Route index element={<ProductListPg />} />
                      <Route path=":type" element={<ProductPg />} />
                  </Route>
                  <Route path="contact-us" element={<ContactPg />} />
                  <Route path="cart" element={<CartPg />} />
                  <Route path="profile/dashboard" element={
                        <Protected accessGranted={isLoggedIn}>
                          <DashboardPg />
                        </Protected>}>
                        <Route path="order-history" element={<Orderhistory />}/>
                        <Route path="wishlist" element={<Wishlist />}/>
                        <Route path="account-details" element={<AccountDetails />}/>
                  </Route>

                  <Route path ="login" element={<LoginPg />} />
                  <Route path ="register" element={<RegisterPg />} />
                  <Route path ="reset" element={<ResetPg />} />
                </Route>
                
                <Route path="/checkout" element={<CheckoutPg />}>
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