import firebase from '../Firebase';
import React, { useState } from 'react';
import {  auth } from '../Firebase';
import { Link, useNavigate } from 'react-router-dom';
import { RiLockPasswordLine } from 'react-icons/ri';
import { MdOutlineMailOutline } from 'react-icons/md';
import { FaRegUser } from "react-icons/fa";

export const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await user.updateProfile({
                displayName: name
            });
            console.log("Registered successfully");
            alert("Registered successfully. Please login");
            navigate("/login");

            const firestore = firebase.firestore();
            await firestore.collection('users').doc(user.uid).set({
                name: name,
                email: email

            });


        } catch (error) {
            console.error("Error occurred during registration:", error);
            if (error.code === 'auth/email-already-in-use') {
                alert("Email is already in use. Please try with a different email.");
            } else {
                alert("Registration failed. Please try again.");
            }
        }
    };

    return (
        <div className='background-image'>
            <div className='container p-5 border rounded shadow text-center mt-5 form-container' style={{ width: '22rem' }}>
                <h2 className='mb-3 fw-bolder fs-1 text-light' >Register</h2>
                <div className='mb-5 bg-secondary rounded' style={{ width: "50px", height: "5px", marginLeft: "6.5rem" }}></div>
                <form onSubmit={handleRegister} className='f1'>
                    <FaRegUser className='text-light fs-4' />< input className='mb-4' type="text"
                        placeholder='Enter your Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)} required /> <br />
                    <MdOutlineMailOutline className='text-light fs-4' /> <input className='mb-4' type="email"
                        placeholder='Enter your Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} /><br />

                    <RiLockPasswordLine className='text-light fs-4' /> <input className='mb-4' type="password"
                        placeholder='Enter your password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                    

                    <button className='btn btn-primary mb-3 ps-4 pe-4' type='submit'>Register</button><br />

                    <p>Do you have any account?<Link to="/login">Login</Link></p>

                </form>
            </div>
        </div>

    );
};
