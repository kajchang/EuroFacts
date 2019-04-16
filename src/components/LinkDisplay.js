import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Card, CardTitle, CardBody, Button } from 'reactstrap';

const LinkDisplay = ({ data, numShown, pathname, previewComponent }) => {
    const [shown, setShown] = useState(numShown || 5);

    const PreviewComponent = require(`./${ previewComponent }`).default;

    return (
        <Card style={ { marginRight: 10 } }>
            <CardBody>
                <CardTitle>
                    <Link to={ pathname } title={ pathname.charAt(1).toUpperCase().concat(pathname.slice(2)) }>
                        <h3>{ pathname.charAt(1).toUpperCase().concat(pathname.slice(2)) }</h3>
                    </Link>
                </CardTitle>
                {
                    data.slice(0, shown).map((data, idx) => (
                        <PreviewComponent key={idx} data={data} size='tiny'/>
                    ))
                }
                {
                    shown < data.length ? <Button size='sm' onClick={ () => setShown(shown + 5) } style={ { marginTop: 10 } } >See More</Button> : null
                }
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
