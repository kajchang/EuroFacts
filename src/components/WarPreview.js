import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Flag from './Flag';
import TextParser from './TextParser';

import { join } from 'path';
import slugify from 'slugify';

const WarPreview = ({ data, size }) => {
    const { name, start, end, participants, desc } = data;

    let Preview;
    let dividerIdx = 0;

    switch (size) {
        case 'inline':
            Preview = <span style={ { display: 'block' } }>
                <img key={ dividerIdx++ } src={ require(`../images/icons/CrossedSwords.png`) } alt='CrossedSwords' className='spaced-icon'/>
                { name } <span style={ { fontSize: 10 } }>({ start }-{ end })</span>
            </span>;
            break;
        case 'small':
            Preview = <span style={ { display: 'block' } }>
                { name } <span style={ { fontSize: 10 } }>({ start }-{ end })</span>
                <br/>
                {
                    participants
                        .map(group => group.map((participant, idx) =>
                            <Flag key={ idx } countryName={ participant }/>
                        ))
                        .reduce((prev, curr) => [prev, <img key={ dividerIdx++ } src={ require(`../images/icons/CrossedSwords.png`) } alt='CrossedSwords' className='spaced-icon'/>, curr])
                }
            </span>;
            break;
        case 'medium':
            Preview = <span style={ { display: 'block' } }>
                { name } <span style={ { fontSize: 10, paddingRight: 5 } }>({ start }-{ end })</span>
                {
                    participants
                        .map(group => group.map((participant, idx) =>
                            <Flag key={ idx } countryName={ participant }/>
                        ))
                        .reduce((prev, curr) => [prev, <img key={ dividerIdx++ } src={ require(`../images/icons/CrossedSwords.png`) } alt='CrossedSwords'className='spaced-icon'/>, curr])
                }
                <span style={ { display: 'block', fontSize: 12.5 } }>
                    <TextParser text={ desc }/>
                </span>
            </span>;
            break;
        default:
            Preview = <span>Choose a valid size option: 'inline', 'small' or 'medium'</span>;
            break;
    }

    return (
        <Link to={ join('/', 'wars', slugify(name, { lower: true })) } title={ name }>
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
    }).isRequired,
    size: PropTypes.string.isRequired
}

export default WarPreview;
