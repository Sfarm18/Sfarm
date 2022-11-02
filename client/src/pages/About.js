import React from 'react';
import '../App.css'
import './About.css'
import Slidebanner from '../components/Slidebanner'
import W_img from '../asset/images/about_weather.jpg'
import C_img from '../asset/images/about_CCTV.jpg'


function About() {
    
    return (
        <>
        <Slidebanner />
            <div className="about_headline">
                <h1>About Sfarm</h1>
            </div>

            <div className="about_texthead">
                <ol>
                <li>text1</li><br/>
                </ol>
            </div>

            <div>
                <img className="about_weatherimg" src={W_img} alt="weather"/>
            </div>

            <div className="about_textweather">
                <ol>
                <li>text1</li><br/>
                <li>text2</li>
                </ol>
            </div>

            <div>
                <img className="about_CCTVimg" src={C_img} alt="CCTV"/>
            </div>

            <div className="about_textCCTV">
                <ol>
                <li>text1</li><br/>
                <li>text2</li>
                </ol>
            </div>
    
        </>
    );
}

export default About;