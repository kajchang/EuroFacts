import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Card, CardTitle, CardText, CardBody, Button } from 'reactstrap';

import slugify from 'slugify';
import { join } from 'path';

const LinkDisplay = ({ data, numShown, path }) => {
    const [shown, setShown] = useState(numShown || 5);

    return (
        <Card>
            <CardBody>
                <CardTitle><h3>Wars</h3></CardTitle>
                {
                    data.slice(0, shown).map(({ name }) => (
                        <Link to={ join(path, slugify(name, { lower: true })) }>
                            <CardText style={ { color: 'black' } }>{ name }</CardText>
                        </Link>
                    ))
                }
                {
                    shown < data.length ? <Button onClick={ () => setShown(shown + 5) }>See More</Button> : null
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
    path: PropTypes.string.isRequired
};

export default LinkDisplay;
