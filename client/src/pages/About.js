import React from 'react';
import '../App.css'
import './About.css'
import Slidebanner from '../components/Slidebanner'


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
                <img className="about_weatherimg" src="C:\Users\User\Desktop\Sfarm\client\src\asset\images\about_weather.jpg" alt="weather"/>
            </div>

            <div className="about_textweather">
                <ol>
                <li>text1</li><br/>
                <li>text2</li>
                </ol>
            </div>

            <div>
                <img className="about_CCTVimg" src="/img/about_CCTV.jpg" alt="CCTV"/>
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