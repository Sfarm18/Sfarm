import React, { useState, useRef, useContext } from 'react';
import { useNavigate, Link  } from 'react-router-dom';
import AuthContext from '../utils/AuthContext'

import styled from 'styled-components';

const AuthFormBlock = styled.div`
    h3{
        margin: 10;
        color: black;
        display: block;
        padding-bottom: 2rem;
        font-weight: bold;
        /* 글자 간격 */
        letter-spacing:2px;
          
    }
`;

// button margin
const ButtonWithMarinTop = styled.button`
text-align : center;
padding: 8px 20px;
border-radius: 6px;
color: white;
margin-top: 2.5rem;
background-color: #5BB5A2;
border-color: white;
width: 220pt; 
height: 27pt;
`;

// styled input

const StyledInput = styled.input`
    font-size:1rem;
    border:none;
    border-bottom: 1px solid #BDBDBD;
    padding-bottom: 0.5rem;
    outline: none;
    width: 100%;
    /* Scss 에서 쓰는 요소가 서로 반복될 때 margin-top 을 줌 >>> input 과 input 사이에 margin-top 줌. */
    &+&{
        margin-top: 1rem;
    }
`
// 폼 하단에 회원가입 링크 style
const Footer = styled.div`
    margin-top:1rem;
    text-align : right;
    a {
        color : 1px solid gray;
        text-decoration:underline;
        &:hover{
            color:1px solid gray
        }
    }

`

const LoginForm = () => {

    let navigate = useNavigate();
    const authCtx = useContext(AuthContext);
    const userIdInputRef = useRef(null);
    const passwordInputRef = useRef(null);

    const submitHandler = (event) => {
        event.preventDefault();
        const enteredUserId = userIdInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;
        authCtx.login(enteredUserId, enteredPassword);

        if (authCtx.isSuccess) {
            return navigate("/", { replace: true });
        }
    };

    return (
      <AuthFormBlock>
        <h3>로그인</h3>

      <form onSubmit={submitHandler}>
            <StyledInput 
                autoComplete="userId" 
                name="userId" 
                placeholder=" 아이디"
                required ref={userIdInputRef}
                 />
            <StyledInput 
                autoComplete="password" 
                name="password" 
                placeholder=" 비밀번호" 
                type="password"
                required ref={passwordInputRef}
                />

            <ButtonWithMarinTop fullWidth>로그인</ButtonWithMarinTop>
          </form>
    
      <Footer>
        <Link to="/signup">회원가입</Link>
      </Footer>
    </AuthFormBlock>
    );
};

export default LoginForm;