import "./Slidebanner.css";
import "./slick-carousel/slick/slick.css";
import "./slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import A1 from '../asset/images/tree2.png'
import A2 from '../asset/images/tree3.png'
import A3 from '../asset/images/tree4.png'
import A4 from '../asset/images/tree5.png'
import A5 from '../asset/images/tree8.png'
import A6 from '../asset/images/tree10.png'
import React from "react";


function SlideBanner(){
    const settings = {
        arrows:false,
        autoplay: false,
        autoplaySpeed: 250,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
      <div>
        <Slider {...settings}>
            <div>
                <img className="slide0" src={A1} alt="A1"/>
            </div>
            <div>
                <img className="slide2" src={A2} alt="A2"/>
            </div>
            <div>
                <img className="slide3" src={A3} alt="A3"/>
            </div>
            <div>
                <img className="slide4" src={A4} alt="A4"/>
            </div>
            <div>
                <img className="slide5" src={A5} alt="A5"/>
            </div>
            <div>
                <img className="slide6" src={A6} alt="A6"/>
            </div>
        </Slider>
      </div>
    );
  }

export default SlideBanner