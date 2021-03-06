import React, { Fragment } from 'react';
import { Link } from 'gatsby';
import { Container, Nav, NavItem, NavLink } from 'reactstrap';

import { getTruePath, isMobile, unslugify } from '../utils';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/layout.css';

const Layout = ({ children }) => (
    <Fragment>
        <Nav className='bg-dark' style={ { padding: 15 }}>
            <NavItem>
                <img src={ require('../images/media/Europe.png') } alt='Europe' title='Europe' height='50'/>
                <h1 style={ { display: 'inline', verticalAlign: 'middle' }}><Link to='/' style={ { fontFamily: 'scriptina' } } title='Louis'>Louis</Link></h1>
                <p>
                    {
                        getTruePath() !== '/' ? getTruePath().replace(/\/$/g, '').split('/')
                            .map((path, idx, array) => <Link key={ idx } to={ '/'.concat(array.slice(0, idx + 1).join('/')) } title={ unslugify(path) }>
                                { unslugify(path) }
                            </Link>)
                            .reduce((prev, cur) => [prev, ' > ', cur]) : null
                    }
                </p>
            </NavItem>
        </Nav>
        <Container fluid={ true } className='bg-light'>
            { children }
        </Container>
        {
            !isMobile() ? (
                <Nav className='bg-dark footer'>
                    <NavLink href='https://github.com/kajchang/louis' style={ { paddingTop: 20, paddingBottom: 20 } } title='Github'>
                        Source
                    </NavLink>
                </Nav>
            ) : null
        }
    </Fragment>
);

export default Layout;
