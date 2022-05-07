import React, { useEffect, useState } from 'react';
import { useAuthState, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase-init';

const Signin = () => {
    const [userLogInInfo, setUserLogInInfo] = useState({
        email: '',
        password: ''
    })
    const [signWithEmailAndPass, , , hookError] = useSignInWithEmailAndPassword(auth)
    const [errors, setErrors] = useState({
        email: '',
        password: '',
        others: ''
    })
    const [user] = useAuthState(auth)

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/"
    useEffect(() => {
        if (user) {
            navigate(from)
        }
    }, [user])



    const handleUserLogInEmail = e => {
        const emailRegex = /\S+@\S+\.\S+/;
        if (emailRegex.test(e.target.value)) {
            setUserLogInInfo({ ...userLogInInfo, email: e.target.value })
            setErrors({ ...errors, email: '' })

        }
        else {
            setErrors({ ...errors, email: 'your email is unvalid' })
            setUserLogInInfo({ ...userLogInInfo, email: '' })
        }

    }
    const handleUserLogInPass = e => {
        const passRegex = /^.{6,}$/;
        if (passRegex.test(e.target.value)) {
            setUserLogInInfo({ ...userLogInInfo, password: e.target.value })
            setErrors({ ...errors, password: '' })
        }
        else {
            setErrors({ ...errors, password: 'passowrd should be 6 charchter' })
            setUserLogInInfo({ ...userLogInInfo, password: '' })
        }

    }
    useEffect(() => {
        const error = hookError
        if (error) {
            switch (error?.code) {
                case "auth/invalid-email":
                    toast('your email invalid. please proive valid email ')
                    break;
                case "auth/ivalid-pass":
                    toast('your passowrd is wrong')
                    break;
                default:
                    toast('something wrong...')
                    break;

            }
        }
    }, [hookError])

    console.log(userLogInInfo)
    const handleLogInUser = e => {
        e.preventDefault()


        signWithEmailAndPass(userLogInInfo.email, userLogInInfo.password)


    }
    return (

        <div className='h-screen  items-center flex px-4'>
            <form className='w-80 mx-auto' onSubmit={handleLogInUser}>
                <h2 className='text-center text-3xl mb-4 md:mb-8'>SignIn</h2>

                <div class="mb-6">
                    <input onChange={handleUserLogInEmail} type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="email" required="" />
                </div>
                <div class="mb-6">

                    <input onChange={handleUserLogInPass} type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='password' required="" />
                </div>
                <div>
                    <span>already account? please <Link to='signup'>SignUp</Link></span>
                </div>
                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">SignIn</button>
            </form>

        </div>
    );
};

export default Signin;