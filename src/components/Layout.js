import React, { Fragment } from 'react';
import { Link } from 'gatsby';
import { Container, Nav, NavItem } from 'reactstrap';
import { globalHistory } from '@reach/router';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/layout.css';

const Layout = ({ children }) => (
    <Fragment>
        <Nav className='bg-dark'>
            <NavItem style={ { padding: 30 }}>
                <h1 style={ { display: 'inline' }}><Link to='/' style={ { fontFamily: 'scriptina' } }>Louis</Link></h1>
                {
                    globalHistory.location.pathname.replace('louis/', '').replace(/\/$/g, '') !== '/' ? globalHistory.location.pathname.replace('louis/', '').replace(/\/$/g, '').split('/')
                        .map((path, idx, array) => <Link key={ idx } to={ array.slice(0, idx + 1).join('/') }>{ path
                            .split('-')
                            .map(word => word.charAt(0).toUpperCase().concat(word.slice(1)))
                            .join(' ') } </Link>)
                        .reduce((prev, cur) => [prev, ' > ', cur]) : null
                }
            </NavItem>
        </Nav>
        <Container fluid={ true } className='bg-light'>
            { children }
        </Container>
    </Fragment>
);

export default Layout;
