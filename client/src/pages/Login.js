import React from 'react';
import '../App.css'
import AuthForm from '../components/AuthForm';
import AuthTemplate from '../components/AuthTemplate';
import SlideBanner from '../components/Slidebanner';

function Login() {
    return (
        <>
            <SlideBanner/>
            <AuthTemplate>
                <AuthForm type='login' />
            </AuthTemplate>
        
        </>
    );
}

export default Login;