import React from 'react';
import '../App.css'
import AuthTemplate from '../components/AuthTemplate';
import SlideBanner from '../components/Slidebanner';
import LoginForm from '../components/LoginForm';

function Login() {
    return (
        <>
            <SlideBanner/>

            <AuthTemplate>
                <LoginForm />
            </AuthTemplate>
        
        </>
    );
}

export default Login;