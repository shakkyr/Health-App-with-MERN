import React, {useState, useEffect} from 'react'
import isEmail from 'validator/lib/isEmail';
import isEmpty from 'validator/lib/isEmpty';
import equals from 'validator/lib/equals';
import { isAuthenticated } from './helpers/auth.helper';
import { Link, useHistory } from 'react-router-dom';
import './Signup.css'
import {showErrorMessage, showSuccessMessage} from './helpers/message'
import { loader } from './helpers/loading';
import { signup } from '../api/auth.api';


const Signup = () => {
    let history = useHistory();

    useEffect(()=>{
        if(isAuthenticated() && isAuthenticated().role === 1) {
            history.push('/admin/dashboard');
        } else if(isAuthenticated() && isAuthenticated().role === 0) {
            history.push('/user/dashboard');
        }

    },[history])

    const [formData, setFormData] = useState({
        username : '',
        email : '',
        age:'',
        height:'',
        weight:'',
        password : '',
        confirmPassword : '',
        successMsg : false,
        errorMsg : false ,
        loading : false
    })
    const {username,email,age,height,weight,password,confirmPassword,successMsg,errorMsg,loading} = formData;

    const handleChange = (e) => {
            setFormData({
                ...formData,
                [e.target.name] : e.target.value,
                successMsg : '',
                errorMsg : ''
            })
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        if (isEmpty(username) || isEmpty(email) || isEmpty(password) || isEmpty(confirmPassword) || isEmpty(age) || isEmpty(height) || isEmpty(weight)){
            setFormData({
                ...formData, errorMsg : 'All fields are required'
            })
        } else if(!isEmail(email)){
            setFormData({
                ...formData, errorMsg : 'Invalid email'
            })
        }   else if(!equals(password, confirmPassword)){
            setFormData({
                ...formData, errorMsg : 'Passwords do not match'
            })
        } else {
            const {username,email,password,age,weight,height} = formData;
            const data = {username, email, password,age,weight,height};

            setFormData({
                ...formData, loading:true
            });
            signup(data).then((response) => {
                console.log('Axios signup success: ',response);
                setFormData({
                    username:'',
                    email:'',
                    age:'',
                    height:'',
                    weight:'',
                    password:'',
                    confirmPassword:'',
                    loading:false,
                    successMsg: response.data.successMessage
                })
            })
            .catch(err=> {
                console.log('axios signup error', err);
                setFormData({
                    ...formData , loading:false , errorMsg:err.response.data.errorMessage
                })
            })
        }

    }


    const showSignupForm = () => (
    <form className='signup-form' onSubmit={handleSubmit} noValidate>
    {/* username */}
    <div className='form-group input-group'>
        <div className='input-group-prepend'>
           
        </div>
        <input
            name='username'
            value={username}
            className='form-control'
            placeholder='Username'
            type='text'
            onChange={handleChange}
        />
    </div>
    {/* email */}
    <div className='form-group input-group'>
        <div className='input-group-prepend'>
          
        </div>
        <input
            name='email'
            value={email}
            className='form-control'
            placeholder='Email address'
            type='email'
            onChange={handleChange}
        />
    </div>
    {/* age */}
    <div className='form-group input-group'>
        <div className='input-group-prepend'>
          
        </div>
        <input
            name='age'
            value={age}
            className='form-control'
            placeholder='Age'
            type='number'
            min='0'
            onChange={handleChange}
        />
    </div>
    {/* height */}
    <div className='form-group input-group'>
        <div className='input-group-prepend'>
          
        </div>
        <input
            name='height'
            value={height}
            className='form-control'
            placeholder='Height'
            type='number'
            min='30'
            onChange={handleChange}
        />
    </div>
    {/* weight */}
    <div className='form-group input-group'>
        <div className='input-group-prepend'>
          
        </div>
        <input
            name='weight'
            value={weight}
            className='form-control'
            placeholder='Weight'
            type='number'
            min='0'
            onChange={handleChange}
        />
    </div>
    {/* password */}
    <div className='form-group input-group'>
        <div className='input-group-prepend'>
           
        </div>
        <input
            name='password'
            value={password}
            className='form-control'
            placeholder='Create password'
            type='password'
            onChange={handleChange}
        />
    </div>
    {/* confirmPassword */}
    <div className='form-group input-group'>
        <div className='input-group-prepend'>
            
        </div>
        <input
            name='confirmPassword'
            value={confirmPassword}
            className='form-control'
            placeholder='Confirm password'
            type='password'
            onChange={handleChange}
        />
    </div>
    {/* signup button */}
    <div className='form-group'>
        <button style={{justifyContent:'center'}} type='submit' className='input-group btn btn-primary btn-block'>
            Signup
        </button>
    </div>
    {/* already have account */}
    <p className='text-center text-black'>
        Have an account? <Link to='/signin'>Log In</Link>
    </p>
</form>
    )

    return (
        <div className="signup-container">
            <div className='row px-4 vh-100'>
                <div className='col-md-5 mx-auto align-self-center'>
                It's Very Important To Fill Up All The Data,
                For Better <span style={{color:'green', fontWeight:'900'}}>Health</span> Tracking Exprince
                    {showSignupForm()}
                    <div className="text-center">
                    {loading && loader()}

                    </div>
                    {successMsg && showSuccessMessage(successMsg)}
                    {errorMsg && showErrorMessage(errorMsg)}
                
                </div>

            </div>
        </div>
    )
}

export default Signup
