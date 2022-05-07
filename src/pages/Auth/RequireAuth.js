import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../firebase-init';

function RequireAuth({ children }) {
    const [user] = useAuthState(auth)
    let location = useLocation();

    if (!user) {
        return <Navigate to="/signin" state={{ from: location }} replace />;
    }

    return children;
}

export default RequireAuth;