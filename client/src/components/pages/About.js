import React from 'react';
import '../../App.css'
import './About.css'
import Slidebanner from '../Slidebanner'


function About() {
    
    return (
        <>
        <Slidebanner />
        <about>
            <div className="about_headline">
                <h1>About Sfarm</h1>
            </div>

            <div className="about_texthead">
                <li1>text1</li1><br/>
                <li2>text2</li2>
            </div>

            <div>
                <img className="about_weatherimg" src="/img/about_weather.jpg" alt="weather"/>
            </div>

            <div className="about_textweather">
                <li1>text1</li1><br/>
                <li2>text2</li2>
            </div>

            <div>
                <img className="about_CCTVimg" src="/img/about_CCTV.jpg" alt="CCTV"/>
            </div>

            <div className="about_textCCTV">
                <li1>text1</li1><br/>
                <li2>text2</li2>
            </div>
        </about>
        </>
    );
}

export default About;