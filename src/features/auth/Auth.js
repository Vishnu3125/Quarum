import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, signup } from './authSlice'
import Login from './comps/Login';
import Signup from './comps/Signup';

const Auth = () => {
    const auth = useSelector((state) => state.auth.value)
    const dispatch = useDispatch()
    
    return(
        <div>
        {auth ? <Login></Login> : <Signup></Signup>}  
        </div>
    )
}

export default Auth;