import React from 'react'

import './Contact.css'
import Form from './Form'


export const Contact = () => {
    return (
        <div className='container-fluid d-sm-block d-md-block d-lg-none' id='contact'>
            <div className="text-center">

                <p className="lead px-3 mt-5" data-aos="fade-right">Questions to ask? Fill out the form directly and Reach out to us</p>
                <Form  />
            </div>







        </div>
    )
}
