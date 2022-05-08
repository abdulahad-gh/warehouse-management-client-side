import React, { useEffect, useState } from 'react';
import { useAuthState, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase-init';

const Signin = () => {
    const [signWithEmailAndPass, , , hookError] = useSignInWithEmailAndPassword(auth)
    const [signWithGoogle, , , googleError] = useSignInWithGoogle(auth)

    const [userLogInInfo, setUserLogInInfo] = useState({
        email: '',
        password: ''
    })
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
        const error = hookError || googleError
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
                <button type="submit" class="mx-auto block mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">SignIn</button>
                <br />
                <button onClick={() => signWithGoogle()} type="button" class="w-full text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
                    <svg class="w-4 h-4 mr-2 -ml-1 " aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
                    Sign in with Google
                </button>
            </form>

        </div>
    );
};

export default Signin;