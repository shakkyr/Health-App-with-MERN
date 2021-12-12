import React,{useState, useEffect} from 'react';
import {Link, useHistory } from 'react-router-dom';
import {showErrorMessage} from './helpers/message'
import { loader } from './helpers/loading';
import { setAuthentication, isAuthenticated } from './helpers/auth.helper';
import './Signin.css'
import isEmpty from 'validator/lib/isEmpty';
import isEmail from 'validator/lib/isEmail';
import { signin } from '../api/auth.api';



const Signin = () => {
    let history  = useHistory ();

    useEffect(()=>{
        if(isAuthenticated() && isAuthenticated().role === 1) {
            history.push('/admin/dashboard');
        } else if(isAuthenticated() && isAuthenticated().role === 0) {
            history.push('/user/dashboard');
        }

    },[history])


    const [formData, setFormData] = useState({
        email:'',
        password:'',
        errorMsg:false,
        loading:false
    })

    const {email,password,errorMsg,loading} = formData;

    const handleChange = (e)=> {
        setFormData({
            ...formData ,
            [e.target.name] : e.target.value,
            errorMsg:''
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // client-side validation
        if (isEmpty(email) || isEmpty(password)) {
            setFormData({
                ...formData,
                errorMsg: 'All fields are required',
            });
        } else if (!isEmail(email)) {
            setFormData({
                ...formData,
                errorMsg: 'Invalid email',
            });
        } else {
            const { email, password } = formData;
            const data = { email, password };

            setFormData({ ...formData, loading: true });

            signin(data)
                .then((response) => {
                    setAuthentication(response.data.token, response.data.user)

                    if(isAuthenticated() && isAuthenticated().role === 1) {
                        console.log('redirect to admin dashboard');
                        history.push('/admin/dashboard');
                    } else {
                        console.log('redirect to user dashboard');
                        history.push('/user/dashboard');
                    }
                })
                .catch((err) => {
                    console.log('signin api function error: ', err);
                    setFormData({
                        ...formData,
                        loading: false,
                        errorMsg: err.response.data.errorMessage
                    })
                });
        }
    };

    const showSigninForm = () => (
        <form className='signup-form' onSubmit={handleSubmit} noValidate>
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
            {/* password */}
            <div className='form-group input-group'>
                <div className='input-group-prepend'>
                
                </div>
                <input
                    name='password'
                    value={password}
                    className='form-control'
                    placeholder='password'
                    type='password'
                    onChange={handleChange}
                />
            </div>
            {/* signin button */}
            <div className='form-group'>
                <button style={{justifyContent:'center'}} type='submit' className='input-group btn btn-primary btn-block'>
                    Signin
                </button>
            </div>
            {/* already have account */}
            <p className='text-center text-black'>
                Don't have an account? <Link to='/signup'>Register here</Link>
            </p>
        </form>
    );
    return (
        <div className='signin-container'>
            <div className='row px-3 vh-100'>
                <div className='col-md-5 mx-auto align-self-center'>
                    {errorMsg && showErrorMessage(errorMsg)}
                    {loading && (
                        <div className='text-center pb-4'>{loader()}</div>
                    )}
                    {showSigninForm()}
                </div>
            </div>
        </div>
    );
};

export default Signin
