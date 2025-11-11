import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from './Components/Navbar/Navbar';
import Home from "./Components/Home/Home";
import Services from "./Components/Services/Services";
import Banner from './Components/Banner/Banner';
import AppStore from './Components/AppStore/AppStore';
import Testimonial from './Components/Testimonial/Testimonial';
import Footer from './Components/Footer/Footer';
import OrderPage from './Components/OrderPage/OrderPage';

const App = () => {
  const [orderList, setOrderList] = useState([]);

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: 'ease-in',
      delay: 100,
    });
  }, []);

  const addToOrder = (product) => {
    setOrderList(prev => [...prev, product]);
  };

  return (
    <Router>
      <div className='overflow-x-hidden'>
        <Navbar orderCount={orderList.length} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <Services addToOrder={addToOrder} />
                <Banner />
                <AppStore />
                <Testimonial />
              </>
            }
          />
          <Route
            path="/order"
            element={<OrderPage orderList={orderList} />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
