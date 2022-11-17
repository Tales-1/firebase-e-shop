import { Route,Routes,Navigate, useLocation } from "react-router-dom"
import { lazy, Suspense } from "react"
//PARENT ROUTES
import ParentRoute from "pages/ParentRoute"
import ProductPg from "pages/ProductPg"
import LoginPg from "pages/profile/LoginPg"
import RegisterPg from "pages/profile/RegisterPg"
import ResetPg from "pages/profile/ResetPg"
// SUB-ROUTE COMPONENTS
import Orderhistory from "pages/profile/dashboard/sub-routes/Orderhistory";
import Wishlist from "pages/profile/dashboard/sub-routes/Wishlist";
import AccountDetails from "pages/profile/dashboard/sub-routes/AccountDetails";
import Spinner from "components/Spinner"

const LazyProductListPg = lazy(() => import("pages/ProductListPg"))
const LazyProtectedPg = lazy(() => import("pages/ProtectedPg"))
const LazyCartPg = lazy(() => import("pages/cart/CartPg"))
const LazyContactPg = lazy(() => import("pages/ContactPg"))
const LazyDashboardPg = lazy(() => import("pages/profile/dashboard/DashboardPg"))
const LazyCheckoutPg = lazy(() => import("pages/cart/checkout/CheckoutPg"))
const LazyDelivery = lazy(() => import("pages/cart/checkout/sub-routes/Delivery"))
const LazyInformation = lazy(() => import("pages/cart/checkout/sub-routes/Information"))
const LazyPayment = lazy(() => import("pages/cart/checkout/sub-routes/Payment"))
const LazyReview = lazy(() => import("pages/cart/checkout/sub-routes/Review"))

type Props = {
    isLoggedIn:boolean
}

const AnimatedRoutes:React.FC<Props> = ({isLoggedIn}) => { 
    const location = useLocation()
    
    return (
            <Routes location={location} key={location.pathname}>
                <Route path ="/" element={<ParentRoute />}>
                  <Route path="collection/:name">
                      <Route index 
                           element={<Suspense fallback={<Spinner />}>
                                  <LazyProductListPg />
                              </Suspense>} 
                      />
                      <Route path=":type" element={<ProductPg />} />
                  </Route>

                  <Route path="contact-us" 
                        element={ <Suspense fallback={<Spinner />}>
                              <LazyContactPg />
                            </Suspense>
                  }/>

                  <Route path="cart" 
                        element={<Suspense fallback={<Spinner />}>
                                    <LazyCartPg />
                                  </Suspense>
                        } />

                  <Route path="profile/dashboard" element={
                    <Suspense fallback={<Spinner />}>
                        <LazyProtectedPg accessGranted={isLoggedIn}>
                          <LazyDashboardPg />
                        </LazyProtectedPg>
                    </Suspense>}>

                        <Route path="order-history" element={<Orderhistory />}/>
                        <Route path="wishlist" element={<Wishlist />}/>
                        <Route path="account-details" element={<AccountDetails />}/>
                  </Route>

                  <Route path ="login" element={<LoginPg />} />
                  <Route path ="register" element={<RegisterPg />} />
                  <Route path ="reset" element={<ResetPg />} />
                </Route>
                
                <Route path="/checkout" 
                        element={ <Suspense fallback={<Spinner />}>
                                      <LazyCheckoutPg />
                                  </Suspense>
                                  }>
                  <Route path="information" element={
                      <Suspense fallback={<Spinner />}>
                        <LazyInformation />
                      </Suspense>} />
                  <Route path="delivery" element={
                      <Suspense fallback={<Spinner />}>
                        <LazyDelivery />
                      </Suspense>}/>
                  <Route path="payment" element={
                      <Suspense fallback={<Spinner />}>
                        <LazyPayment />
                      </Suspense>}/>
                  <Route path="review" element={
                      <Suspense fallback={<Spinner />}>
                        <LazyReview />
                      </Suspense>}/>
                </Route>
                
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        
    )
}
export default AnimatedRoutes