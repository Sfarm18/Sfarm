import React from 'react';
import styled from 'styled-components';

// 회원가입 / 로그인 페이지의 레이아웃 담당
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

const AuthTemplate = ({children}) => {
  // 부모 컴포넌트 안에 있는 자식 컴포넌트 요소 띄우기
    return (
        <AuthTemplateBlock>
            <WhiteBox>
            {children}
            </WhiteBox>
        </AuthTemplateBlock>
    
    );
};

export default AuthTemplate;