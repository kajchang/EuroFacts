import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import { join } from 'path';
import slugify from 'slugify';

const WarPreview = ({ data, size }) => {
    const { name, start, end, participants, desc } = data;

    let Preview;

    switch (size) {
        case 'tiny':
            Preview = <span style={ { display: 'block' } }>
                { name } <span style={ { fontSize: 10 } }>({ start }-{ end })</span>
                <br/>
                {
                    participants
                        .map(group => group.map((participant, idx) =>
                            <img key={ idx } src={ require(`../images/flags/${ participant }.png`) } alt={ participant } style={ { paddingRight: 2.5 } } />
                        ))
                        .reduce((prev, curr) => [prev, <img src={ require(`../images/icons/CrossedSwords.png`) } alt='CrossedSwords' style={ { paddingRight: 2.5 } } />, curr])
                }
            </span>;
            break;
        case 'medium':
            Preview = <span style={ { display: 'block' } }>
                { name } <span style={ { fontSize: 10, paddingRight: 5 } }>({ start }-{ end })</span>
                {
                    participants
                        .map(group => group.map((participant, idx) =>
                            <img key={ idx } src={ require(`../images/flags/${ participant }.png`) } alt={ participant } style={ { paddingRight: 2.5 } } />
                        ))
                        .reduce((prev, curr) => [prev, <img src={ require(`../images/icons/CrossedSwords.png`) } alt='CrossedSwords' style={ { paddingRight: 2.5 } } />, curr])
                }
                <span style={ { display: 'block', fontSize: 12.5 } }>{ desc }</span>
            </span>;
            break;
        default:
            Preview = <span>Choose a valid size option: tiny or medium</span>;
            break;
    }

    return (
        <Link to={ join('/', 'wars', slugify(name, { lower: true })) }>
            { Preview }
        </Link>
    );
}

WarPreview.propTypes = {
    data: PropTypes.shape({
        name: PropTypes.string.isRequired,
        start: PropTypes.number.isRequired,
        end: PropTypes.number.isRequired,
        participants: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
        desc: PropTypes.string.isRequired
    }),
    size: PropTypes.string.isRequired
}

export default WarPreview;
