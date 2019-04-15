import React, { Fragment } from 'react';
import { Link } from 'gatsby';
import { Container, Nav, NavItem, NavLink } from 'reactstrap';
import { globalHistory } from '@reach/router';

import { pathPrefix } from '../../gatsby-config';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/layout.css';

const getTruePath = () => globalHistory.location.pathname.replace(pathPrefix, '');

const Layout = ({ children }) => (
    <Fragment>
        <Nav className='bg-dark' style={ { padding: 30 }}>
            <NavItem>
                <h1 style={ { display: 'inline' }}><Link to='/' style={ { fontFamily: 'scriptina' } }>Louis</Link></h1>
                {
                    getTruePath() !== '/' ? getTruePath().replace(/\/$/g, '').split('/')
                        .map((path, idx, array) => <Link key={ idx } to={ '/'.concat(array.slice(0, idx + 1).join('/')) }>{ path
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
        <Nav className='bg-dark footer'>
            <NavLink href='https://github.com/kajchang/louis' style={ { paddingTop: 20, paddingBottom: 20 } }>
                Source
            </NavLink>
        </Nav>
    </Fragment>
);

export default Layout;
