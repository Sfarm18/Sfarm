import React from 'react'
import { Button } from './Button';
import './HeroSection.css'
import T1 from '../asset/images/tree1.png'
import T2 from '../asset/images/tree6.png'
import T3 from '../asset/images/tree7.png'
import T4 from '../asset/images/tree9.png'

function HeroSection() {
  return (
    <section className='hero-container'>
        <h1 className='title'>Smart farm</h1>
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

export default HeroSection