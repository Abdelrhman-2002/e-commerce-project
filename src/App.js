import React, { useEffect, useState } from 'react';
import './App.css';
import OptionsNav from './Components/OptionsNav/OptionsNav'
import NavBar from './Components/NavBar/NavBar'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Home from './Routes/Home';
import ContactUs from './Routes/ContactUs';
import AboutUs from './Routes/AboutUs';
import PNF from './Routes/PNF';
import Product from './Components/Product/Product';
import { Footer } from './Components/Footer/Footer';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';
import Cart from './Components/Redux/Cart';
import Login from './Routes/Login';
import Loader from './Components/Loader/Loader';
function App() {
  const [showLoader, setShowLoader] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/home') {
      const timer = setTimeout(() => {
        setShowLoader(false);
      }, 5000);
      return () => clearTimeout(timer);
    } else {
      setShowLoader(false);
    }
  }, [location]);

  return (
    <div className="App">
      {showLoader && <Loader />}
      <OptionsNav />
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path='/home' element={<Home />}/>
        <Route path='/home/:id' element={<Product />}/>
        <Route path='/about' element={<AboutUs />}/>
        <Route path='/contact' element={<ContactUs />}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='*' element={<PNF />}/>
      </Routes>
      <Footer/>
      <ScrollToTop/>
    </div>
  );
}

export default App;
