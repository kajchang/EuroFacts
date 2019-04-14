import React from 'react';
import { Link } from 'gatsby'

const Layout = ({ children }) => (
    <div>
        <Link to='/'>
            <h1>EuroFacts</h1>
        </Link>
        { children }
    </div>
);

export default Layout;
