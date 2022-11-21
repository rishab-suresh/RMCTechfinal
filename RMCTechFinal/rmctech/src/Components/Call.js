import React from 'react'
import './Call.css'


export const Call = () => {
    return (
        <div className='cta'>
            <div className='overlay'></div>
            
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-9 text-center text-lg-start' id='call-text'>
                        <h3 data-aos="fade-right" id='title-cta'>Call To Action</h3>
                        <p data-aos="fade-right" id='para-cta'  >Magna ullamco pariatur nostrud voluptate reprehenderit. Enim cupidatat nulla ullamco laborum excepteur fugiat. Anim ullamco cupidatat anim fugiat in est cillum. Mollit id cupidatat non nisi eu cillum culpa do sit. Ea ad qui nostrud ullamco commodo culpa elit fugiat incididunt irure irure. Ex eu qui Lorem sint velit minim deserunt nisi dolore.</p>    
                    </div>
                    <div className='col-lg-3 cta-btn-container text-center mt-5'>
                        <a className='cta-btn align-middle ' data-aos='fade-in' data-aos-duration="2500" id='call-button' href='/'>Call to Action</a>
                    </div>

                </div>
            </div>

        </div>
    )
}
