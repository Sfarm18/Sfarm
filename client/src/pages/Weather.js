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
    
    // 12월 코멘트
    const Comment = (t,w) => {
        if(w>=900 && w<=906){ // 재해
            return '※위험합니다 농사로 행동 지침에 따라주세요.'
        }
        else if(w>=800 && w<=804){ // 맑거나 구름
            if(t<-15)
                return '2시간 이상 -15°C 이하 유지 시 동해 발생 위험.'
            else if(t<0)
                return '땅이 얼 수도 있습니다. 관수를 멈춰주세요.'
            else return '위험 요인 없습니다. 땅이 얼기 전까지 충분히 관수 해 주세요.'
        }
        else if(w===602 || w===6222){   //폭설
            if(t<-15)
                return '※폭설 주의※   2시간 이상 -15°C 이하 유지 시 동해 발생 위험.'
            else
                return '※폭설 주의※   비닐하우스 등 구조물 상태 점검 하세요.'
        }
        else if(w>=600 && w<622){   //눈
            if(t<-15)
                return '2시간 이상 -15°C 이하 유지 시 동해 발생 위험. 적설량 확인해 주세요.'
            else
                return '적설량 확인해 주세요. '
        }
        
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