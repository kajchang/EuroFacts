import React, { Fragment } from 'react';
import { Link } from 'gatsby';
import { Container, Nav, NavItem } from 'reactstrap';
import { globalHistory } from '@reach/router';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/layout.css';

const Layout = ({ children }) => (
    <Fragment>
        <Nav className='bg-dark'>
            <NavItem>
                <NavItem style={ { padding: 10 }}>
                    <h2><Link to='/'>EuroFacts</Link>
                        {
                            globalHistory.location.pathname.replace('EuroFacts/', '') !== '/' ? globalHistory.location.pathname.replace('EuroFacts/', '').split('/')
                                .map((path, idx, array) => <Link key={ idx } to={ array.slice(0, idx + 1).join('/') }>{ path.replace(/-/g, ' ')
                                    .split(' ')
                                    .map(word => word.charAt(0).toUpperCase().concat(word.slice(1))).join(' ') } </Link>)
                                .reduce((prev, cur) => [prev, ' > ', cur]) : null
                        }
                    </h2>
                </NavItem>
            </NavItem>
        </Nav>
        <Container fluid={ true } className='bg-light'>
            { children }
        </Container>
    </Fragment>
);

export default Layout;
