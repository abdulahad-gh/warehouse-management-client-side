import React from 'react';

const PageNotFound = () => {
    return (
        <div className='h-screen grid md:grid-cols-2 md:gap-10 items-center	justify-items-center bg-red-200 overflow-hidden	'>
            <p className='text-5xl text-red-500 mt-20 pl-10'>404!!Page NotFound <br />try to correct... <span className='text-cyan-500	'>Thank You</span></p>
            <div>
                <img width={500} src="https://i.ibb.co/mD6wwTX/images-removebg-preview.png" alt="" />
            </div>
        </div>
    );
};

export default PageNotFound;