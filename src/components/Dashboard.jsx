import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard(props) {
    return (
        <div>
            <h1>This is dashboard</h1>
            <Link to={'/about'}>About</Link>
        </div>
    );
}

export default Dashboard;