import React from 'react'
import { Button } from './Button';
import './StartingPage.css'
import Ti1 from '../asset/images/title1.PNG'
import T1 from '../asset/images/tree1.png'
import T2 from '../asset/images/tree6.png'
import T3 from '../asset/images/tree7.png'
import T4 from '../asset/images/tree9.png'

function StartingPage() {
  return (
    <section className='hero-container'>
        {/* <h1 className='title'>Smart farm<br/>management system</h1> */}
        <img className="title1" src={Ti1} alt="Ti1"/>
        <h3 className="explain">스마트 농장 관리 시스템<br/>농장을 추가해 시작해보세요!</h3>

        <img className="img1" src={T1} alt="T1"/>
        <img className="img2" src={T2} alt="T2"/>
        <img className="img3" src={T3} alt="T3"/>
        <img className="img4" src={T4} alt="T4"/>

        <div className="hero-btns">
            <Button 
                className='addfarm-btns' 
                buttonStyle='btn--inline'
                butttonSize='btn--large'
            >
                Add Farm
            </Button>   

            <Button 
                className='about-btns' 
                buttonStyle='btn--outline'
                butttonSize='btn--large'
            >
                About
            </Button> 
        </div>
    </section>
  )
}

export default StartingPage