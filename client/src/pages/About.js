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
                <li>스마트 농장 관리 시스템</li><br/>
                <li>농장을 등록하여 내 농장을 안전하게 지켜보세요!</li><br/>
                </ol>
            </div>

            <div>
                <img className="about_weatherimg" src={W_img} alt="weather"/>
            </div>

            <div className="about_textweather">
                <ol>
                <h2>고객의 지역 날씨에 따른 행동 정보 제공</h2><br/>
                <li>농촌 진흥청의 날씨별 농장 관리 대응책을 받아보세요.</li>
                <li>일상의 날씨뿐만 아니라 태풍과 같은 상황의 피해 예방에 도움을 줄 수 있습니다.</li><br/>
                </ol>
            </div>

            <div>
                <img className="about_CCTVimg" src={C_img} alt="CCTV"/>
            </div>

            <div className="about_textCCTV">
                <ol>
                <h2>AI 모델을 이용한 유해조수 감시 기능</h2><br/>
                <li>농장에 설치된 CCTV로 유해조수 감시 시스템을 사용해 보세요.</li>
                <li>농장을 망쳐놓는 유해조수를 체계적으로 관리할 수 있습니다.</li><br/>
                </ol>
            </div>
    
        </>
    );
}

export default About;