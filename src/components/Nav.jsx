import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Nav(props) {
    return (
        <div>
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/contact'}>Contact</Link>
            <Link to={'/dashboard'}>Dashboard</Link>
            <Outlet/>
        </div>
    );
}

export default Nav;