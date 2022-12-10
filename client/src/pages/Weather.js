import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import './Weather.css'
import Sidebar from '../components/Sidebar.js'
import styled from 'styled-components';

function Weather() {
    
    const location = 'Busan'; // 문자열
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
                return '※ 2시간 이상 -15°C 이하 유지 시 동해 발생 위험. ※'
            else if(t<0)
                return '땅이 얼 수도 있습니다. 관수를 멈춰주세요.'
            else return '위험 요인 없습니다. 땅이 얼기 전까지 충분히 관수 해 주세요.'
        }
        else if(w===602 || w===6222){   //폭설
            if(t<-15)
                return '※폭설 주의※   ※ 2시간 이상 -15°C 이하 유지 시 동해 발생 위험. ※'
            else
                return '※폭설 주의※   비닐하우스 등 구조물 상태 점검 하세요.'
        }
        else if(w>=600 && w<622){   //눈
            if(t<-15)
                return '※ 2시간 이상 -15°C 이하 유지 시 동해 발생 위험. ※ 적설량 확인해 주세요.'
            else
                return '적설량 확인해 주세요. '
        }
        else if(w===502 || w===503 || w===504 || w===522){  //폭우
            return '※폭우 주의※   배수로를 점검하세요.'
        }
        else if(w>=500 && w<=531){  //비
            return '배수로를 점검하세요.'
        }
        else if(w>=300 && w<=321){   //drizzle
            return '배수로를 점검하세요.'
        }
        else if(w>=200 && w<=232){      //천둥번개
            if(t<-15)
                return '※낙뢰 주의※  외출을 삼가세요  ※ 2시간 이상 -15°C 이하 유지 시 동해 발생 위험. ※'
            else return '※낙뢰 주의※  외출을 삼가세요.'
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
                <h1 className='head'>{location} 날씨예보</h1>
                <div className='crop'>&nbsp;작물: 복숭아</div>
                

                {Object.keys(result).length !== 0 && (
                    <ResultWrap>
                        <div className="time">{Time(0)}</div>
                        <div className="temperature">  
                            &nbsp;오전
                            <img src = {"http://openweathermap.org/img/wn/"+ result.data.list[0].weather[0].icon+".png"} alt="profile"/>
                            {Math.round((result.data.list[0].main.temp - 273.15) * 10) / 10}°C
                            &nbsp;&nbsp;&nbsp;오후                            
                            <img src = {"http://openweathermap.org/img/wn/"+ result.data.list[4].weather[0].icon+".png"} alt="profile"/>
                            {Math.round((result.data.list[4].main.temp - 273.15) * 10) / 10}°C
                        </div>
                        <div className="comment">오전: {Comment((Math.round((result.data.list[0].main.temp - 273.15) * 10)/10), result.data.list[0].weather[0].id)}</div>
                        <div className="comment">오후: {Comment((Math.round((result.data.list[4].main.temp - 273.15) * 10)/10), result.data.list[4].weather[0].id)}</div>
                    </ResultWrap>
                )}

                {Object.keys(result).length !== 0 && (
                    <ResultWrap>
                        <div className="time">{Time(1)}</div>
                        <div className="temperature">
                            &nbsp;오전
                            <img src = {"http://openweathermap.org/img/wn/"+ result.data.list[8].weather[0].icon+".png"} alt="profile"/>
                            {Math.round((result.data.list[8].main.temp - 273.15) * 10) / 10}°C
                            &nbsp;&nbsp;&nbsp;오후 
                            <img src = {"http://openweathermap.org/img/wn/"+ result.data.list[12].weather[0].icon+".png"} alt="profile"/>
                            {Math.round((result.data.list[12].main.temp - 273.15) * 10) / 10}°C
                        </div>
                        <div className="comment">오전: {Comment((Math.round((result.data.list[8].main.temp - 273.15) * 10)/10), result.data.list[8].weather[0].id)}</div>
                        <div className="comment">오후: {Comment((Math.round((result.data.list[12].main.temp - 273.15) * 10)/10), result.data.list[12].weather[0].id)}</div>
                    </ResultWrap>
                )}

                {Object.keys(result).length !== 0 && (
                    <ResultWrap>
                        <div className="time">{Time(2)}</div>
                        <div className="temperature">
                            &nbsp;오전
                            <img src = {"http://openweathermap.org/img/wn/"+ result.data.list[16].weather[0].icon+".png"} alt="profile"/>
                            {Math.round((result.data.list[16].main.temp - 273.15) * 10) / 10}°C 
                            &nbsp;&nbsp;&nbsp;오후 
                            <img src = {"http://openweathermap.org/img/wn/"+ result.data.list[20].weather[0].icon+".png"} alt="profile"/>
                            {Math.round((result.data.list[20].main.temp - 273.15) * 10) / 10}°C
                        </div>
                        <div className="comment">오전: {Comment((Math.round((result.data.list[16].main.temp - 273.15) * 10)/10), result.data.list[16].weather[0].id)}</div>
                        <div className="comment">오후: {Comment((Math.round((result.data.list[20].main.temp - 273.15) * 10)/10), result.data.list[20].weather[0].id)}</div>
                    </ResultWrap>
                )}

                {Object.keys(result).length !== 0 && (
                    <ResultWrap>
                        <div className="time">{Time(3)}</div>
                        <div className="temperature">
                            &nbsp;오전
                            <img src = {"http://openweathermap.org/img/wn/"+ result.data.list[24].weather[0].icon+".png"} alt="profile"/>
                            {Math.round((result.data.list[24].main.temp - 273.15) * 10) / 10}°C
                            &nbsp;&nbsp;&nbsp;오후 
                            <img src = {"http://openweathermap.org/img/wn/"+ result.data.list[28].weather[0].icon+".png"} alt="profile"/>
                            {Math.round((result.data.list[28].main.temp - 273.15) * 10) / 10}°C
                        </div>
                        <div className="comment">오전: {Comment((Math.round((result.data.list[24].main.temp - 273.15) * 10)/10), result.data.list[24].weather[0].id)}</div>
                        <div className="comment">오후: {Comment((Math.round((result.data.list[28].main.temp - 273.15) * 10)/10), result.data.list[28].weather[0].id)}</div>
                    </ResultWrap>
                )}                

                {Object.keys(result).length !== 0 && (
                    <ResultWrap>
                        <div className="time">{Time(4)}</div>
                        <div className="sky">
                            
                        </div>
                        <div className="temperature">
                            &nbsp;오전
                            <img src = {"http://openweathermap.org/img/wn/"+ result.data.list[32].weather[0].icon+".png"} alt="profile"/>
                            {Math.round((result.data.list[32].main.temp - 273.15) * 10) / 10}°C
                            &nbsp;&nbsp;&nbsp;오후 
                            <img src = {"http://openweathermap.org/img/wn/"+ result.data.list[36].weather[0].icon+".png"} alt="profile"/>
                            {Math.round((result.data.list[36].main.temp - 273.15) * 10) / 10}°C
                        </div>
                        <div className="comment">오전: {Comment((Math.round((result.data.list[0].main.temp - 273.15) * 10)/10), result.data.list[0].weather[0].id)}</div>
                        <div className="comment">오후: {Comment((Math.round((result.data.list[4].main.temp - 273.15) * 10)/10), result.data.list[4].weather[0].id)}</div>
                    </ResultWrap>
                )} 

                <h1 className="explain"><br/><br/>겨울 주의 사항</h1>

                <h3 className="explain"><br/>※월동 준비를 위해 다음과 같이 관수해 주세요.(땅이 얼면 관수 중지)</h3>
                <h5 className="explain2">＊사질토 4일 간격 20mm, 양토 7일 간격 30mm, 점질토 9일 간격 35mm 관수＊</h5>

                <h3 className="explain"><br/><br/>※-15°C 이하에서 2시간 이상 지속 시 동해 발생 위험이 있습니다.</h3>
                <h5 className="explain2"> ＊80-100cm 부위까지 볏짚이나 부직포로 피복하여 보온 처리＊<br/>
                ＊방풍림 또는 방풍망 설치＊</h5>

                <h3 className="explain"><br/><br/>※사후 관리</h3>
                <h5 className="explain2">＊동해 피해 받은 나무는 터진 부분을 묶어 건조하지 않게 관리＊<br/>
                ＊강전정을 실시하여 결실량을 줄이고 봄철 건조 시에 관수 철저히 해 수세회복에 노력＊<br/>
                ＊수세가 떨어졌을 때 발아 직전에 석회유황합제 살포＊
                </h5>


                </div>
                
            </AppWrap>
        </>
    );
}

const AppWrap = styled.div`
  width: 100vw;
  height: 212vh;
  .appContentWrap {
    left: 50%;
    top: 120%;
    height:165%;
    margin-top:5%;
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
    font-size: 40px;
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