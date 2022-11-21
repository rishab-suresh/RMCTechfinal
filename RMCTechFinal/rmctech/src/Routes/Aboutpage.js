import React from 'react';
import { About } from '../Components/About';
import "../Components/About.css";
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

export const Aboutpage = () => {
  return (
    <div>
      <Navbar/>
      <About/>
      <Footer/>
    </div>
    
  )
};

