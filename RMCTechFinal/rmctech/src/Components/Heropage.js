import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Heropage.css";
import videobg from "../Assets/Img/video (1).mp4";
import Form from "./Form";


const Heropage = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, {});



  return (


    <div className="container" id="hero" class="d-flex align-items-center">
      <div className="container-fluid" class="d-flex align-items-center">
        <video src={videobg} autoPlay loop muted id="main-fluid" />
        <div className="content-video">
          <div class="row">
            <div class="  col-lg-6 mx-auto d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" id="solution" data-aos="fade-right">
              <h1 className="text-center">Better Solutions For Your Business</h1>
              <h2 className="text-center">We are team of talented designers making websites with Bootstrap</h2>
              <div class="d-flex justify-content-center mx-auto justify-content-lg-start">
                <a href="#about" className="btn-get-started scrollto" data-aos="fade-in" data-aos-duration="3500">Get Started</a>
                <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" class="glightbox btn-watch-video"><i class="bi bi-play-circle"></i><span>Watch Video</span></a>
              </div>
            </div>

            <div className='  col-lg-4 mx-auto d-flex flex-column justify-content-center d-none d-lg-block  pt-lg-0 order-2 order-lg-1' id="form-data" data-aos="fade-left">
              <div className="text-center">

                <p className="lead px-3 mt-3">Questions to ask? Fill out the form directly and Reach out to us</p>
              </div>
              <div className="row  ">
                <div >
                  <Form/>
                </div>
              </div>
            </div>

          </div>

        </div>
        

      </div>
      

    </div>






  );
};

export default Heropage;
