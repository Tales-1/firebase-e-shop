import {BrowserRouter as Router, Route,Routes,Navigate} from "react-router-dom"
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

const App: React.FC = () => {
  return (
    <div className="relative h-screen flex flex-col">
      <Router>
      <Header />
      <DesktopNavBar />
        <Routes>
            <Route path ="/" element={<Home />} />
            <Route path="/collection" element={<Catalogue />} />
            <Route path="/collection/:name">
              <Route index element={<ProductList />} />
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
