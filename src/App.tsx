import {BrowserRouter as Router, Route,Routes,Navigate} from "react-router-dom"
import React, { useEffect } from "react"
import Home from "./pages/Home";
import Catalogue from "./pages/Catalogue";
import ProductList from "./pages/ProductList";
import Checkout from "./pages/cart/checkout/Checkout";
import Contact from "./pages/Contact";
import ProductPage from "./pages/ProductPage";
import Login from "./pages/profile/Login";
import Cart from "./pages/cart/Cart";
import Dashboard from "./pages/profile/dashboard/Dashboard";
import Register from "./pages/profile/Register";
import Reset from "./pages/profile/Reset"
import Notification from "./components/Notification";
import Overlay from "./utils/Overlay";
import Buffer from "./pages/Buffer";
import Orderhistory from "./pages/profile/dashboard/dashboard-routes/Orderhistory";
import Wishlist from "./pages/profile/dashboard/dashboard-routes/Wishlist";
import AccounDetails from "./pages/profile/dashboard/dashboard-routes/AccountDetails";
import { selectStatus, fetchData, selectProducts } from "./redux/features/dataSlice";
import { useAppDispatch, useAppSelector } from "./redux/store/hooks";
import Delivery from "./pages/cart/checkout/Delivery";
import Information from "./pages/cart/checkout/Information";
import Payment from "./pages/cart/checkout/Payment";
import Review from "./pages/cart/checkout/Review";


const App: React.FC = () => {
  const dispatch = useAppDispatch()
  const status = useAppSelector(selectStatus)
  useEffect(()=>{
    if(status === "idle"){
      dispatch(fetchData())
  }
  },[status,dispatch])
  console.log(useAppSelector(selectProducts))
  return (
    <div className="relative flex flex-col h-screen">
      <Notification />
      <Overlay />
      <Router>
        <Routes>
            <Route path ="/" element={<Home />}>
              <Route path="collection" element={<Catalogue />} />
              <Route path="collection/:name">
                  <Route index element={<ProductList />} />
                  <Route path=":type" element={<ProductPage />} />
              </Route>
              <Route path="contact-us" element={<Contact />} />
              <Route path="cart" element={<Cart />} />
              <Route path="profile">
                  <Route index element={<Buffer />} />
                  <Route path ="login" element={<Login />} />
                  <Route path ="register" element={<Register />} />
                  <Route path ="reset" element={<Reset />} />
                  <Route path="dashboard" element={<Dashboard />}>
                      <Route path="order-history" element={<Orderhistory />}/>
                      <Route path="wishlist" element={<Wishlist />}/>
                      <Route path="account-details" element={<AccounDetails />}/>
                  </Route>
              </Route>
            </Route>
            <Route path="/checkout" element={<Checkout />}>
              <Route path="information" element={<Information />} />
              <Route path="delivery" element={<Delivery />}/>
              <Route path="payment" element={<Payment />}/>
              <Route path="review" element={<Review />}/>
            </Route>
            
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
