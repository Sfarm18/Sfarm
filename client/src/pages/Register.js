import React from 'react';
import '../App.css'
import AuthForm from '../components/AuthForm';
import AuthTemplate from '../components/AuthTemplate';
import SlideBanner from '../components/Slidebanner';

function Register() {
    return (
        <>
            <SlideBanner/>
            <AuthTemplate>
                <AuthForm type='register' />
            </AuthTemplate>
        
        </>
    );
}

export default Register;