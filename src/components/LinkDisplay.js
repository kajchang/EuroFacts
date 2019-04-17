import React from 'react';
import PropTypes from 'prop-types';
import { Link, navigateTo } from 'gatsby';
import { Card, CardTitle, CardBody, Button } from 'reactstrap';

import { isMobile } from '../utils'

const LinkDisplay = ({ data, numShown, pathname, previewComponent }) => {
    const PreviewComponent = require(`./${ previewComponent }`).default;

    return (
        <Card style={ isMobile() ? { minWidth: '100%', marginTop: 10 }: { marginRight: 10, marginTop: 10, minWidth: 'calc(33% - 10px)' } }>
            <CardBody>
                <CardTitle>
                    <Link to={ pathname } title={ pathname.charAt(1).toUpperCase().concat(pathname.slice(2)) }>
                        <h3>{ pathname.charAt(1).toUpperCase().concat(pathname.slice(2)) }</h3>
                    </Link>
                </CardTitle>
                {
                    data.slice(0, numShown).map((data, idx) => (
                        <PreviewComponent key={ idx } data={ data } size='small'/>
                    ))
                }
                <Button size='sm' onClick={ () => navigateTo(pathname) } style={ { marginTop: 10 } } title={ pathname.charAt(1).toUpperCase().concat(pathname.slice(2)) }>
                    See More
                </Button>
            </CardBody>
        </Card>
    );
}

LinkDisplay.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired
    })),
    numShown: PropTypes.number,
    pathname: PropTypes.string.isRequired,
    previewComponent: PropTypes.string.isRequired
};

export default LinkDisplay;
