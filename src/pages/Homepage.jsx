import React from 'react'

import Nav from '../components/Nav/Nav'
import Hero from '../components/Hero'
import Services from '../components/Services';
import Products from '../components/Products/Products';
import Blog from '../components/Blog';
import Partners from '../components/Partners';
import Footer from '../components/Footer';
import AOS from "aos";
import "aos/dist/aos.css";


const Homepage = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  React.useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100,
    });
    AOS.refresh();
  }, []);
  
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden'>
        <Nav/>
        <Hero/>
        <Services/>
        <Products/>
        <Blog/>
        <Partners/>
        <Footer/>
    </div>
  )
}

export default Homepage