import React, { useContext, useState } from 'react'
import { UserContext } from './Main';
import Login from '../forms/Login';
import Register from '../forms/Register';
import '../css/profile.css'

export default function Profile() {

    const value=useContext(UserContext)

    console.log(value);

    function Authenticated() {
        
    }

    function InAuthenticated() {
        const [isSignup,setIsSignup]=useState(false)

        
        return (
            <div className='inauthenticated'>
                <div className="auth-header">
                    <div className="btns">
                        <button className={isSignup ? 'inactive' : 'active'} onClick={()=>setIsSignup(false)}>&lt;Login/&gt;</button>
                        <button className={isSignup ? 'active': 'inactive'} onClick={()=>setIsSignup(true)}>&lt;Register/&gt;</button>
                    </div>
                    <div className="form-div">
                        {isSignup ? <Register /> : <Login />}
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            {value.isAuth? <Authenticated/> : <InAuthenticated />}
        </>
    )
}