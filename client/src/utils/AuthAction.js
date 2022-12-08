import { GET, POST } from "./FetchAuthAction";

// 토큰을 만드는 함수
const createTokenHeader = (token) => {
    return {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    };
};

// 토큰의 만료시간을 계산하는 함수
const calculateRemainingTime = (expirationTime) => {
    const currentTime = new Date().getTime();
    const adjExpirationTime = new Date(expirationTime).getTime();
    const remainingDuration = adjExpirationTime - currentTime;
    return remainingDuration;
};

// 토큰값과 만료시간을 부여받으면 그것을 localStorage내부에 저장해주는 함수
export const loginTokenHandler = (token, expirationTime) => {
    localStorage.setItem('token', token);
    localStorage.setItem('expirationTime', String(expirationTime));
    const remainingTime = calculateRemainingTime(expirationTime);
    return remainingTime;
};

// localStorage내부에 토큰이 존재하는지 검색하는 함수
export const retrieveStoredToken = () => {
    const storedToken = localStorage.getItem('token');
    const storedExpirationDate = localStorage.getItem('expirationTime') || '0';
    const remaingTime = calculateRemainingTime(+storedExpirationDate);
    
    // 토큰 만료 시간이 1초 아래로 남았으면 자동으로 토큰을 삭제
    if (remaingTime <= 1000) {
        localStorage.removeItem('token');
        localStorage.removeItem('expirationTime');
        return null;
    }

    // 토큰이 존재한면 만료까지 남은 시간과 토큰값을 같이 객체로 반환
    return {
        token: storedToken,
        duration: remaingTime
    };
};

// 회원가입 URL로 POST 방식으로 호출하는 함수
export const signupActionHandler = (userId, password, name, location) => {
    const URL = '/auth/signup';
    const signupObject = { userId, password, name, location };
    const response = POST(URL, signupObject, {});
    return response;
};

// 마찬가지로 로그인 URL을 POST방식으로 호출하는 함수
export const loginActionHandler = (usderId, password) => {
    const URL = '/auth/login';
    const loginObject = { usderId, password };
    const response = POST(URL, loginObject, {});
    return response;
};

// 로그아웃을 해주는 함수
export const logoutActionHandler = () => {
    // localStorage에 저장된 토큰과 만료시간을 삭제
    localStorage.removeItem('token');
    localStorage.removeItem('expirationTime');
};

export const getUserActionHandler = (token) => {
    const URL = '/mypage/status';
    const response = GET(URL, createTokenHeader(token));
    return response;
};

export const changeNameActionHandler = (name, token) => {
    const URL = '/mypage/name';
    const changeNameObj = { name };
    const response = POST(URL, changeNameObj, createTokenHeader(token));
    return response;
};

export const changeLocationdActionHandler = (location, token) => {
    const URL = '/mypage/location';
    const changeLocationObj = { location };
    const response = POST(URL, changeLocationObj, createTokenHeader(token));
    return response;
};