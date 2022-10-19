import React from 'react'
import { Button } from './Button';
import './HeroSection.css'


function HeroSection() {
  return (
    <section className='hero-container'>
        <h1>Smart farm</h1>
        <h1>management system</h1>
        <p>What are you doing?</p>
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