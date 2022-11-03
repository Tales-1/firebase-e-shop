import {BrowserRouter as Router, Route,Routes,Navigate} from "react-router-dom"
import React from "react"
import Home from "./pages/Home";
import Catalogue from "./pages/Catalogue";
import ProductList from "./pages/ProductList";
import ContactPage from "./pages/ContactPage";
import ProductPage from "./pages/ProductPage";
import Login from "./pages/Login";
import Checkout from "./pages/Checkout";
import Header from "./components/header/Header";
import DesktopNavBar from "./components/DesktopNavBar";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import Reset from "./pages/Reset"

const App: React.FC = () => {
  return (
    <div className="relative h-screen flex flex-col">
      <Router>
        <Header />
        <Routes>
            <Route path ="/" element={<Home />} />
            <Route path="/collection" element={<Catalogue />} />
            <Route path="/collection/:name">
              <Route index element={<ProductList />} />
              <Route path=":type" element={<ProductPage />} />
            </Route>
            <Route path="/contact-us" element={<ContactPage />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/profile">
              <Route index element={<Dashboard />} />
              <Route path="login" element={<Login />} />
              <Route path ="register" element={<Register />} />
              <Route path ="reset" element={<Reset />} />
            </Route>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
