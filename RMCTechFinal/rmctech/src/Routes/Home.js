

import React from 'react'
import { Call } from '../Components/Call'
import { Contact } from '../Components/Contact'
import { Feedback } from '../Components/Feedback'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Heropage from '../Components/Heropage'
import Navbar from '../Components/Navbar'
import Services from '../Components/Services'

export const Home= () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <Heropage/>
        <Contact/>
        <Services/>
        <Call/>
        <Feedback/>
        <Footer/>
        

    </div>
  )
}
