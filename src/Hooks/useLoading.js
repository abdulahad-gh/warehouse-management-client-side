import React from 'react';
import Loading from 'react-loading';
import Spinner from '../pages/shared/Spinner';

const useLoading = (data) => {
    if (data) {
        return <Spinner />
    }
};

export default useLoading;