import React from 'react';
import '../../App.css'
import styled from 'styled-components';
import SlideBanner from '../Slidebanner';

const AuthTemplateBlock = styled.div`
  display: flex;
  height: 60vh;
  /* 내가 설정해놓은 paltte 에서 2번째 회색을 쓰겠어 */
  flex-direction:column;
  justify-content: center;
  align-items: center;
`;

// white box
const WhiteBox = styled.div`

  /* 윤곽선 4면 전부 그림자로 입체감줌 */
  box-shadow: 0 0 8px rgba(0,0,0,0.025);
  padding: 2rem;
  width: 360px;
  background: white;
  border-radius: 2px;
`

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

function MyPage() {
    return (
        <>
            <SlideBanner/>
            <AuthTemplateBlock>
                <WhiteBox>
                <AuthFormBlock>
            <h3>마이페이지</h3>
            <form>
                {/* autocomplete 속성 >> 인풋에 자동완성하는 속성 
                 username 은 사용자 이름 , new-password 는 보통 비밀번호 자동완성 막기 위해서 새로운 비밀번호나 비밀번호 확인란에 들어간다는데
                일단 책은 이렇고 나는 나중에 보고 current-password 가 더 맞을거 같아서 임의로 바꿨음. */}
                <StyledInput 
                autoComplete="username" 
                name="username" 
                placeholder=" 이름"
                 />

                <StyledInput 
                autoComplete="useremail" 
                name="useremail" 
                placeholder=" 이메일"
                 /> 

                <StyledInput 
                autoComplete="userid" 
                name="userid" 
                placeholder=" 아이디"
                 /> 

                <StyledInput 
                autoComplete="userlocation" 
                name="userlocation" 
                placeholder=" 거주지"
                 /> 
                
                
                
                <ButtonWithMarinTop fullWidth>수정</ButtonWithMarinTop>
            </form>
        </AuthFormBlock>
                </WhiteBox>
            </AuthTemplateBlock>
        </>
    );
}

export default MyPage;