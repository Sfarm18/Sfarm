import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../components/Sidebar.js'
import styled from 'styled-components';

function Weather() {
    
    const location = 'busan'; // 문자열
    const [result, setResult] = useState({}); // json 파일 객체
    const API_KEY = process.env.REACT_APP_WEATHER_KEY; // 각자 개인의 API KEY를 발급받아 사용해주세요. 

    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${API_KEY}`;
 
    const Comment = (t,w) => {
        if(w===800){
            if(t<10)
                return '굿'
        }
        else if(t>=10){
            return 'd'
        }

    }

    const Time = (i) => {
        let now = new Date();
        let GetTime = new Date(now.setDate(now.getDate() + i));
        let Month = GetTime.getMonth() + 1;
        let Day = GetTime.getDate();
        const week = [
            '일','월','화','수','목','금','토'
        ];
        let Week = week[GetTime.getDay()]; 
        return Month + '월' + Day + '일 ' + Week + '요일'
    }

    useEffect(() => {
        const searchWeather = async (e) => {
        try {
            const data = await axios({
            method: 'get',
            url: url,
            })
            setResult(data);
            console.log(data);
        } catch(err) {
            alert(err);
        }
    }
    searchWeather();
    }, [url]);

    return (
        <>
            <Sidebar/>
            <AppWrap>
                <div className="appContentWrap">
                <h1 className='head'>날씨예보(부산)</h1>
                <h3>작물명: 복숭아</h3>
                

                {Object.keys(result).length !== 0 && (
                    <ResultWrap>
                        <div className="time">{Time(0)}</div>
                        <div className="sky">
                            <img src = {"http://openweathermap.org/img/wn/"+ result.data.list[0].weather[0].icon+".png"} alt="profile"/>
                            <img src = {"http://openweathermap.org/img/wn/"+ result.data.list[4].weather[0].icon+".png"} alt="profile"/>
                        </div>
                        <div className="temperature">
                            {Math.round((result.data.list[0].main.temp - 273.15) * 10) / 10}°C/  
                            {Math.round((result.data.list[4].main.temp - 273.15) * 10) / 10}°C
                        </div>
                        <div className="comment">{Comment((Math.round((result.data.list[0].main.temp - 273.15) * 10)/10), result.data.list[0].weather[0].id)}</div>
                        <div className="comment">{Comment((Math.round((result.data.list[4].main.temp - 273.15) * 10)/10), result.data.list[4].weather[0].id)}</div>
                    </ResultWrap>
                )}

                {Object.keys(result).length !== 0 && (
                    <ResultWrap>
                        <div className="time">{Time(1)}</div>
                        <div className="sky">
                            <img src = {"http://openweathermap.org/img/wn/"+ result.data.list[8].weather[0].icon+".png"} alt="profile"/>
                            <img src = {"http://openweathermap.org/img/wn/"+ result.data.list[12].weather[0].icon+".png"} alt="profile"/>
                        </div>
                        <div className="temperature">
                        {Math.round((result.data.list[8].main.temp - 273.15) * 10) / 10}°C/  
                            {Math.round((result.data.list[12].main.temp - 273.15) * 10) / 10}°C
                        </div>
                        <div className="comment">{Comment((Math.round((result.data.list[8].main.temp - 273.15) * 10)/10), result.data.list[8].weather[0].id)}</div>
                        <div className="comment">{Comment((Math.round((result.data.list[12].main.temp - 273.15) * 10)/10), result.data.list[12].weather[0].id)}</div>
                    </ResultWrap>
                )}

                {Object.keys(result).length !== 0 && (
                    <ResultWrap>
                        <div className="time">{Time(2)}</div>
                        <div className="sky">
                            <img src = {"http://openweathermap.org/img/wn/"+ result.data.list[16].weather[0].icon+".png"} alt="profile"/>
                            <img src = {"http://openweathermap.org/img/wn/"+ result.data.list[20].weather[0].icon+".png"} alt="profile"/>
                        </div>
                        <div className="temperature">
                        {Math.round((result.data.list[16].main.temp - 273.15) * 10) / 10}°C/  
                            {Math.round((result.data.list[20].main.temp - 273.15) * 10) / 10}°C
                        </div>
                        <div className="comment">{Comment((Math.round((result.data.list[16].main.temp - 273.15) * 10)/10), result.data.list[16].weather[0].id)}</div>
                        <div className="comment">{Comment((Math.round((result.data.list[20].main.temp - 273.15) * 10)/10), result.data.list[20].weather[0].id)}</div>
                    </ResultWrap>
                )}

                {Object.keys(result).length !== 0 && (
                    <ResultWrap>
                        <div className="time">{Time(3)}</div>
                        <div className="sky">
                            <img src = {"http://openweathermap.org/img/wn/"+ result.data.list[24].weather[0].icon+".png"} alt="profile"/>
                            <img src = {"http://openweathermap.org/img/wn/"+ result.data.list[28].weather[0].icon+".png"} alt="profile"/>
                        </div>
                        <div className="temperature">
                        {Math.round((result.data.list[24].main.temp - 273.15) * 10) / 10}°C/  
                            {Math.round((result.data.list[28].main.temp - 273.15) * 10) / 10}°C
                        </div>
                        <div className="comment">{Comment((Math.round((result.data.list[24].main.temp - 273.15) * 10)/10), result.data.list[24].weather[0].id)}</div>
                        <div className="comment">{Comment((Math.round((result.data.list[28].main.temp - 273.15) * 10)/10), result.data.list[28].weather[0].id)}</div>
                    </ResultWrap>
                )}                

                {Object.keys(result).length !== 0 && (
                    <ResultWrap>
                        <div className="time">{Time(4)}</div>
                        <div className="sky">
                            <img src = {"http://openweathermap.org/img/wn/"+ result.data.list[32].weather[0].icon+".png"} alt="profile"/>
                            <img src = {"http://openweathermap.org/img/wn/"+ result.data.list[36].weather[0].icon+".png"} alt="profile"/>
                        </div>
                        <div className="temperature">
                        {Math.round((result.data.list[32].main.temp - 273.15) * 10) / 10}°C/  
                            {Math.round((result.data.list[36].main.temp - 273.15) * 10) / 10}°C
                        </div>
                        <div className="comment">{Comment((Math.round((result.data.list[0].main.temp - 273.15) * 10)/10), result.data.list[0].weather[0].id)}</div>
                        <div className="comment">{Comment((Math.round((result.data.list[4].main.temp - 273.15) * 10)/10), result.data.list[4].weather[0].id)}</div>
                    </ResultWrap>
                )} 
                </div>
                
            </AppWrap>
        </>
    );
}

const AppWrap = styled.div`
  width: 100vw;
  height: 300vh;
  .appContentWrap {
    left: 50%;
    top: 120%;
    height:165%;
    margin-top:7%;
    transform: translate(-50%, -50%);
    position: absolute;
    padding: 20px;
    align-items: center;
    object-fit: cover;
  }
  input {
    padding: 16px;
    border: 2px black solid;
    border-radius: 16px;
  }
`;

const ResultWrap = styled.div`
  margin-top: 60px;
  border: 1px black solid;
  padding: 10px;
  border-radius: 8px;
  .time {
    font-size: 24px;
  }
  .temperature {
    font-size: 45px;
    margin-top: 8px;
  }
  .sky {
    float: left; width: 33%;
    font-size: 60px;
    text-align: left;
    margin-top: 8px;
  }
  .comment {
    margin-top: 20px;
    color : #8D8C8F;
  }
`;

export default Weather;