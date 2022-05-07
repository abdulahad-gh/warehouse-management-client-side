import React from 'react';
import { Link } from 'react-router-dom';

const Signin = () => {

    return (

        <div className='h-screen  items-center flex px-4'>
            <form className='w-80 mx-auto'>
                <h2 className='text-center text-3xl mb-4 md:mb-8'>SignIn</h2>

                <div class="mb-6">
                    <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="email" required="" />
                </div>
                <div class="mb-6">

                    <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='password' required="" />
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