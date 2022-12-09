import React, { useState, useEffect, useCallback } from "react";
import * as authAction from './AuthAction';

let logoutTimer;

// 각각의 컴포넌트에 포함되는 객체를 만드는 로직
const AuthContext = React.createContext({
    token: '',
    userObj: { userId: '', name: '', location: '' },
    isLoggedIn: false,
    isSuccess: false,
    isGetSuccess: false,
    signup: (userId, password, name, location) => { },
    login: (userId, password) => { },
    logout: () => { },
    getUser: () => { },
    changeName: (name) => { },
    changeLocation: (location) => { }
});

// Context의 Provider 역할, 즉 Context의 변화를 알리는 Provider 컴포넌트를 반환하는 함수
export const AuthContextProvider = (props) => {

    // token을 확인하는 함수를 실행하여 안의 값을 넣어준다.
    const tokenData = authAction.retrieveStoredToken();

    // token이 존재한다면 initialToken의 값은 tokenData의 token값
    let initialToken;
    if (tokenData) {
        initialToken = tokenData.token;
    }
    const [token, setToken] = useState(initialToken);
    const [userObj, setUserObj] = useState({
        userId: '',
        name: '',
        location: ''
    });

    // isSuccess와 isGetsuccess는 정확히 데이터가 나왔는지, 비동기 시스템에서의 처리를 위한 상태
    const [isSuccess, setIsSuccess] = useState(false);
    const [isGetSuccess, setIsGetSuccess] = useState(false);

    // token이 존재하면 1, 존재하지 않으면 0
    const userIsLoggedIn = !!token;

    // 회원가입을 하는 함수
    const signupHandler = (userId, password, name, location) => {
        setIsSuccess(false);
        const response = authAction.signupActionHandler(userId, password, name, location);
        response.then((result) => {
            if (result !== null) {
                setIsSuccess(true);
            }
        });
    };

    // 로그인을 하는 함수
    const loginHandler = (userId, password) => {
        setIsSuccess(false);
        const response = authAction.loginActionHandler(userId, password);
        response.then((result) => {
            if (result !== null) {
                //const loginData = result.data;
                //setToken(loginData.accessToken);
                //logoutTimer = setTimeout(logoutHandler, authAction.loginTokenHandler(loginData.accessToken, loginData.tokenExpiresIn));
                //setIsSuccess(true);
                console.log("성공");
            } else {
                console.log("실패!");
            }
        });
    };

    // 로그아웃을 하는 함수
    const logoutHandler = useCallback(() => {
        setToken('');
        authAction.logoutActionHandler();
        if (logoutTimer) {
            clearTimeout(logoutTimer);
        }
    }, []);

    // 마이페이지 조회 함수
    const getUserHandler = () => {
        setIsGetSuccess(false);
        const data = authAction.getUserActionHandler(token);
        data.then((result) => {
            if (result !== null) {
                console.log('get user start!');
                const userData = result.data;
                setUserObj(userData);
                setIsGetSuccess(true);
            }
        });
    };

    // 이름 변경 함수
    const changeNameHandler = (name) => {
        setIsSuccess(false);
        const data = authAction.changeNameActionHandler(name, token);
        data.then((result) => {
            if (result !== null) {
                const userData = result.data;
                setUserObj(userData);
                setIsSuccess(true);
            }
        });
    };

    // 지역 변경 함수
    const changeLocationHandler = (location) => {
        setIsSuccess(false);
        const data = authAction.changeLocationdActionHandler(location, token);
        data.then((result) => {
            if (result !== null) {
                const userData = result.data;
                setUserObj(userData);
                setIsSuccess(true);
            }
        });
    };

    // retrieveStoredToken로 받은 token값과, logoutHandler를 종속변수로 삼는 useEffect훅
    // 이를 통해 만료시간이 될 경우 자동으로 logoutHandler를 실행
    useEffect(() => {
        if (tokenData) {
            console.log(tokenData.duration);
            logoutTimer = setTimeout(logoutHandler, tokenData.duration);
        }
    }, [tokenData, logoutHandler]);

    const contextValue = {
        token,
        userObj,
        isLoggedIn: userIsLoggedIn,
        isSuccess,
        isGetSuccess,
        signup: signupHandler,
        login: loginHandler,
        logout: logoutHandler,
        getUser: getUserHandler,
        changeName: changeNameHandler,
        changeLocation: changeLocationHandler
    };
    
    return(
        <AuthContext.Provider value={contextValue}>
          {props.children}
        </AuthContext.Provider>
    )
};

export default AuthContext;
