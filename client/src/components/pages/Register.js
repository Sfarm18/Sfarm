import React from 'react';
import '../../App.css'
import AuthForm from '../AuthForm';
import AuthTemplate from '../AuthTemplate';
import SlideBanner from '../Slidebanner';

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