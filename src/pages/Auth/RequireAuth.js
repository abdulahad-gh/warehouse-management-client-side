import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../firebase-init';

function RequireAuth({ children }) {
    const [user, loading] = useAuthState(auth)
    let location = useLocation();
    if (loading) {

        return
    }
    if (!user) {
        return <Navigate to="/signin" state={{ from: location }} replace />;
    }

    return children;
}

export default RequireAuth;