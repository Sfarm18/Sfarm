import React from 'react';
import './Footer.css'

const Footer = () => {
    const thisYear = () => {
        const year = new Date().getFullYear();
        return year
    };

    return (
        <div class="inner"> 
            <div class="info">
                <span>사업자등록번호 201-81-21515</span>
                <span>(주)Sfarm 대표이사 이겨레</span>
                <span>TEL : 02) 3015-1100 / FAX : 02) 3015-1106</span>
                <span>개인정보 책임자 : 이겨레</span>
            </div>
         
            <p class="copyright">
                &copy; Copyright <span>{thisYear()}</span> Sfarm. All rights reserved.
            </p>
            <img src="./images/starbucks_logo_only_text.png" alt="" class="logo" />
        </div>
    )
};

export default Footer;