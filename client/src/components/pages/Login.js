import React from 'react';
import '../../App.css'
import AuthForm from '../AuthForm';
import AuthTemplate from '../AuthTemplate';
import SlideBanner from '../Slidebanner';

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