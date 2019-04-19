import React from 'react';
import PropTypes from 'prop-types';
import { navigateTo } from 'gatsby';
import Flag from './Flag';

import slugify from 'slugify';
import { join } from 'path';

const CountryPreview = ({ data, size }) => {
    const { name } = data;

    let Preview;

    switch (size) {
        case 'inline':
            Preview = <span>
                <Flag countryName={ name } size='small'/> { name }
            </span>;
            break;
        case 'small':
            Preview = <span style={ { display: 'block' } }>
                <Flag countryName={ name } size='small'/> { name }
            </span>;
            break;
        case 'medium':
            Preview = <span style={ { display: 'block' } }>
                <Flag countryName={ name } size='small'/> { name }
            </span>;
            break;
        default:
            Preview = <span>Choose a valid size option: 'inline', 'small' or 'medium'</span>;
            break;
    }

    return (
        <div onClick={ () => navigateTo(join('/', 'countries', slugify(name, { lower: true }))) } title={ name } style={ { display: 'inline', cursor: 'pointer' } }>
            { Preview }
        </div>
    );
};

CountryPreview.propTypes = {
    data: PropTypes.shape({
        name: PropTypes.string.isRequired
    }).isRequired,
    size: PropTypes.string.isRequired
}

export default CountryPreview;
