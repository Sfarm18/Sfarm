import React from 'react';
import '../App.css'
import AuthForm from '../components/AuthForm';
import AuthTemplate from '../components/AuthTemplate';
import SlideBanner from '../components/Slidebanner';

function SignUp() {
    return (
        <>
            <SlideBanner/>
            <AuthTemplate>
                <AuthForm type='signup' />
            </AuthTemplate>
        
        </>
    );
}

export default SignUp;