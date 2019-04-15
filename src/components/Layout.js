import React, { Fragment } from 'react';
import { Link } from 'gatsby';
import { Container, Nav, NavItem, NavLink } from 'reactstrap';
import { globalHistory } from '@reach/router';

import { pathPrefix } from '../../gatsby-config';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/layout.css';

const getTruePath = () => globalHistory.location.pathname.replace(pathPrefix, '');
const unslugify = word => word
    .split('-')
    .map(word => word.charAt(0).toUpperCase().concat(word.slice(1)))
    .join(' ');

const Layout = ({ children }) => (
    <Fragment>
        <Nav className='bg-dark' style={ { padding: 30 }}>
            <NavItem>
                <img src={ require('../images/media/Europe.png') } alt='Europe' title='Europe' height='50'/>
                <h1 style={ { display: 'inline', verticalAlign: 'middle' }}><Link to='/' style={ { fontFamily: 'scriptina' } } title='Louis'>Louis</Link></h1>
                <span style={ { verticalAlign: 'middle', paddingTop: 7.5 } }>
                    {
                        getTruePath() !== '/' ? getTruePath().replace(/\/$/g, '').split('/')
                            .map((path, idx, array) => <Link key={ idx } to={ '/'.concat(array.slice(0, idx + 1).join('/')) } title={ unslugify(path) }>
                                { unslugify(path) }
                            </Link>)
                            .reduce((prev, cur) => [prev, ' > ', cur]) : null
                    }
                </span>
            </NavItem>
        </Nav>
        <Container fluid={ true } className='bg-light'>
            { children }
        </Container>
        <Nav className='bg-dark footer'>
            <NavLink href='https://github.com/kajchang/louis' style={ { paddingTop: 20, paddingBottom: 20 } } title='Github'>
                Source
            </NavLink>
        </Nav>
    </Fragment>
);

export default Layout;
