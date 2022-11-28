import React from 'react'
import { Button } from './Button';
import './HeroSection.css'


function HeroSection() {
  return (
    <section className='hero-container'>
        <h1 className='title'>Smart farm</h1>
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