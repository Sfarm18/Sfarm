import React from 'react';
import { Link } from 'react-router-dom';
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
const ButtonWithMarinTop = styled.div`
text-align : center;
padding: 8px 20px;
border-radius: 6px;
color: white;
margin-top: 2.5rem;
background-color: #5BB5A2;
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

const textMap = {
    login:'로그인',
    register : '회원가입'
}

const AuthForm = ({type }) => {
    const text = textMap[type];
    return (
        <AuthFormBlock>
            <h3>{text}</h3>
            <form>
                {/* autocomplete 속성 >> 인풋에 자동완성하는 속성 
                 username 은 사용자 이름 , new-password 는 보통 비밀번호 자동완성 막기 위해서 새로운 비밀번호나 비밀번호 확인란에 들어간다는데
                일단 책은 이렇고 나는 나중에 보고 current-password 가 더 맞을거 같아서 임의로 바꿨음. */}
                <StyledInput 
                autoComplete="username" 
                name="username" 
                placeholder=" 아이디"
                
                 />
                <StyledInput 
                autoComplete="current-password" 
                name="password" 
                placeholder=" 비밀번호" 
                type="password"
            
                />
                {/* type 이 회원가입이면, 비밀번호 확인 인풋 추가 */}
                {type === 'register' &&(
                        <StyledInput autoComplete="new-password" name="passwordConfirm" placeholder=" 비밀번호 확인" type="password" />
                    )
                }

                {type === 'register' &&(
                        <StyledInput autoComplete="user-name" name="user-name" placeholder=" 이름" />
                    )
                }

                {type === 'register' &&(
                        <StyledInput autoComplete="user-email" name="user-email" placeholder=" 이메일" />
                    )
                }
                

                <ButtonWithMarinTop fullWidth>{text}</ButtonWithMarinTop>
            </form>
            <Footer>
                {type === 'login' ? (
                    <Link to="/register">회원가입</Link>
                ):(
                    <Link to="/login">로그인</Link>
                )
                }
               
            </Footer>
        </AuthFormBlock>
    );
};

export default AuthForm;