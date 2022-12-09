import React from 'react';
import '../App.css'
import AuthTemplate from '../components/AuthTemplate';
import CreateAccountForm from '../components/CreateAccountForm'
import SlideBanner from '../components/Slidebanner';

function SignUp() {
    return (
        <>
            <SlideBanner/>
            
            <AuthTemplate>
                <CreateAccountForm />
            </AuthTemplate> 
        </>
    );
}

export default SignUp;