
// import backgroundForLR from '../Assets/backgroundForLR.jpg';
/*<div className="login-register" style={{ backgroundImage: `url(${backgroundForLR})` }}*/
import React, { useState } from 'react'
import './LoginRegister.css';
import { FaEnvelope, FaUserCheck, FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import DashBoard from '../DashBoard/DashBoard';


 

{/* correction */}
const LoginRegister = () => {
    const [isActive, setIsActive] = useState(false);
    const navigate = useNavigate();  // to do: Continue >>> DashBoard

    const registerLink = () => {
        setIsActive(true);
    };

    const loginLink = () => {
        setIsActive(false);
    };

    const forgotpassLink = () => {
        setIsActive(true);
    };

    //new change under construction
    const handleContinue = (e) => {
        e.preventDefault(); // Prevent the form from submitting
        navigate('/dashboard'); // Navigate to the Dashboard page
    };  

    return (

        <div className={`wrapper-log ${isActive ? 'active' : ''}`}> {/* correction */}
        
            {/* LOGIN */}
            <div className='form-box login'>    {/* for the form box */}
                <form action=''>
                    <h1>Login with your Credentials</h1>
                    
                    {/* EMAIL */}
                    <div className='input-box'>
                        <input type='email' placeholder='enter your email' required />
                        <FaEnvelope className='icon'/>
                    </div>

                    {/* ID */}
                    <div className='input-box'>
                        <input type='password'   
                        placeholder='enter your ID' required />  {/* type ki pass e thakbe? */}
                        <FaUserCheck className='icon'/>
                    </div>
                    
                    <div className='remember-forget'>
                        <label>
                        <input type='checkbox' />Remember Me</label>
                        <a href='#' onClick={forgotpassLink}>Forgot Password?</a>
                    </div>

                    <button type='submit'>Login</button>

                    <div className='register-link'>
                        <p>Don't have an account?
                            <a href="#" onClick={registerLink}> Sign up here.</a>
                        </p>
                    </div>
                </form>
            </div>


            {/* REGISTRATION */}

            <div className='form-box register'> {/* for the form box */}
                <form action=''>
                    <h1>Welcome to the Platform</h1>

                    {/* NAME */}
                    <div className='input-box'>
                        <input type='text' placeholder='enter your name' required />
                        <FaUser className='icon'/>
                    </div>

                    {/* EMAIL */}
                    <div className='input-box'>
                        <input type='email' placeholder='enter your email' required />
                        <FaEnvelope className='icon'/>
                    </div>

                    {/* PASSWORD */}
                    <div className='input-box'>
                        <input type='password' placeholder='enter your password' required />
                        <FaLock className='icon'/>
                    </div>
                    
                    {/* CHECK-BOX */}
                    <div className='remember-forget'>
                        <label>
                        <input type='checkbox' />I agree to the terms & conditions</label>
                    </div>

                    {/* <button type='submit'>Continue</button> */}
                    <button onClick={handleContinue}>
                    Continue

                    </button>


                    <div className='register-link'>
                        <p>Already have an account?
                            <a href="#" onClick={loginLink}> Sign in here.</a>
                        </p>
                    </div>
                </form>
                
            </div>
           
        </div>
        
    );
};

export default LoginRegister;