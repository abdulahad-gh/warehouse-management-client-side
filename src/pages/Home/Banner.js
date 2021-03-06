import React from 'react';

const Banner = () => {
    return (
        <div className='max-w-90'>
            <div className='flex flex-col gap-[2.75rem]  items-center mt-28'>
                <div>
                    <h1 className='text-4xl'>Laptops Warehouse</h1>
                    <h2 >happy stocking!!</h2>
                </div>
                <img className=' object-fill h-80 md:h-80 max-w-90 lg:w-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLbw-OhUu256Sqad-xkYVDi0rUpIyV-Zwbrw&usqp=CAU" alt="" />
                <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 my-cursor">See Stock Laptops</button>
            </div>



        </div>
    );
};

export default Banner;