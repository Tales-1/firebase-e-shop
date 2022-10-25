import {Route,Routes,Navigate,useParams} from "react-router-dom"
import React from "react"
import Home from "./pages/Home";
import Catalogue from "./pages/Catalogue";
import ProductList from "./pages/ProductList";
import ContactPage from "./pages/ContactPage";
import ProductPage from "./pages/ProductPage";
import ProfilePage from "./pages/ProfilePage";
import Checkout from "./pages/Checkout";
import Header from "./components/header/Header";
import DesktopNavBar from "./components/DesktopNavBar";
import { BrowserRouter as Router} from "react-router-dom"

const App: React.FC = () => {
  
  return (
    <div className="relative h-screen flex flex-col">
      <Router>
      <Header />
      <DesktopNavBar />
        <Routes>
            <Route path ="/" element={<Home />} />
            <Route path="catalogue" element={<Catalogue />} />
            <Route path="/collection/:name" element={<ProductList />}>
                    <Route path=":type" element={<ProductPage />} />
            </Route>
            <Route path="/contact-us" element={<ContactPage />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/user-profile" element={<ProfilePage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
