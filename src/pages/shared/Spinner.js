import React from 'react';
import ReactLoading from 'react-loading';

const Spinner = () => {
    return (
        <div className='flex h-screen justify-center items-center'>
            <ReactLoading type={'bars'} color={'#000'} height={'20%'} width={'20%'} />

        </div>
    );
};

export default Spinner;