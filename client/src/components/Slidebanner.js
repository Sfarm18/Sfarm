import "./slick-carousel/slick/slick.css";
import "./slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import A from './A.PNG'
//import React, { Component } from "react";


function SlideBanner(){
    const settings = {
        arrows:false,
        autoplay: true,
        autoplaySpeed: 2500,
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
                <img src={A} alt="A"/>
            </div>
            <div>
                <h3>2</h3>
            </div>
            <div>
                <h3>3</h3>
            </div>
            <div>
                <h3>4</h3>
            </div>
            <div>
                <h3>5</h3>
            </div>
            <div>
                <h3>6</h3>
            </div>
        </Slider>
      </div>
    );
  }

export default SlideBanner