import React from 'react';
import "./Feedback.css";



export const Feedback = () => {
    return (
        <div class="container-fluid" id='Offer' >
            <div className='text-center'  id="toptext">
                <h2 data-aos="fade-left">What We Offer</h2>
            </div>
            <div className="row ">
                <div className=" col-lg-5 d-flex align-items-stretch justify-content-center justify-content-lg-start aos-init aos-animate" id='pic-feed'>
                    <img src='https://bootstrapmade.com/demo/templates/Gp/assets/img/counts-img.jpg'  data-aos="fade-right" data-aos-delay="100" className='img-fluid' />
                </div>
                <div className="col-lg-7 ps-0 ps-lg-5 pe-lg-1 d-flex align-items-stretch aos-init aos-animate" >
                    <div className="content d-flex flex-column justify-content-center">
                        <div className='card' id='feed-card' data-aos="fade-in" data-aos-delay="200">
                            <h3 data-aos="fade-right" id='title-feed'>Voluptatem dignissimos provident quasi</h3>
                            <p data-aos="fade-right"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit</p>
                            <div className="row">
                                <div className="col-md-6 d-md-flex align-items-md-stretch" >
                                    <div className="count-box" > <i className="bi bi-emoji-smile" data-aos="fade-in" id='feed'>
                                    </i> <span data-purecounter-start="0" data-purecounter-end="65" data-purecounter-duration="0" className="purecounter" data-aos="fade-left">65</span>
                                        <p data-aos="fade-right"><strong>Happy Clients</strong> consequuntur voluptas nostrum aliquid ipsam architecto ut.</p>
                                    </div>
                                </div>
                                <div className="col-md-6 d-md-flex align-items-md-stretch">
                                    <div className="count-box"  > <i className="bi bi-journal-richtext" data-aos="fade-in" id='feed'></i> <span data-purecounter-start="0" data-purecounter-end="85" data-aos="fade-in" data-purecounter-duration="0" className="purecounter">85</span><p  data-aos="fade-right"><strong>Projects</strong> adipisci atque cum quia aspernatur totam laudantium et quia dere tan</p>
                                    </div>
                                </div>
                                <div className="col-md-6 d-md-flex align-items-md-stretch" >
                                    <div className="count-box" >
                                        <i className="bi bi-clock" data-aos="fade-in" id='feed'></i>
                                        <span data-purecounter-start="0" data-purecounter-end="35" data-purecounter-duration="0" className="purecounter" data-aos="fade-left">35</span><p data-aos="fade-right"><strong>Years of experience</strong> aut commodi quaerat modi aliquam nam ducimus aut voluptate non vel</p>
                                    </div
                                    ></div>
                                <div className="col-md-6 d-md-flex align-items-md-stretch" >
                                    <div className="count-box"  > <i class="bi bi-award" data-aos="fade-in" id='feed'></i>
                                        <span data-purecounter-start="0" data-purecounter-end="20" data-purecounter-duration="0" class="purecounter" data-aos="fade-right">20</span><p data-aos="fade-right"><strong>Awards</strong> rerum asperiores dolor alias quo reprehenderit eum et nemo pad der</p>
                                    </div>
                                </div>
                            </div> </div>

                    </div>
                </div>
            </div>
        </div>

    )
}
