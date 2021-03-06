import React from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import App from './App';
import PrivateRoute from './PrivateRoute';
import Login from './components/Login';
import Signup from './components/Signup';

const router = () => {
    return (
        <BrowserRouter>
            <div>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/signup">Signup</NavLink>
                <NavLink to="/login">Login</NavLink>
            </div>

            <PrivateRoute exact path="/" component={App} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
        </BrowserRouter>
    );
}

export default router;

