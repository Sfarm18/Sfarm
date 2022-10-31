import React from 'react';
import '../../App.css'
import AuthForm from '../AuthForm';
import AuthTemplate from '../AuthTemplate';
import SlideBanner from '../Slidebanner';

function Register() {
    return (
        <>
            <SlideBanner/>
            <h1 className="login">Register</h1>

            <AuthTemplate>
                <AuthForm type='register' />
            </AuthTemplate>
        
        </>
    );
}

export default Register;