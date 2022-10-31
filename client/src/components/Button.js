import React from 'react'
import './Button.css'
import { Link } from 'react-router-dom'

const STYLES = ['btn--primary', 'btn--outline']

const SIZES = ['btn--medium', 'btn--large']

export const Button = ({
    pos,
    children, 
    type, 
    onClick, 
    buttonStyle, 
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle 
    : STYLES[0]

    const checkButtonSize = SIZES.includes(buttonSize)
    ? buttonSize
    :SIZES[0]

    if(pos === 'login'){
    return (
        <Link to='/login' className='btn_mobile'>
            <button
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onClick}
            type={type}
            >
                {children}
            </button>
        
        </Link>
    )
    }
    else if(pos === 'mypage'){
        return (
            <Link to='/mypage' className='btn_mobile'>
                <button
                className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                onClick={onClick}
                type={type}
                >
                    {children}
                </button>
            
            </Link>
        )
    }
};