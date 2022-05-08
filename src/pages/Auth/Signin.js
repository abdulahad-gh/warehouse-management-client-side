import React, { useEffect, useState } from 'react';
import { useAuthState, useSignInWithEmailAndPassword, useSignInWithGithub } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase-init';

const Signin = () => {
    const [signWithEmailAndPass, , , hookError] = useSignInWithEmailAndPassword(auth)
    const [signInWithGithub, , , githubError] = useSignInWithGithub(auth);


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
        const error = hookError || githubError
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

    const handleLogInUser = e => {
        e.preventDefault()
        signWithEmailAndPass(userLogInInfo.email, userLogInInfo.password)
    }
    return (

        <div className='h-screen  items-center flex px-4'>
            <form className='w-80 mx-auto' onSubmit={handleLogInUser}>
                <h2 className='text-center text-3xl mb-4 md:mb-8'>SignIn</h2>

                <div className="mb-6">
                    <input onChange={handleUserLogInEmail} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="email" required="" />
                </div>
                <div className="mb-6">

                    <input onChange={handleUserLogInPass} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='password' required="" />
                </div>
                <div>
                    <span>already account? please <Link to='signup'>SignUp</Link></span>
                </div>
                <button type="submit" className="mx-auto block mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">SignIn</button>
                \
                <br />
                <button onClick={() => signInWithGithub()} type="button" className="w-full text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2">
                    <svg className="w-4 h-4 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
                    Sign in with Github
                </button>
            </form>
        </div>
    );
};

export default Signin;