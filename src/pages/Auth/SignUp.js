import React, { useEffect, useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase-init';

import 'react-toastify/dist/ReactToastify.css';


const SignUp = () => {
    const [userSignUpInfo, setUserSignUpInfo] = useState({
        email: '',
        password: '',
        confirmPass: ''
    })
    const [createUserWithEmailAndPassword, user, loading, hookError] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true })
    const [errors, setErrors] = useState({
        email: '',
        password: '',
    })

    const navigate = useNavigate()
    const location = useLocation()
    const handleUserSignUpEmail = e => {
        const emailRegex = /\S+@\S+\.\S+/;
        if (emailRegex.test(e.target.value)) {
            setUserSignUpInfo({ ...userSignUpInfo, email: e.target.value })
            setErrors({ ...errors, email: '' })

        }
        else {
            setErrors({ ...errors, email: 'your email is unvalid' })
            setUserSignUpInfo({ ...userSignUpInfo, email: '' })
        }

    }
    const handleUserSignUpPass = e => {
        const passRegex = /^.{6,}$/;
        if (passRegex.test(e.target.value)) {
            setUserSignUpInfo({ ...userSignUpInfo, password: e.target.value })

            setErrors({ ...errors, password: '' })
        }
        else {
            setErrors({ ...errors, password: 'passowrd should be 6 charchter' })
            setUserSignUpInfo({ ...userSignUpInfo, password: '' })
        }

    }
    const handleUserSignUpConfirmPass = e => {

        if (e.target.value === userSignUpInfo.password) {
            setUserSignUpInfo({ ...userSignUpInfo, confirmPass: e.target.value })
            setErrors({ ...errors, password: "" })
        }
        else {
            setErrors({ ...errors, password: 'your password not mathed' })
            setUserSignUpInfo({ ...userSignUpInfo, confirmPass: "" })
        }

    }

    useEffect(() => {
        if (hookError) {
            switch (hookError?.code) {
                case "auth/invalid-email":
                    toast('your email invalid. please proive valid email ')
                    break;
                case "auth/ivalid-pass":
                    toast('your passowrd is wrong')
                    break;
                default:
                    toast('something wrong...')


            }
        }
    }, [hookError])

    const handleCreateUser = e => {
        e.preventDefault()
        createUserWithEmailAndPassword(userSignUpInfo.email, userSignUpInfo.password)
        toast('account created')

    }
    console.log(user);
    const from = location.state?.from?.pathname || "/"
    useEffect(() => {
        if (user) {
            navigate(from)
        }
    }, [user, from, navigate])



    return (
        <div className='h-screen  items-center flex px-4'>
            <form className='w-80 mx-auto' onSubmit={handleCreateUser}>
                <h2 className='text-center text-3xl mb-4 md:mb-8'>SignUp Now</h2>

                <div class="mb-6">
                    <input onChange={handleUserSignUpEmail} type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="email" required="" />
                    <p className='text-red-600'>{errors?.email}</p>
                </div>
                <div class="mb-6">

                    <input onChange={handleUserSignUpPass} type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='password' required="" />
                    <p className='text-red-600'>{errors?.password}</p>

                </div>
                <div class="mb-6">

                    <input onChange={handleUserSignUpConfirmPass} type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='confirm password' required="" />
                </div>
                <div>
                    <span>already account? please <Link to='signin'>SignIn</Link></span>
                </div>
                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">SignUp</button>
            </form>

        </div>
    );
};

export default SignUp;