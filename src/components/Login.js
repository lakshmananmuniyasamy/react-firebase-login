import React, { useState } from 'react'
import { auth, googleAuthProvider } from '../Firebase';
import '../index.css'
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link, useNavigate } from 'react-router-dom';
import { BsFacebook } from "react-icons/bs";
// import GoogleButton from 'react-google-button'
import { signInWithPopup, FacebookAuthProvider } from 'firebase/auth';
import { FcGoogle } from "react-icons/fc";
// import { signInWithPopup } from 'firebase/auth';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const result = await auth.signInWithEmailAndPassword(email, password);
            console.log(email + " " + password);
            localStorage.setItem('token', result.user.accessToken);
            localStorage.setItem('user', JSON.stringify(result.user));
            navigate("/");

        } catch (error) {
            console.log(error);
            if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
                alert("Invalid email or password. Please try again.");
            } else {
                alert("Login failed. Please try again.");
            }
        }

    }

    const handleSignInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, googleAuthProvider);
            console.log(result);
            localStorage.setItem('token', result.user.accessToken);
            localStorage.setItem('user', JSON.stringify(result.user));
            navigate("/");

        } catch (err) {
            console.log(err);
        }

    }

    const handleSignInWithFacebook = async () => {
        try {
          const result = await signInWithPopup(auth, new FacebookAuthProvider());
          console.log(result);
          localStorage.setItem('token', result.user.accessToken);
          localStorage.setItem('user', JSON.stringify(result.user));
          navigate("/");
        } catch (err) {
          console.log(err);
        }
      }
    return (
        <div className='background-image'>
            <div className='container p-5 border rounded shadow text-center mt-5 form-container' style={{ width: '22rem' }}>
                <h2 className='mb-3 fw-bolder fs-1 text-light' >Login</h2>
                <div className='mb-5 bg-secondary rounded' style={{ width: "50px", height: "5px", marginLeft: "6.5rem" }}></div>
                <form onSubmit={handleLogin} className='f1'>
                    <MdOutlineMailOutline className='text-light fs-4' /> <input className='mb-4' type="email"
                        placeholder='Enter your Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} /><br />

                    <RiLockPasswordLine className='text-light fs-4' /> <input className='mb-4' type="password"
                        placeholder='Enter your password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                    <div className="checkbox mb-3 text-light">
                        <label>
                            <input type="checkbox" value="remember-me" /> Remember me
                        </label>
                    </div>

                    <button className='btn btn-primary mb-3 ps-4 pe-4' type='submit'>Login</button><br />

                    <p>to create a new account? <Link to="/register">click here</Link></p>

                    <p className='text-light'>Or sign in with:</p>

                    <div>
                        <FcGoogle className='fs-3' onClick={handleSignInWithGoogle} />
                        &nbsp;
                        <BsFacebook className='fs-3' style={{ color: 'blue' }} onClick={handleSignInWithFacebook} />
                        {/* <GoogleButton  /> */}
                    </div>
                </form>
            </div>
        </div>



    )
}


