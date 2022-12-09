# Sfarm(스마트 농장 관리 서비스)
| 이름 | git address |
|------|-------------|
|이겨레| [Lee-Gyeore] (https://github.com/Lee-Gyeore) |
|정우용| [Jung-kr] (https://github.com/leejeongeun0) |   

## 개요
해당 서비스, 스마트 농장 관리 시스템은 AI 기반 농장 감시를 제공하고, 지역 별 날씨에 맞는 정보를 제공해  농장 관리를 도와주는 웹 서비스 이다.

1. 학습된 모델을 이용하여 유해 조수 및 사람을 감시한다. 사용자가 설치한 CCTV 영상을 받아와 실시간으로 프레임 단위 분석을 수행한다.  감시 중 학습된 유해조수 또는 사람이 발견되면 해당 영상을 녹화하고 기록해놓는다. 녹화된 영상은 유해 조수 피해 보상 시 활용할 수 있다. 발견 기록을 활용하여 유해 조수 퇴치 방안을 강구할 수 있다.

2. 지역 날씨, 날씨 특보, 해당 월에 맞는 정보와 유의 사항, 행동 요령 등을 제공한다. 농촌 진흥청의 농사정보를 참고하여 업데이트를 진행하고 그에 따른 정보를 사용자가 받아볼 수 있다. 이를 통해 농장에서 발생할 수 있는 예방 가능한 피해를 예방할 수 있게 도와준다. 



## 웹 화면
### 이미지 삽입 예정



## 의존성, 설치방법
* 학습 시 사용된 이미지는 올리지 않음
* .env파일을 client 폴더에 생성 후 key 값 넣기 (https://openweathermap.org 회원가입 후 키 발급)
### 이미지 삽입 예정

* mysql 설치 후 Sfarm\server\src\main\resources\application.yml에 username, password 입력 
* MySQL DB 및 사용자 생성
```sql
create database sfarm;
use sfarm;
```


### api server
*  의존성
      ```
    // client
    "node.js": "^8.15.0",
    "axios": "^1.1.3",
    "date-fns": "^2.29.3",
    "http-proxy-middleware": "^2.0.6",
    "moment": "^2.29.4",
    "node-sass": "^7.0.3",
    "react": "^18.2.0",
    "react-calendar": "^3.9.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.4.1",
    "react-scripts": "5.0.1",
    "react-slick": "^0.29.0",
    "slick-carousel": "^1.8.1",
    "styled-components": "^5.3.6",
    "web-vitals": "^2.1.4"
    
        
    // server
    -java 11.0.13
    -jdk 11.0.13
    - spring-boot 2.7.5
    - mysql 8.0.28
    - jsonwebtoken 0.11.2
    - lombok
    - `mysql` database > jdbc
    - `logback` logger
    - spring-boot-starter-data-jpa
    - spring-boot-starter-security
    - spring-boot-starter-web
    
    
    //model
    python==3.8
    tensorflow-gpu==2.10.1
    keras==2.10.0
    opencv-python==4.6.0.66
    ```
* 실행방법
    ```
    cd server
    npm i
    cd server/celery
    pip install -r requirements.txt
    ```

## Installation
### 1, 원격 Git 저장소 복제
```
$ git clone https://github.com/Sfarm18/Sfarm.git
```

### 2. 리액트 npm 패키지 설치 및 빌드
```
$ cd client
client$ npm install
client$ npm start
```

### 3. 스프링부트 gradle 빌드
```
$ cd server
server$ ./gradlew build
```

### 4. 파이썬 패키지 설치
```
pip install -r requirements.txt
```
