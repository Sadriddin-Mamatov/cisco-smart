import React from 'react';
import Imagesecond from "../img/Layer 2.png";
import AOS from 'aos';
import "aos/dist/aos.css";

const ServiceContact =()=> {
   AOS.init()

        return (

            <div className="second" id="serviceContact">
                <div className="service-left" data-aos="fade-right"  data-aos-duration="600">
                    <div className="second-text">Сервисные контракты Cisco Smart Net</div>
                    <a href="#service" className="btn second-button" >Получить консультацию</a>
                </div>
                <div className="service-img" data-aos="fade-left"  data-aos-duration="600">
                    <img src={Imagesecond} alt="#second" className="layer-2"/>
                </div>
           </div>
          );
    
}
 
export default ServiceContact;