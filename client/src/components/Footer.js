import React from 'react';
import './Footer.css'

const Footer = () => {
    const thisYear = () => {
        const year = new Date().getFullYear();
        return year
    };

    return (
        <div className="inner"> 
            <div className="info">
                <span>사업자등록번호 000-00-00000</span>
                <span>(주)Sfarm 대표이사 정우용</span>
                <span>TEL : 02) 0000-1111 / FAX : 02) 0000-1111</span>
                <span>개인정보 책임자 : 이겨레</span>
            </div>
         
            <p className="copyright">
                &copy; Copyright <span>{thisYear()}</span> Sfarm. All rights reserved.
            </p>
            <img src="./images/starbucks_logo_only_text.png" alt="" className="logo" />
        </div>
    )
};

export default Footer;